import React from 'react'
import { BrowserRouter, Switch} from 'react-router-dom'
import Route from './Route';
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'


const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
