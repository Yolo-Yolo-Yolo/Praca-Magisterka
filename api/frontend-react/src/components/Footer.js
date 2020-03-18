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
              <CardTitle><h5>Special Title Treatment</h5></CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </MDBCol>
          <MDBCol md="3">
          <Card body>
              <CardTitle><h5>Special Title Treatment</h5></CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </MDBCol>
          <MDBCol md="3">
          <Card body>
              <CardTitle><h5>Special Title Treatment</h5></CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </MDBCol>
          <MDBCol md="3">
          <Card body>
              <CardTitle><h5>Special Title Treatment</h5></CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
