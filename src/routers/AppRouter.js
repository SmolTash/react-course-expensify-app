import React from 'react';
import {Router, Route, Switch, Link, NavLink   } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import AddExpansePage from '../components/AddExpensePage';
import EditExpansePage from '../components/EditExpensePage'
import ExpanseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>            
            <Switch>
                <Route path = "/" component = {LoginPage} exact={true}/> 
                <PrivateRoute path = "/dashboard" component = {ExpanseDashboardPage}/> 
                <PrivateRoute path = "/create" component = {AddExpansePage} />   
                <PrivateRoute path = "/edit/:id" component = {EditExpansePage} />  
                <Route path = "/help" component = {HelpPage} />  
                <Route component = {NotFoundPage} />  
            </Switch>   
        </div>
    </Router>
);

export default AppRouter;