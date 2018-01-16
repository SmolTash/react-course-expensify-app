import React from 'react';
import {Router, Route, Switch, Link, NavLink   } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import AddExpansePage from '../components/AddExpensePage';
import EditExpansePage from '../components/EditExpensePage'
import ExpanseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>            
            <Switch>
                <PublicRoute path = "/" component = {LoginPage} exact={true}/> 
                <PrivateRoute path = "/dashboard" component = {ExpanseDashboardPage}/> 
                <PrivateRoute path = "/create" component = {AddExpansePage} />   
                <PrivateRoute path = "/edit/:id" component = {EditExpansePage} />                 
                <Route component = {NotFoundPage} />  
            </Switch>   
        </div>
    </Router>
);

export default AppRouter;