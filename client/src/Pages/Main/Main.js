import React from 'react';
import'./Main.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import SubHeader from '../../Components/SubHeader/SubHeader'

class Main extends React.Component {
    render () {
        return (
            <React.Fragment>

                <SubHeader />
                <Switch>
                    <Route path="/market/products" exact component = {Products} />
                    <Route path="/market/Farm" exact component = {Farm} />
                </Switch>

            </React.Fragment>
        )
    }
}