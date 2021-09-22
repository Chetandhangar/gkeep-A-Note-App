import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../context/auth-context';
import useStyles from './loginStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export const Login = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {loginWithCredentials,loader} = useAuth()
    const classes = useStyles();


    function handleLogin(e){
        e.preventDefault();
        loginWithCredentials(username,password)
        setUsername("")
        setPassword("");
    }
    return(
       <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
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
            {loader ? "Signing..." : "Sign In"}
          </Button>
          <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Grid>
        </form>
        </div>
       </Container>
        
    )
}
