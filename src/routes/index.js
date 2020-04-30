import React from 'react'
import { BrowserRouter, Switch} from 'react-router-dom'
import Route from './Route';
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
import Profile from '../pages/profile'
import Settings from '../pages/settings'
import Info from '../pages/info'

const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/info' component={Info} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
