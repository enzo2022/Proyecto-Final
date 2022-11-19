import "./assets/main.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../src/Page/Home/Home";
import LandingPage from "./Page/LandingPage/LandingPage";
import Home1, { Home2 } from "./components/Home2/Home1";
import { Image } from "./components/Image";

function App() {
  return (
    <BrowserRouter>
      <h1>tailwind</h1>
      <h2>css</h2>
      <Route exact path="/" component={Home1} />
      <Route path="/home" component={Home} />
      <Route path="/upload" component={Image} />
    </BrowserRouter>
  );
}

export default App;
