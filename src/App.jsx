import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import CaDetails from "./components/CaDetails";
import Home from "./Home";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-rose-100 via-purple-50 to-fuchsia-100">
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/ca-details/:id"} exact component={CaDetails} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
