import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './Components/Landing'
import Home from './Components/Home';
import Details from './Components/Details';
import "./Components/Styles/App.css";
// import AddPj from './Components/AddPj';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/home' component={Home}></Route>
      {/* <Route exact path='/addPj' component={AddPj}></Route> */}
      <Route exact path="/character/:id" component={Details}></Route>
    </BrowserRouter>
    </div>
  )
}

export default App;
