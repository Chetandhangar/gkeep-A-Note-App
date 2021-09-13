import React , {useState} from 'react';
import {Form,FormGroup, Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export const Login = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
    }
    return(
        <div className="container">
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Input 
                    type = "text"
                    value={username}
                    id="username"
                    name="username"
                    onChange={(e) => setUsername(username => username = e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                    type = "password"
                    value={password}
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(password => password = e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </FormGroup>
                <FormGroup>
                    <p>New to inMind <Link to="signup">SignUp</Link></p>
                </FormGroup>
            </Form>
        </div>
    )
}
