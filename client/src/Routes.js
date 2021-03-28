import React from 'react';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage'
import CatalogPage from './Components/CatalogPage/CatalogPage';
import CatalogItemDetails from './Components/CatalogItemDetails/CatalogItemDetails';
const MainContainer = () => {
    return (
        <div>
            <Navbar />
            <Route path="/" exact component={MainPage} />
            <Redirect to="/" />
        </div>
    );
}
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/catalog" exact component={CatalogPage} />
                <Route path="/details/:id" exact component={({match})=><CatalogItemDetails id={match.params.id} />} />
                <Route path="/" component={MainContainer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;