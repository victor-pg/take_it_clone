import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNewsItem from '../DashboardNewsItem/DashboardNewsItem';
import { Row, Container } from 'react-bootstrap';

import './DashboardNewsList.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/api/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
        console.log('render');
    }, [])

    const deleteArticle= async (id)=>{
        await axios.delete(`/api/news/delete/${id}`)
            .then(res=>{
                alert(res.data.message);
                setNews(news=>news.filter(article=>article.id!==id))
            })
            .catch(err=>alert(err.data.message))
    }

    return (
        <div id="dashboard-news">
            <h1 className="m-4 text-center">Noutăți</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        news.map(item => <DashboardNewsItem item={item} key={item.id} deleteArticle={()=>deleteArticle(item.id)}  />)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default DashboardNewsList;