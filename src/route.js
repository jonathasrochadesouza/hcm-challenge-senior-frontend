import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarcarPonto from './paginas/MarcarPonto';

/**
 * @author Jonathas Rocha
 */

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MarcarPonto}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;