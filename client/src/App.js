import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from '../src/Page/Home/Home'
import LandingPage from './Page/LandingPage/LandingPage'

function App() {
  return ( <BrowserRouter>
    
   <Route exact path='/' component={LandingPage}/>
    <Route path='/home' component ={Home}/>
    
    
        
     </BrowserRouter> );
}

export default App;
