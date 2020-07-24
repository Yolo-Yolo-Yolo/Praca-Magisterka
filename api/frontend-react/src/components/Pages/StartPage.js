import React from "react";
import { Jumbotron } from "reactstrap";

import Footer from "../Footer";
import Copyright from "../Copyright";
import NavBar from "../NavigationBars/NavBar";


const StartPage = props => {
  return (
    <div>
        <NavBar />
        <Jumbotron>
        <h1 className="display-3" align="center">
          Witaj, studencie!
        </h1>
        <p className="lead" align="center">
          To jest strona E-Dziekanatu Wydziału Inżynierii Mechanicznej i
          Robotyki.
        </p>
        <hr className="my-2" />
        <p align="center">
          Strona jest przeznaczona do rezerwacji wizyt w dziekanacie.
        </p>
        <Footer />
      </Jumbotron>
      <Copyright />
    </div>
  );
};

export default StartPage;