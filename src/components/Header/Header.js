import './Header.css'
import {Jumbotron,Container,Button} from 'reactstrap'
export const Header = () =>{
    return(
        <div className="header-container">
            <Jumbotron fluid>
                <Container fluid>
                  <img src="" alt="App Logo"/>
                  <h1 className="app-brand">Daily Notes</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}