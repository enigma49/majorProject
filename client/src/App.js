import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layouts/landing";
import Navbar from "./components/layouts/navbar";
import Routes from "./components/routing/routes";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[]);
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
        </Switch>

      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
