import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

import './DashboardNewsItem.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNewsItem = ({ item,deleteArticle,updateArticle }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{height:'15vw'}} src={process.env.PUBLIC_URL + `/img/news/${item.imgurl}`} />
                <Card.Body style={{height:'auto'}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.subtitle}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="primary" onClick={updateArticle}><FormattedMessage id="modify-button"/></Button>{' '}
                    <Button variant="danger" onClick={deleteArticle}><FormattedMessage id="delete-button"/></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default DashboardNewsItem;