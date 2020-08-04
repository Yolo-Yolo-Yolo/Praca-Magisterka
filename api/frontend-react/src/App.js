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
import AdminPanelPage from "./components/Pages/AdminPanelPage";
import AdminAllReservationsPage from "./components/Pages/AdminAllReservationsPage";
import NewReservationPage from "./components/Pages/NewReservationPage";
import MyReservationsPage from "./components/Pages/MyReservationsPage";

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
            <Route exact path='/faq' component={FaqPage} />
            <Route exact path='/Home' component={MainPage} />

            <Route exact path='/rezerwacja' component={NewReservationPage} />
            <Route exact path='/moje_rezerwacje' component={MyReservationsPage} />

            <Route exact path='/admin/ogloszenia' component={AdminInformation} />
            <Route exact path='/admin/panel' component={AdminPanelPage} />
            <Route exact path='/admin/rezerwacje' component={AdminAllReservationsPage} />
            
          </Switch>
        </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
