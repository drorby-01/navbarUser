import React,{useState,Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavDropdown from "react-bootstrap/NavDropdown"
import NavBarApp from "./components/NavBarApp";
import {Routes} from "./data/index";
import {IRoute} from "./interface/IRoute";
import {IRouteList} from "./interface/IRouteList";

function App() {
  // console.log(Routes)
  
  return (
    <div className="container">
      <Router>
      <NavBarApp />
      <div className="row">
    
      <Switch>
        <RouteList routeList ={Routes}/>
      </Switch>
           
      </div>
      </Router>
    </div>
  );
}


function RouteList(props:IRouteList){

    return <>{props.routeList.map((element:IRoute,index:number)=>{
      const {path,component}=element
        return <Route path={path} component={component} key={`route ${index}`}/>
      }
    )}</>

}

export default App;
