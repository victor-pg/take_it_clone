import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import './DashboardItem.scss';

const DashboardItem = ({ item }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="dashboard-item-image" variant="top" src={process.env.PUBLIC_URL + "/img/products/" + item.imgurl} />
                <Card.Body>
                    <Card.Title className="dashboard-item-title">{item.name}</Card.Title>
                    <Card.Text className="dashboard-item-subtitle">{item.short_desc}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="primary">Modifică</Button>{' '}
                    <Button variant="danger">Șterge</Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default DashboardItem;