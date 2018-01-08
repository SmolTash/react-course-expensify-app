import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink   } from 'react-router-dom';

import AddExpansePage from '../components/AddExpensePage';
import EditExpansePage from '../components/EditExpensePage'
import ExpanseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter> 
    <div>
        <Header/>
        <Switch>
            <Route path = "/" component = {ExpanseDashboardPage} exact={true}/> 
            <Route path = "/create" component = {AddExpansePage} />   
            <Route path = "/edit/:id" component = {EditExpansePage} />  
            <Route path = "/help" component = {HelpPage} />  
            <Route component = {NotFoundPage} />  
        </Switch>   
    </div>
</BrowserRouter>
);

export default AppRouter;