import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import Main from "./Main";
import "./main.css";

const App = () => {
  return (
    <div className="app">
       <Switch>
          <Route exact path="/"> <Main /> </Route>
          <Route exact path="/update/:id"> <Edit /> </Route>
       </Switch>
    </div>
  )
}

export default App
