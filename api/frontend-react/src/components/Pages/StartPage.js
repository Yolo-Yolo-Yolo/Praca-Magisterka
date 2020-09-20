import React from "react";
import { Jumbotron } from "reactstrap";
import Footer from "../Footer";
import Copyright from "../Copyright";
import NavBar from "../NavigationBars/NavBar";
import WladzeUczelni from "../Other/WladzeUczelni";

const StartPage = props => {
  return (
    <div>
        <NavBar />
        <Jumbotron>
        <h1 className="display-3" align="center">
          Witaj, studencie!
        </h1>
        <p className="lead" align="center">
          To jest system rezerwacji wizyt na Wydziale Inżynierii Mechanicznej i
          Robotyki.
        </p>
        <p align="center">
          Strona jest przeznaczona do rezerwacji wizyt u dziekanów. Aby skorzystać z tej możliwości należy się wcześniej zarejestrować
          bądź zalogować jeśli posiadasz już konto. 
        </p>
        
        <h1 className="display-4" align="center">
        <hr className="my-2" />
          Władze Wydziału
          <hr className="my-2" />
        </h1>
        
        <WladzeUczelni />
        
        <h1 className="display-4" align="center">
        <hr className="my-2" />
          Przydatne Linki
          <hr className="my-2" />
        </h1>
        
        <Footer />
      </Jumbotron>
      <Copyright />

    </div>
  );
};

export default StartPage;