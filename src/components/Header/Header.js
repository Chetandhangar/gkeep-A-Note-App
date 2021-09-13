import './Header.css'
import {Jumbotron,Container} from 'reactstrap'
import { Link } from 'react-router-dom'
export const Header = () =>{
    return(
        <div className="header-container">
            <Jumbotron fluid>
                <Container fluid>
                  <img src="" alt="App Logo"/>
                  <h1 className="app-brand">Daily Notes</h1>
                  <Link color="white" to="/login">Login</Link>
                </Container>
            </Jumbotron>
        </div>
    )
}