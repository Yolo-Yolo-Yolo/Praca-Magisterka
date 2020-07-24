import React, { Component } from "react";
import StartPage from "./components/Pages/StartPage";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Pages/Home";
import AdminInformations from "./components/Pages/AdminInformations";

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
            <Route exact path='/home' component={Home} />
            <Route exact path='/admin/ogloszenia' component={AdminInformations} />

          </Switch>
        </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
