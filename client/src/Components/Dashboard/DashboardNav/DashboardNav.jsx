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
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const changeNewsModalState = () => {
        setShowNewsModal(!showNewsModal);
    }

    const getImage = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const customStyles = {
        content: {
            height: '500px'
        }
    };

    const saveArticle =async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        // my 

        formData.append('title',title);
        formData.append('subtitle',subtitle);
        formData.append('content',content);

        // end my
    
        try {
          const res = await axios.post('/api/news/save', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          })
          .then(res=>alert('Succes'));    
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
                    <input type="text" name="subtitle" required onChange={(e) => setSubtitle(e.target.value)} />
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
                    <Nav className="m-1">
                        <Button variant={"warning"} onClick={changeNewsModalState}>Adaugă articol nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button variant={"success"}>Adaugă produs nou</Button>
                    </Nav>
                    <Nav className="m-1">
                        <Button onClick={handleLogout} variant={"danger"}>Logout</Button>
                    </Nav>
                </Nav>
                {showNewsModal ?
                    <ModalWindow
                        message="Adaugă un articol nou"
                        customStyles={customStyles}
                        htmlContent={newsModalHtmlContent}
                    />
                    : null}
            </Navbar>
        </>
    );
}

export default DashboardNav;