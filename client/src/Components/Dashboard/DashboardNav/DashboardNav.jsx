import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Button,Dropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import ModalWindow from '../../ModalWindow/ModalWindow';

import './DashboardNav.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNav = ({ handleLogout }) => {
    const [showNewsModal, setShowNewsModal] = useState(false);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');

    const [showProductsModal, setShowProductsModal] = useState(false);
    const [name, setName] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('ccl');
    const [fileProducts, setFileProducts] = useState('');

    const [productTypes,setProductTypes]=useState([]);
    const [showNewTypeModal,setShowNewTypeModal] = useState(false);
    const [showDeleteTypeModal,setShowDeleleTypeModal] = useState(false);
    const [deletedType,setDeletedType]=useState('');
    const [newType,setNewType]=useState('');

    useEffect(() => {
        getProductTypes();
      }, []);

    const getProductTypes = async () => {
        await axios
          .get("/api/products/types")
          .then((res) => setProductTypes(res.data))
          .catch((err) => console.log("Error while getting product types " + err));
      };

    const changeNewsModalState = () => {
        setShowNewsModal(!showNewsModal);
    }

    const changeProductsModalState = () => {
        setShowProductsModal(!showProductsModal);
    }
    const changeNewTypeModalState = () =>{
        setShowNewTypeModal(!showNewTypeModal)
    }
    const changeDeleteTypeModalState = () =>{
        setShowDeleleTypeModal(!showDeleteTypeModal)
    }

    const getImage = (e) => {
        setFile(e.target.files[0]);
    }
    const getProductsImage = (e) => {
        setFileProducts(e.target.files[0]);
    }

    const customNewsStyles = {
        content: {
            height: '500px',
            padding: '40px 0 0 0'
        }
    };

    const customProductsStyles = {
        content: {
            height: '550px',
            padding: '40px 0 0 0'
        }
    };

    const saveArticle = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        // my 

        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('content', content);

        // end my

        try {
            await axios.post('/api/news/save', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((result) => {
                alert(result.data.message)
                setShowNewsModal(false)
            });
        } catch (err) {
            alert('A aparut o problemă');
            console.log(err);
        }
    };

    const saveProduct = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fileProducts', fileProducts);

        // my 

        formData.append('name', name);
        formData.append('shortDescription', shortDescription);
        formData.append('description', description);
        formData.append('type', type);

        // end my

        try {
            await axios.post('/api/products/save', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((result) => {
                alert(result.data.message)
                setShowProductsModal(false)
            });
        } catch (err) {
            alert('A aparut o problemă');
            console.log(err);
        }
    };

    const saveNewType = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('type',newType);
        
        try {
            await axios.post('/api/products/types/save',formData)
                .then(result=>alert(result.data.message))
        } catch (error) {
            alert('A aparut o problemă')
            console.log(error)
        }
    }
    const deleteType = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('type',deletedType);

        try {
            await axios.post('/api/products/types/delete',formData)
                .then(result=>alert(result.data.message))
        } catch (error) {
            alert('A aparut o problemă')
            console.log(error)
        }
    }
    

    const newsModalHtmlContent = () => {
        return (
            <form className="news-modal-html-content" onSubmit={saveArticle}>
                <div className="modal-input-group">
                    <label htmlFor="title">Titlu</label>
                    <input type="text" name="title" required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="subtitle">Subtitlu</label>
                    <input type="text"  name="subtitle" onChange={(e) => setSubtitle(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="content">Conținut</label>
                    <textarea name="content" cols="30" rows="10" required onChange={(e) => setContent(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="file">Imaginea</label>
                    <input type="file" name="file" onChange={getImage} required />
                </div>
                <input type="submit" value="Adaugă" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }
    const productsModalHtmlContent = () => {
        return (
            <form className="news-modal-html-content" onSubmit={saveProduct}>
                <div className="modal-input-group">
                    <label htmlFor="name">Nume</label>
                    <input type="text" name="name" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="shortDescription">Scurtă descriere</label>
                    <input type="text" placeholder="Opțional" name="shortDescription" onChange={(e) => setShortDescription(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="description">Descriere</label>
                    <textarea name="description" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="type">Tip produs</label>
                    <select name="type" value={type} required onChange={(e) => setType(e.target.value)}>
                        {productTypes.map(({type})=>{
                            return <option value={type} >{type}</option>
                        })}
                    </select>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="fileProducts">Imaginea</label>
                    <input type="file" name="fileProducts" onChange={getProductsImage} required />
                </div>
                <input type="submit" value="Adaugă" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }

    const newTypeHtmlContent = () => {
        return (
            <form className="type-modal-html-content" onSubmit={saveNewType}>
                <div className="modal-input-group">
                    <label htmlFor="newType">Tipul</label>
                    <input type="text" name="newType" required onChange={(e) => setNewType(e.target.value)} />
                </div>
                <input type="submit" value="Creează" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }
    const deleteTypeHtmlContent = () => {
        return (
            <form className="type-modal-html-content" onSubmit={deleteType}>
                <div className="modal-input-group">
                    <label htmlFor="deletedType">Tipul</label>
                    <select name="deletedType" id="deletedType" value={deletedType} onChange={(e) => setDeletedType(e.target.value)}>
                    {productTypes.map(({type})=>{
                            return <option value={type} >{type}</option>
                        })}
                    </select>
                </div>
                <input type="submit" value="Șterge" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top" className="dashboard-navbar">
                <Navbar.Brand>
                    <ScrollLink className="text-white" to="dashboard" spy={true} smooth={true} >TakeIT dashboard</ScrollLink>
                </Navbar.Brand>
                <Nav className="mr-auto">

                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-news" spy={true} smooth={true}>Noutăți</ScrollLink>
                    </Nav.Link>

                    {productTypes.map(({ type }) => {
                  return (
                    <Nav.Link className="text-capitalize">
                        <ScrollLink className="text-muted" to={`dashboard-${type}`} spy={true} smooth={true}>{type}</ScrollLink>
                    </Nav.Link>
                  );
                })}

                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Acțiuni
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Button variant={"warning"} onClick={changeNewsModalState} className="text-white" >Adaugă articol nou</Button>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <Button variant={"success"} onClick={changeProductsModalState}>Adaugă produs nou</Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant={"primary"} onClick={changeNewTypeModalState}>Adaugă tip nou</Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant={"secondary"} onClick={changeDeleteTypeModalState}>Șterge tip</Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button onClick={handleLogout} variant={"danger"}>Logout</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                

                    {/* <Nav className="m-1">
                        <Button variant={"warning"} onClick={changeNewsModalState} className="text-white" >Adaugă articol nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button variant={"success"} onClick={changeProductsModalState}>Adaugă produs nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button variant={"primary"} onClick={changeNewTypeModalState}>Adaugă tip nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button variant={"secondary"} onClick={changeDeleteTypeModalState}>Șterge tip</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button onClick={handleLogout} variant={"danger"}>Logout</Button>
                    </Nav> */}


                </Nav>

                {showNewsModal ?
                    <ModalWindow
                        message="Adaugă un articol nou"
                        customStyles={customNewsStyles}
                        htmlContent={newsModalHtmlContent}
                    />
                    : null}
                {showProductsModal ?
                    <ModalWindow
                        message="Adaugă un produs nou"
                        customStyles={customProductsStyles}
                        htmlContent={productsModalHtmlContent}
                    />
                    : null}
                {showNewTypeModal ?
                    <ModalWindow
                        message="Adaugă un tip nou"
                        customStyles={null}
                        htmlContent={newTypeHtmlContent}
                    />
                    : null}
                {showDeleteTypeModal ?
                    <ModalWindow
                        message="Alegeți tipul"
                        customStyles={null}
                        htmlContent={deleteTypeHtmlContent}
                    />
                    : null}
            </Navbar>
        </>
    );
}

export default DashboardNav;