import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNewsItem from '../DashboardNewsItem/DashboardNewsItem';
import ModalWindow from '../../ModalWindow/ModalWindow';
import { Row, Container } from 'react-bootstrap';

import './DashboardNewsList.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNewsList = () => {
    const [news, setNews] = useState([]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [text, setText] = useState('');
    const [newImage, setNewImage] = useState('');

    useEffect(() => {
        axios.get('/api/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
        getCurrentArticle(currentId);
    }, [currentId])

    const changeModalState = (id) => {
        setShowUpdateModal(!showUpdateModal);
        setCurrentId(id);
    }

    const deleteArticle = async (id) => {
        await axios.delete(`/api/news/delete/${id}`)
            .then(res => {
                alert(res.data.message);
                setNews(news => news.filter(article => article.id !== id))
            })
            .catch(err => alert(err.data.message))
    }

    const customStyles = {
        content: {
            height: '550px',
            padding: '20px 0 0 0'
        }
    };

    const getCurrentArticle = async (id) => {
        await axios.get(`/api/news/${id}`)
            .then(res => {
                const { title, subtitle, text } = res.data[0];
                setTitle(title); setSubtitle(subtitle); setText(text);
            })
            .catch(err => console.log('Update error ' + err))
    }

    const updateArticleContent = () => {
        return (
            <form className="news-modal-html-content" onSubmit={saveUpdate}>
                <div className="modal-input-group">
                    <label htmlFor="title">Titlu</label>
                    <input type="text" name="title" key="super-secret-key" defaultValue={title} onChange={(e) => {setTitle(e.target.value);console.log(title)}} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="subtitle">Subtitlu</label>
                    <input type="text" name="subtitle" defaultValue={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="text">Conținut</label>
                    <textarea name="text" cols="30" rows="10" defaultValue={text} onChange={(e) => setText(e.target.value)} ></textarea>
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

        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('text', text);

        console.log(`Title : ${title}, Subtitle : ${subtitle}, Text : ${text}`);
        // end my

        try {
            await axios.put(`/api/news/update/${currentId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((result) => alert(result.data.message));
        } catch (err) {
            alert('A aparut o problemă');
        }
        
    }



    return (
        <div id="dashboard-news">
            <h1 className="m-4 text-center">Noutăți</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        news.map(item => <DashboardNewsItem item={item} key={item.id} deleteArticle={() => deleteArticle(item.id)} updateArticle={() => changeModalState(item.id)} />)
                    }
                </Row>
                {showUpdateModal ?
                    <ModalWindow
                        message="Modifica articolul"
                        customStyles={customStyles}
                        htmlContent={updateArticleContent}
                    /> : null}
            </Container>
        </div>
    );
}

export default DashboardNewsList;