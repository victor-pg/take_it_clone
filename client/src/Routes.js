import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage'

const MainContainer = () => {
    return (
        <div>
            <Navbar />
            <Route path="/" exact component={MainPage} />
            <Route path="/test" exact component={() => <h1>TestPage</h1>} />
        </div>
    );
}
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/catalog" exact component={() => <h1>Catalog</h1>} />
                <Route path="/" component={MainContainer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;