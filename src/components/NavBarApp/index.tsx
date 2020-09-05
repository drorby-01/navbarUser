import React,{useState} from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {Routes} from "../../data/index"

import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import { IRoute } from "../../interface/IRoute"
import { IRouteList } from "../../interface/IRouteList"
import axios from "axios"
import { render } from "@testing-library/react"
  
interface IProp{

}

interface IState{
    userImageUrl :string,
    firstName:string,
    lastName:string
}
  
  class NavBarApp extends React.Component<IProp,IState>
  {

    constructor(prop:IProp){
        super(prop)
        this.state={userImageUrl:"",firstName:"",lastName:""}
    }


    async getUsersImage()
    {
        const dataUser = await axios.get("https://randomuser.me/api/")
        const {data} =dataUser
        const { results } = data
        const [user] = results
        this.setState({userImageUrl:user.picture.medium,firstName:user.name.first,lastName:user.name.last})
           
    }

    componentDidMount(){
        this.getUsersImage()
    }

    render(){
        return (
            <Navbar style={{backgroundColor:"#9b70ab"}}  >
            <div style={{backgroundColor:"#9b70ab", display:"flex"}} className="col-lg-12 ">
            <Navbar.Brand href="#home" style={{color:"white"}} className="m-2">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  >
              <Nav className="mr-auto" >
                <LinksList routeList={Routes}/>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="m-2">
                  <NavDropdown.Item  >Action</NavDropdown.Item>
                  <NavDropdown.Item >Another action</NavDropdown.Item>
                  <NavDropdown.Item >Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >Separated link</NavDropdown.Item>
                </NavDropdown>
                <img src={this.state.userImageUrl}  style={{borderRadius:"50%",border:"1px solid black",height:"50px",width:"50px"}} className="offset-lg-11"  ></img>
                <p>{this.state.firstName} {this.state.lastName}</p>
                
              </Nav>
              </Navbar.Collapse>
              </div>
              </Navbar>
              );
          }
    
        
        }
    
    

    function LinksList(props:IRouteList):JSX.Element{
        
        return <>{props.routeList.map((element:IRoute,index:number)=>{
            const {path,name} = element
            return <Link to={path} style={{color:"white"}} key = {`link ${index}`} className="m-3">{name}</Link> 
        })
        }</>
    }

  export default NavBarApp;