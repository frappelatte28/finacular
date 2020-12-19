import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../src/pages/dashboard";
import Tracker from "./pages/Tracker";
import Asset from "../src/pages/Asset";
import Planning from "../src/pages/planning";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [isOpen, setIsOpen] = useState();
  useEffect(() => {
    console.log("parent", isOpen);
  }, [isOpen]);
  return (
    <>
      <Router>
        <Navbar setSideBar={setIsOpen} />
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard isOpen={isOpen}></Dashboard>
          </Route>
          <Route path="/assets" component={Asset} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/planning" component={Planning} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
