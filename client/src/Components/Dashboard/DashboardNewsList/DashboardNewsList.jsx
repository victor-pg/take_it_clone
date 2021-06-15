import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNewsItem from '../DashboardNewsItem/DashboardNewsItem';
import ModalWindow from '../../ModalWindow/ModalWindow';
import { Row, Container } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

import './DashboardNewsList.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNewsList = () => {
    const [news, setNews] = useState([]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [title, setTitle] = useState('');
    const [titleRu, setTitleRu] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [subtitleRu, setSubtitleRu] = useState('');
    const [text, setText] = useState('');
    const [textRu, setTextRu] = useState('');
    const [newImage, setNewImage] = useState('');


    useEffect(() => {
        getAllNews()
        getCurrentArticle(currentId);
    }, [currentId])

    const getAllNews=async()=>{
        if(JSON.parse(localStorage.getItem('language'))==='ro'){
            await axios
            .get("/api/news")
            .then((res) => setNews(res.data))
            .catch((error) => console.log(error.message));
          }else if(JSON.parse(localStorage.getItem('language'))==='ru'){
            await axios
            .get("/api/news/ru")
            .then((res) => setNews(res.data))
            .catch((error) => console.log(error.message));
          }
    }    

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
            padding: '40px 0 0 0'
        }
    };

    const getCurrentArticle = async (id) => {
        
            await axios
            .get(`/api/news/${id}`)
            .then((res) => {
                const { title, subtitle, text } = res.data[0];
                setTitle(title); setSubtitle(subtitle); setText(text);
            })
            .catch((error) => console.log(error.message));
         
            await axios
            .get(`/api/news/ru/${id}`)
            .then((res) => {
                const { title, subtitle, text } = res.data[0];
                setTitleRu(title); setSubtitleRu(subtitle); setTextRu(text);
            })
            .catch((error) => console.log(error.message));
    }

    const updateArticleContent = () => {
        return (
            <form className="news-modal-html-content" onSubmit={saveUpdate}>
                <div className="modal-input-group">
                    <label htmlFor="title">Titlu</label>
                    <input type="text" name="title" key="super-secret-key" defaultValue={title} onChange={(e) => {setTitle(e.target.value);console.log(title)}} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="titleRu">Заголовок</label>
                    <input type="text" name="titleRu" key="super-secret-key" defaultValue={titleRu} onChange={(e) => {setTitleRu(e.target.value);console.log(title)}} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="subtitle">Subtitlu</label>
                    <input type="text" name="subtitle" defaultValue={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="subtitleRu">Подзаголовок</label>
                    <input type="text" name="subtitleRu" defaultValue={subtitleRu} onChange={(e) => setSubtitleRu(e.target.value)} />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="text">Conținut</label>
                    <textarea name="text" cols="30" rows="10" defaultValue={text} onChange={(e) => setText(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="textRu">Контент</label>
                    <textarea name="textRu" cols="30" rows="10" defaultValue={textRu} onChange={(e) => setTextRu(e.target.value)} ></textarea>
                </div>
                <div className="modal-input-group">
                    <label htmlFor="file">Imaginea/Картинка</label>
                    <input type="file" name="file" onChange={(e) => setNewImage(e.target.files[0])} />
                </div>
                <input type="submit" value="Modifică/Изменить" className="btn btn-primary d-block m-auto" onClick={saveUpdate} />
            </form>
        );
    }

    const saveUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', newImage);

        // my 

        formData.append('title', title);
        formData.append('titleRu', titleRu);
        formData.append('subtitle', subtitle);
        formData.append('subtitleRu', subtitleRu);
        formData.append('text', text);
        formData.append('textRu', textRu);

        // end my

        try {
            await axios.put(`/api/news/update/${currentId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((result) => {
                alert(result.data.message)
                setShowUpdateModal(false);
            });
        } catch (err) {
            alert('A aparut o problemă');
        }
        
    }



    return (
        <div id="dashboard-news">
            <h1 className="m-4 text-center"><FormattedMessage id="news"/></h1>
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