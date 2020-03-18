import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <Card body>
              <CardTitle>
                <h5>TEST</h5>
              </CardTitle>
              <CardText>TEKST</CardText>
              <Button>Więcej</Button>
            </Card>
          </MDBCol>
          <MDBCol md="3">
            <Card body>
              <CardTitle>
                <h5>TEST</h5>
              </CardTitle>
              <CardText>TEKST</CardText>
              <Button>Więcej</Button>
            </Card>
          </MDBCol>
          <MDBCol md="3">
            <Card body>
              <CardTitle>
                <h5>TEST</h5>
              </CardTitle>
              <CardText>TEKST</CardText>
              <Button>Więcej</Button>
            </Card>
          </MDBCol>
          <MDBCol md="3">
            <Card body>
              <CardTitle>
                <h5>TEST</h5>
              </CardTitle>
              <CardText>TEKST</CardText>
              <Button>Więcej</Button>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
