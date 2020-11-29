import React, { useState } from "react";

import LoginRegister from "./Components/LoginRegister";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Button, ButtonGroup, Dropdown, MenuItem, Container } from "react-bootstrap";

export default function App() {
  const [checkLogin, setcheckLogin] = useState(0);

  let x = function checkinit() {
    setcheckLogin(1); 
  };

  return (
    <Router>
      <>
         {checkLogin ? <Dashboard /> : <LoginRegister />}  
</>
      <switch>
        <Route path="/login">
         
        </Route>
      </switch>
    </Router>
  );
}
