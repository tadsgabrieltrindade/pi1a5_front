
import {BrowserRouter, Route} from 'react-router-dom';

import { Landing } from './pages/Landing';
import { AcessoUser } from './pages/AcessoUser';
//import {WeatherApp} from './pages/WeatherApp';

function App() {

  return (

    <BrowserRouter>
    
        <Route path="/" exact component={Landing}/>
        <Route path="/user" exact component={AcessoUser}/>
      
     
    </BrowserRouter>
   
  );
}

export default App;
