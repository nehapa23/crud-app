import React from "react"
import { Route, Switch } from "react-router-dom";
import './App.css';
import About  from './About';
import Contact  from './Contact';
import Menu  from './Menu';
import Zoom from 'react-reveal/Zoom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <>
    <Zoom>
     <h1>hello</h1>
     </Zoom>
    <Menu/>
   <Switch>
     <Route exact path="/" component={About} />
     <Route exact path="/Contact" component={Contact} />
     </Switch>
    </>
  );
}


export default App;

