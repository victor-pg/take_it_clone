import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';

import './DashboardNewsItem.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNewsItem = ({ item,deleteArticle,updateArticle }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + `/img/news/${item.imgurl}`} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.subtitle}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="primary" onClick={updateArticle}>Modifică</Button>{' '}
                    <Button variant="danger" onClick={deleteArticle}>Șterge</Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default DashboardNewsItem;