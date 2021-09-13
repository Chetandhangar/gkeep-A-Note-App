import React,{useState}from 'react'
import './Header.css'
import {Button,Nav,NavItem,Navbar,NavbarBrand,Collapse,NavbarToggler} from 'reactstrap'
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/auth-context'
export const Header = () =>{

    const [isNavOpen, setNavOpen] = useState(false)
    const {isUserLogin , logout,currentUsername}  = useAuth()

  function toggleNav(){
    setNavOpen(isNavOpen => isNavOpen = !isNavOpen)
  }
  
    return(
      <React.Fragment>
          <Navbar expand="md" dark className="header-container"> 
                <div className="container">
                <NavbarToggler onClick={toggleNav}></NavbarToggler>
                <NavbarBrand>inMind-Notes</NavbarBrand>
                <Collapse isOpen={isNavOpen} navbar> 
                <Nav navbar>
                    <NavItem>
                    <Link className="nav-link" to='/' style={{cursor : "pointer"}}>
                              <span className="fa fa-home fa-lg"></span>Home</Link>
                    </NavItem>
                    <NavItem >
                            {isUserLogin ? 
                            <Button onClick={() => logout()}>
                                <span className="fa fa-sign-out fa-lg">Logout</span>
                            </Button> : 
                             <Link className="nav-link" to='/login' style={{cursor : "pointer"}}>
                             <span className="fa fa-sign-in fa-lg">Login</span></Link>
                            } 
                        </NavItem>
                        <NavItem className="app-username">
                        <p>{`Hello ${currentUsername}`}</p>
                        </NavItem>
                </Nav>
                </Collapse>
                </div>
          </Navbar>
      </React.Fragment>
    )
}

/*<div className="header-container">
<Jumbotron fluid>
    <Container fluid className="header-content">
      <h1 className="app-brand">Daily Notes</h1>
      {isUserLogin ? <Button onClick={() => logout()}>Logout</Button> :
       <Link color="white" to="/login">Login</Link>}
       <h1 className="app-username">hello {currentUsername}</h1>
    </Container>
</Jumbotron>
</div>*/