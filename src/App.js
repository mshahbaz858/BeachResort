import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import OwnerProfile from "./pages/OwnerProfile";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/owner-profile" component={OwnerProfile} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
