import React from "react";
import {MDBContainer} from "mdbreact";

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-1">
    <MDBContainer fluid>
      <i> &copy; {new Date().getFullYear()} Copyright: Łukasz Jaworski</i>
    </MDBContainer>
    </div>
  );
};

export default Footer;
