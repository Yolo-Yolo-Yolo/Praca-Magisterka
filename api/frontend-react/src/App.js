import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
//import InformationList from "./components/InformationList";
//import InformationModal from "./components/InformationModal";
import MainPage from "./components/MainPage";
//import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <MainPage />
        </div>
      </Provider>
    );
  }
}
export default App;
