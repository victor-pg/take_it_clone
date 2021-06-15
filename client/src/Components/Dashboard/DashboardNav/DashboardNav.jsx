import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Button,Dropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import ModalWindow from '../../ModalWindow/ModalWindow';
import {FormattedMessage} from 'react-intl';

import './DashboardNav.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNav = ({ handleLogout }) => {
    const [showNewsModal, setShowNewsModal] = useState(false);
    const [title, setTitle] = useState('');
    const [titleRu, setTitleRu] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [subtitleRu, setSubtitleRu] = useState('');
    const [content, setContent] = useState('');
    const [contentRu, setContentRu] = useState('');
    const [file, setFile] = useState('');

    const [showProductsModal, setShowProductsModal] = useState(false);
    const [name, setName] = useState('');
    const [nameRu, setNameRu] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [shortDescriptionRu, setShortDescriptionRu] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionRu, setDescriptionRu] = useState('');
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
        formData.append('titleRu', titleRu);
        formData.append('subtitle', subtitle);
        formData.append('subtitleRu', subtitleRu);
        formData.append('content', content);
        formData.append('contentRu', contentRu);

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
        formData.append('nameRu', nameRu);
        formData.append('shortDescription', shortDescription);
        formData.append('shortDescriptionRu', shortDescriptionRu);
        formData.append('description', description);
        formData.append('descriptionRu', descriptionRu);
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
                    <label htmlFor="titleRu">Заголовок</label>
                    <input type="text" name="titleRu" required onChange={(e) => setTitleRu(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="subtitle">Subtitlu</label>
                    <input type="text"  name="subtitle" onChange={(e) => setSubtitle(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="subtitleRu">Подзаголовок</label>
                    <input type="text"  name="subtitleRu" onChange={(e) => setSubtitleRu(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="content">Conținut</label>
                    <textarea name="content" cols="30" rows="10" required onChange={(e) => setContent(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="contentRu">Контент</label>
                    <textarea name="contentRu" cols="30" rows="10" required onChange={(e) => setContentRu(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="file">Imaginea/Картинка</label>
                    <input type="file" name="file" onChange={getImage} required />
                </div>
                <input type="submit" value="Adaugă/Добавить" className="btn btn-primary d-block m-auto" />
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
                    <label htmlFor="name">Имя</label>
                    <input type="text" name="name_ru" required onChange={(e)=>setNameRu(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="shortDescription">Scurtă descriere</label>
                    <input type="text" placeholder="Opțional/Необязательно" name="shortDescription" onChange={(e) => setShortDescription(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="name">Краткое описание</label>
                    <input type="text" name="short_desc_ru" placeholder="Необязательно" required onChange={(e)=>setShortDescriptionRu(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="description">Descriere</label>
                    <textarea name="description" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="description">Описание</label>
                    <textarea name="description_ru" cols="30" rows="10" required onChange={(e) => setDescriptionRu(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="type">Tip produs/Тип</label>
                    <select name="type" value={type} required onChange={(e) => setType(e.target.value)}>
                        {productTypes.map(({type})=>{
                            return <option value={type} >{type}</option>
                        })}
                    </select>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="fileProducts">Imaginea/Картинка</label>
                    <input type="file" name="fileProducts" onChange={getProductsImage} required />
                </div>
                <input type="submit" value="Adaugă/Добавить" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }

    const newTypeHtmlContent = () => {
        return (
            <form className="type-modal-html-content" onSubmit={saveNewType}>
                <div className="modal-input-group">
                    <label htmlFor="newType">Tipul/Тип</label>
                    <input type="text" name="newType" required onChange={(e) => setNewType(e.target.value)} />
                </div>
                <input type="submit" value="Creează/Создать" className="btn btn-primary d-block m-auto" />
            </form>
        );
    }
    const deleteTypeHtmlContent = () => {
        return (
            <form className="type-modal-html-content" onSubmit={deleteType}>
                <div className="modal-input-group">
                    <label htmlFor="deletedType">Tipul/Тип</label>
                    <select name="deletedType" id="deletedType" value={deletedType} onChange={(e) => setDeletedType(e.target.value)}>
                    {productTypes.map(({type})=>{
                            return <option value={type} >{type}</option>
                        })}
                    </select>
                </div>
                <input type="submit" value="Șterge/Удалить" className="btn btn-primary d-block m-auto" />
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
                        <ScrollLink className="text-muted" to="dashboard-news" spy={true} smooth={true}><FormattedMessage id="news"/></ScrollLink>
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
                        <FormattedMessage id="actions"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Button variant={"secondary"} onClick={changeNewsModalState} className="text-white"><FormattedMessage id="news-add"/></Button>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <Button variant={"secondary"} onClick={changeProductsModalState}><FormattedMessage id="product-add"/></Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant={"secondary"} onClick={changeNewTypeModalState}><FormattedMessage id="type-add"/></Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant={"secondary"} onClick={changeDeleteTypeModalState}><FormattedMessage id="type-delete"/></Button>
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
                        message={<FormattedMessage id="news-add"/>}
                        customStyles={customNewsStyles}
                        htmlContent={newsModalHtmlContent}
                    />
                    : null}
                {showProductsModal ?
                    <ModalWindow
                        message={<FormattedMessage id="product-add"/>}
                        customStyles={customProductsStyles}
                        htmlContent={productsModalHtmlContent}
                    />
                    : null}
                {showNewTypeModal ?
                    <ModalWindow
                        message={<FormattedMessage id="type-add"/>}
                        customStyles={null}
                        htmlContent={newTypeHtmlContent}
                    />
                    : null}
                {showDeleteTypeModal ?
                    <ModalWindow
                        message={<FormattedMessage id="type-delete"/>}
                        customStyles={null}
                        htmlContent={deleteTypeHtmlContent}
                    />
                    : null}
            </Navbar>
        </>
    );
}

export default DashboardNav;