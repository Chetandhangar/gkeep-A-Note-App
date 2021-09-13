import './Header.css'
import {Jumbotron,Container,Button} from 'reactstrap'
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/auth-context'
export const Header = () =>{
    const {isUserLogin,logout} = useAuth();
    return(
        <div className="header-container">
            <Jumbotron fluid>
                <Container fluid>
                  <img src="" alt="App Logo"/>
                  <h1 className="app-brand">Daily Notes</h1>
                  {isUserLogin ? <Button onClick={() => logout()}>Logout</Button> :
                   <Link color="white" to="/login">Login</Link>}
                </Container>
            </Jumbotron>
        </div>
    )
}