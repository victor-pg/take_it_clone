import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

import './DashboardItem.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardItem = ({ item, deleteProduct, updateProduct }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="dashboard-item-image" variant="top" src={process.env.PUBLIC_URL + "/img/products/" + item.imgurl} />
                <Card.Body>
                    <Card.Title className="dashboard-item-title">{item.name}</Card.Title>
                    <Card.Text className="dashboard-item-subtitle">{item.short_desc}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="primary" onClick={updateProduct}><FormattedMessage id="modify-button"/></Button>{' '}
                    <Button variant="danger" onClick={deleteProduct}><FormattedMessage id="delete-button"/></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default DashboardItem;