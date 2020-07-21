import React from "react";
import {
  Jumbotron,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
  Container
} from "reactstrap";

import InformationList from "../InformationList";
import InformationModal from "../InformationModal";
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
        <p className="lead">
          <Button color="dark" size="lg" id="toggler" block>
            Więcej Informacji
          </Button>
        </p>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>Testowe informacje // TODO</CardBody>
          </Card>
        </UncontrolledCollapse>
        <h1 className="display-3" align="center">
          OGŁOSZENIA:
        </h1>
        <Container>
          <InformationModal />
          <InformationList />
        </Container>
        <Footer />
      </Jumbotron>
      <Copyright />
    </div>
  );
};

export default StartPage;