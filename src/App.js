import './App.css';
import {Home} from './components'
import {Header} from './components'
import {RenderLabel, SignUp,Login} from './Pages'
import { SelectedLabel } from './Pages'
import { Routes,Route, Navigate} from 'react-router-dom';
import {useAuth} from './context/auth-context'

function App() {
  
  const {isUserLogin} = useAuth();

  function PrivateRoute({path,login,...props}){
    return login? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace to="/login"/>
  }

  return (
    <div className="App">
      <div>
      <Header />
      <div className="row">
          <div className="col-4">
            <RenderLabel />
          </div>
          <div className="col-6">   
       <Routes>   
         <PrivateRoute exact path="/" login={isUserLogin} element={<Home />}/>
         <PrivateRoute path="/label/:labelId" login={isUserLogin} element={<SelectedLabel />}/>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
       </Routes>
       </div>
      </div>
      </div>
    </div>
  );
}

export default App;


//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
//https://fontawesome.com/v5.15/icons/trash-alt?style=regular
//https://getbootstrap.com/docs/5.1/layout/grid/