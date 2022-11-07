import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return ( <BrowserRouter>
    
   
    <Route path='/home' component ={Home}/>
    
    
        
     </BrowserRouter> );
}

export default App;
