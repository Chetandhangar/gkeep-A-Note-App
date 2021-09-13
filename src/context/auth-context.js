import React , {useState, createContext,useContext} from 'react';
import axios from 'axios'
import {useNavigate, useLocation} from 'react-router-dom'
export const AuthContext = createContext();


export function AuthProvider({children}){
    const { isUserLoggedIn, token: savedToken , username} = JSON.parse(
        localStorage?.getItem("login")
      ) || { isUserLoggedIn: false, token: null , username : ""};
     


    const [isUserLogin , setUserLogin] = useState(isUserLoggedIn)
    const [token , setToken] = useState(savedToken);
    const [loader , setLoader] = useState(false);
    const navigate = useNavigate();
    const {state} = useLocation();
    const signupurl = "https://inmind-note.chetandhangar.repl.co/api/signup";
    const loginurl =  "https://inmind-note.chetandhangar.repl.co/api/login";
    console.log(isUserLogin,'from staet')
    
    async function signupService(firstname,lastname,username,password){
     return await axios.post(signupurl,{
        firstname,
        lastname,
         username,
         password
     })
    }

    async function loginService(username, password){
        return await axios.post(loginurl, {
            username,
            password
        })
    }

    async function signUpWithCredentials(firstname,lastname,username,password){
          try{
              setLoader(true)
            const response  = await signupService(firstname,lastname,username,password)
            console.log(response,'from signup')
            if(response.status === 200){
                setLoader(false);
                navigate('/login')
            }
          }catch(error){
              setLoader(false);
              console.log(error)
          }
    }

    async function loginWithCredentials(username, password){
        try{
            setLoader(true)
            const response = await loginService(username,password);
            if(response.status === 200){
                loginUser(response.data);
                setLoader(false);
            }
        }catch(error){
            setLoader(false)
            console.log(error)
        }
        
    }
    function loginUser({token,username,userId}){
        setUserLogin(true);
        setToken(token)
        localStorage?.setItem("login",JSON.stringify({isUserLoggedIn : true,token, username,userId}));
        state != null ? navigate(state.from) : navigate('/')
    }

    function logout(){
        setUserLogin(false)
        setToken(null)
        localStorage?.removeItem("login")
        return navigate('/login')
    }
    return(
        <AuthContext.Provider value={{isUserLogin,setUserLogin,
        logout,
        token, setToken, 
        signUpWithCredentials,
        loader,setLoader,
        loginWithCredentials,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}