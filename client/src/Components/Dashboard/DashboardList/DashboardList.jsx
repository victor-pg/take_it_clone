import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardItem from '../DashboardItem/DashboardItem';
import { Row, Container, Button } from 'react-bootstrap';

import './DashboardList.scss';

const DashboardList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(res => setData(res.data))
            .catch(error => console.log(error.message));
    }, [])
    console.log(data);

    const ccl = data.filter(item => item.type === "ccl");
    const aures = data.filter(item => item.type === "aures");
    const datalogic = data.filter(item => item.type === "datalogic");
    const shopguard = data.filter(item => item.type === "shopguard");
    const zebra = data.filter(item => item.type === "zebra");
    const bizebra = data.filter(item => item.type === "bizebra");
    const tsc = data.filter(item => item.type === "tsc");

    return (
        <div id="dashboard-catalog">
            <h1 className="m-4 text-center">Catalog</h1>
            <Container>
                <Button variant="success" className="m-3">Adaugă produs nou in catalog</Button>
            </Container>

            <h1 id="dashboard-ccl" className="m-4 text-center">CCL</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        ccl.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-aures" className="m-4 text-center">Aures</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        aures.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-datalogic" className="m-4 text-center">Datalogic</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        datalogic.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-shopguard" className="m-4 text-center">Shopguard</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        shopguard.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-zebra" className="m-4 text-center">Zebra</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        zebra.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-bizebra" className="m-4 text-center">Bizebra</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        bizebra.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

            <h1 id="dashboard-tsc" className="m-4 text-center">Imprimante TSC</h1>
            <Container>
                <Row md={2} lg={3} sm={2} xs={1}>
                    {
                        tsc.map(item => <DashboardItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>

        </div>
    );
}

export default DashboardList;