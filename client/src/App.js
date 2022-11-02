import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
import Detail from './components/detail';
import VideogameCreate from './components/VideoGameCreate';


function App() {
  return (
    <BrowserRouter>
    
  <Route exact path='/' component={LandingPage}/>
  <Route path='/home' component ={Home}/>
  <Route exact path='/videogame/:id' component={Detail}/>
  <Route path='/creategame' component={VideogameCreate}/>
      
   </BrowserRouter> 
  );
}

export default App;
