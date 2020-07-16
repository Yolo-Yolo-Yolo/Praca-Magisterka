import React, { Component } from "react";
import StartPage from "./components/Pages/StartPage";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import AppSidebar from "./components/AppSidebar";


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={StartPage} />
          </Switch>
        </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
