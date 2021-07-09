import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import AboutMe from './Component/AboutMe/AboutMe';
import Experience from './Component/Experience/Experience';
import Contact from './Component/Contact/Contact';
import Project from './Component/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import'bootstrap-css-only/css/bootstrap.min.css';
 



function App() {
  return (
   
      <Router>
        <Home/>
        
     
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        
      <Route path="/aboutme">
      <AboutMe></AboutMe>
    </Route>
    <Route path="/experience">
      <Experience/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/projects">
      <Project/>
    </Route>
    </Switch>
    </Router>
   
  
      
       
  
    
    
    
  
    

   
  )
}

export default App;
