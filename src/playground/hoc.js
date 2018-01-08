// console.log ("hoc");
 
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requareAuthentication  = (WrappedComponent) =>{
    return (props) => (
        <div>
           {props.isAuthenticated ? (
            <WrappedComponent {...props}/>
            ) : (
                <p>Please login</p>
            )}
           
        </div> 
    );
};

const AdminInfo = withAdminWarning (Info);
const AuthInfo = requareAuthentication (Info);

// ReactDOM.render (<AdminInfo isAdmin = {true}  info = "There are the deteils"/> , document.getElementById('app') );
ReactDOM.render (<AuthInfo isAuthenticated = {true}  info = "There are the deteils"/> , document.getElementById('app') );

