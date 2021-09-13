import React , {useState} from 'react';
import {Form,FormGroup, Input,Button} from 'reactstrap';
import {useAuth} from '../../context/auth-context'

export const SignUp= () => {
    const [firstname ,setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {signUpWithCredentials,loader} = useAuth();

    function handleSignUp(e){
        e.preventDefault();
        signUpWithCredentials(firstname,lastname,username,password)
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
    }
    return(
        <div className="container">
            Login Page
            <Form onSubmit={handleSignUp}>
            <FormGroup>
                    <Input 
                    type = "text"
                    value={firstname}
                    id="firstname"
                    name="firstname"
                    placeholder="firstname"
                    onChange={(e) => setFirstName(firstname => firstname = e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                    type = "text"
                    value={lastname}
                    id="lastname"
                    name="lastname"
                    placeholder="lastname"
                    onChange={(e) => setLastName(lastname => lastname = e.target.value)}
                    />
                </FormGroup>
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
                    : <p>SignUp</p>}</Button>
                </FormGroup>
            </Form>
        </div>
    )
}
