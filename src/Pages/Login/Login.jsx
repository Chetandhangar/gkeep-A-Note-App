import React , {useState} from 'react';
import {Form,FormGroup, Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useAuth} from '../../context/auth-context'
export const Login = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {loginWithCredentials,loader} = useAuth()

    function handleLogin(e){
        e.preventDefault();
        loginWithCredentials(username,password)
        setUsername("")
        setPassword("");
    }
    return(
        <div className="container">
            Login Page
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Input 
                    type = "text"
                    value={username}
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(username => username = e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                    type = "password"
                    value={password}
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(password => password = e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" value="submit" color="primary">{loader ? <p>Loading...</p>
                    :<p>Login</p>}</Button>
                </FormGroup>
                <FormGroup>
                    <p style={{color:"white"}}>New to inMind <Link to="/signup">SignUp</Link></p>
                </FormGroup>
            </Form>
        </div>
    )
}
