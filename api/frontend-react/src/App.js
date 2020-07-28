import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./components/Pages/MainPage";
import AdminInformation from "./components/Pages/AdminInformation";
import StartPage from "./components/Pages/StartPage";
import FaqPage from "./components/Pages/FaqPage";
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
            <Route exact path='/Home' component={MainPage} />
            <Route exact path='/admin/ogloszenia' component={AdminInformation} />
            <Route exact path='/faq' component={FaqPage} />
          </Switch>
        </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
