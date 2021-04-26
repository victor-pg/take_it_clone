import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNewsItem from '../DashboardNewsItem/DashboardNewsItem';
import { Row, Container, Button } from 'react-bootstrap';

import './DashboardNewsList.scss';

const DashboardNewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/api/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
        console.log('render');
    }, [])

    return (
        <div id="dashboard-news">
            <h1 className="m-4 text-center">Noutăți</h1>
            <Container>
                <Button variant="success" className="m-3">Adaugă un articol nou</Button>
            </Container>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        news.map(item => <DashboardNewsItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default DashboardNewsList;