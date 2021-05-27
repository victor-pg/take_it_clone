import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Button } from 'react-bootstrap';
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

    const changeNewsModalState = () => {
        setShowNewsModal(!showNewsModal);
    }

    const changeProductsModalState = () => {
        setShowProductsModal(!showProductsModal);
    }

    const getImage = (e) => {
        setFile(e.target.files[0]);
    }
    const getProductsImage = (e) => {
        setFileProducts(e.target.files[0]);
    }

    const customNewsStyles = {
        content: {
            height: '500px'
        }
    };

    const customProductsStyles = {
        content: {
            height: '550px',
            padding: '20px 0 0 0'
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
                    <label htmlFor="fileProducts">Imaginea</label>
                    <input type="file" name="fileProducts" onChange={getProductsImage} required />
                </div>
                <input type="submit" value="Adaugă" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand>
                    <ScrollLink className="text-white" to="dashboard" spy={true} smooth={true} >TakeIT dashboard</ScrollLink>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-news" spy={true} smooth={true}>Noutăți</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-ccl" spy={true} smooth={true}>CCL</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-aures" spy={true} smooth={true}>Aures</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-datalogic" spy={true} smooth={true}>Datalogic</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-shopguard" spy={true} smooth={true}>Shopguard</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-zebra" spy={true} smooth={true}>Zebra</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-bizebra" spy={true} smooth={true}>Bizebra</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-tsc" spy={true} smooth={true}>TSC</ScrollLink>
                    </Nav.Link>
                    {/* <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-tsc" spy={true} smooth={true}>Produs nou</ScrollLink>
                    </Nav.Link> */}
                    <Nav className="m-1">
                        <Button variant={"warning"} onClick={changeNewsModalState} className="text-white" >Adaugă articol nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button variant={"success"} onClick={changeProductsModalState}>Adaugă produs nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button onClick={handleLogout} variant={"danger"}>Logout</Button>
                    </Nav>
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
            </Navbar>
        </>
    );
}

export default DashboardNav;