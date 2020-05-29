import React from 'react';
import'./Main.scss';
import { Route, Switch} from 'react-router-dom';

import SubHeader from '../../Components/SubHeader/SubHeader';
import Products from '../../Components/Products/Products';
import Farm from '../../Components/Farm/Farm';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Apple from '../../Components/ProductCard/Apple'

class Main extends React.Component {
    render () {
        return (
            <React.Fragment>

                

                <div>
                    <SubHeader />
                    <ProductCard />
                </div>

                
                {/* <Switch>
                    <Route path="/market/products" exact component = {Products} />
                    <Route path="/market/farm" exact component = {Farm} />
                </Switch> */}

            </React.Fragment>
        )
    }
}

export default Main;