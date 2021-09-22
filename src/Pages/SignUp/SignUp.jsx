import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container,CssBaseline,Typography,Avatar,TextField,
    Button} from '@material-ui/core'; 
import {useAuth} from '../../context/auth-context';
import useStyles from '../Login/loginStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

export const SignUp= () => {
    const [firstname ,setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {signUpWithCredentials,loader} = useAuth();
    const classes = useStyles();
    function handleSignUp(e){
        e.preventDefault();
        signUpWithCredentials(firstname,lastname,username,password)
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
    }
    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignUp}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="firstname"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            value={firstname}
            onChange={(e) => setFirstName(firstname => firstname = e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="lastname"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            value={lastname}
            onChange={(e) => setLastName(lastname => lastname = e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(username => username = e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(password => password = e.target.value)}
          />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {loader ? "Registering..." : "Sign Up"}
          </Button>
          <Typography>
                <Link to="/login" variant="body2">
                    {"Allready have an account? Login"}
                </Link>
          </Typography>
               
        </form>
        </div>
       </Container>
    )
}
