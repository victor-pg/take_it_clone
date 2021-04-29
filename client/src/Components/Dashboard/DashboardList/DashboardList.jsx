import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardItem from '../DashboardItem/DashboardItem';
import ModalWindow from '../../ModalWindow/ModalWindow';
import { Row, Container } from 'react-bootstrap';

import './DashboardList.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardList = () => {
    const [data, setData] = useState([]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const [currentId, setCurrentId] = useState(0);
    const [name, setName] = useState('');
    const [short_desc, setShortDesc] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [newImage, setNewImage] = useState('');


    useEffect(() => {
        axios.get('/api/products')
            .then(res => setData(res.data))
            .catch(error => console.log(error.message));
        getCurrentProduct(currentId);
    }, [currentId])

    const changeModalState = (id) => {
        setShowUpdateModal(!showUpdateModal);
        setCurrentId(id);
    }

    const customStyles = {
        content: {
            height: '550px',
            padding: '20px 0 0 0'
        }
    };

    const getCurrentProduct = async (id) => {
        await axios.get(`/api/details/${id}`)
            .then(res => {
                const { name, short_desc, description, type } = res.data[0];
                setName(name); setShortDesc(short_desc); setDescription(description);
                setType(type);
            })
            .catch(err => console.log('Update error ' + err))
    }

    const updateProductContent = () => {
        return (
            <form className="news-modal-html-content" onSubmit={saveUpdate}>
                <div className="modal-input-group">
                    <label htmlFor="name">Nume</label>
                    <input type="text" name="name" key="super-secret-key" defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="short_desc">Scurtă descriere</label>
                    <input type="text" name="short_desc" defaultValue={short_desc} onChange={(e) => setShortDesc(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="description">Descriere</label>
                    <textarea name="description" cols="30" rows="10" defaultValue={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="type">Tip produs</label>
                    <select name="type" defautlValue={type} onChange={(e) => setType(e.target.value)}>
                        <option value="ccl">CCL</option>
                        <option value="aures">Aures</option>
                        <option value="datalogic">Datalogic</option>
                        <option value="shopguard">Shopguard</option>
                        <option value="zebra">Zebra</option>
                        <option value="bizebra">Bizebra</option>
                        <option value="tsc">TSC</option>
                    </select>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="file">Imaginea</label>
                    <input type="file" name="file" onChange={(e) => setNewImage(e.target.files[0])} />
                </div>
                <input type="submit" value="Modifică" className="btn btn-primary d-block m-auto" onClick={saveUpdate} />
            </form>
        );
    }

    const saveUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', newImage);

        // my 

        formData.append('name', name);
        formData.append('short_desc', short_desc);
        formData.append('description', description);
        formData.append('type', type);

        console.log(`Name : ${name}, SDesc : ${short_desc}, Desc : ${description}`);
        // end my

        try {
            await axios.put(`/api/products/update/${currentId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((result) => alert(result.data.message));
        } catch (err) {
            alert('A aparut o problemă');
        }

    }



    const deleteProduct = async (id) => {
        await axios.delete(`/api/products/delete/${id}`)
            .then(res => {
                alert(res.data.message);
                setData(data => data.filter(product => product.id !== id))
            })
            .catch(err => alert(err.data.message))
    }

    const ccl = data.filter(item => item.type === "ccl");
    const aures = data.filter(item => item.type === "aures");
    const datalogic = data.filter(item => item.type === "datalogic");
    const shopguard = data.filter(item => item.type === "shopguard");
    const zebra = data.filter(item => item.type === "zebra");
    const bizebra = data.filter(item => item.type === "bizebra");
    const tsc = data.filter(item => item.type === "tsc");

    return (
        <div id="dashboard-catalog">
            <h1 className="m-4 text-center">Catalog</h1>

            <h1 id="dashboard-ccl" className="m-4 text-center">CCL</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        ccl.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-aures" className="m-4 text-center">Aures</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        aures.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)}/>)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-datalogic" className="m-4 text-center">Datalogic</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        datalogic.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)}/>)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-shopguard" className="m-4 text-center">Shopguard</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        shopguard.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)}/>)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-zebra" className="m-4 text-center">Zebra</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        zebra.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)}/>)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-bizebra" className="m-4 text-center">Bizebra</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        bizebra.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)}/>)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-tsc" className="m-4 text-center">Imprimante TSC</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        tsc.map(item => <DashboardItem item={item} key={item.id} deleteProduct={() => deleteProduct(item.id)} updateProduct={() => changeModalState(item.id)}/>)
                    }
                </Row>
            </Container>
            {showUpdateModal ?
                <ModalWindow
                    message="Modifica produsul"
                    customStyles={customStyles}
                    htmlContent={updateProductContent}
                /> : null}
        </div>
    );
}

export default DashboardList;