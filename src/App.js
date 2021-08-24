import './App.css';
import {Home} from './components'
import {Header} from './components'
import {RenderLabel} from './Pages'
import { SelectedLabel } from './Pages'
import {Switch, Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
          <div className="col-4">
            <RenderLabel />
          </div>
          <Switch>
          <div className="col-6">    
          <Route exact path="/" component={Home}/>
          <Route path="/label/:labelId" component={SelectedLabel}/>
          <Redirect to="/" />
       </div>
          </Switch>
      
      </div>
    </div>
  );
}

export default App;


//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
//https://fontawesome.com/v5.15/icons/trash-alt?style=regular
//https://getbootstrap.com/docs/5.1/layout/grid/