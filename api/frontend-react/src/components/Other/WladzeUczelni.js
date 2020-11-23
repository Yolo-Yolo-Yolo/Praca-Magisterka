import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdbreact";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import KMendrok from '../../assets/img/KMendrok.jpg'
import GCieplok from '../../assets/img/GCieplok.jpg'
import WRaczka from '../../assets/img/WRaczka.jpg'
import KZagorski from '../../assets/img/KZagorski.jpg'
import KKolodziejczyk from '../../assets/img/KKolodziejczyk.jpg'
import MKot from '../../assets/img/MKot.jpg'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green, red } from '@material-ui/core/colors';
const MultiCarouselPage = () => {
  return (
    <MDBContainer>
          <MDBRow>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                  <Avatar alt="Dziekan Wydziału" src={KMendrok} style={{width: "200px", height: "200px", marginTop:"1rem"}} />
                  </Grid>
                  <MDBCardBody>
                    <MDBCardTitle style={{fontSize: "17px"}}>Dziekan Wydziału</MDBCardTitle>
                    <MDBCardText style={{fontSize: "13px"}}>
                    dr hab. inż. Krzysztof Mendrok, prof. AGH  <CancelIcon style={{ color: red[500] }}/>
                    </MDBCardText>
                    <Divider />
                    <MDBCardText style={{fontWeight: "bold", marginTop:"1rem"}}>
                    Kontakt:
                    </MDBCardText>
                    <MDBCardText>
                    tel. 12-617-31-39
                    </MDBCardText>
                    <MDBCardText>
                    e-mail: dziekan@imir.agh.edu.pl
                    </MDBCardText>
                    <Button color="primary" onClick={event =>  window.location.href='http://www.imir.agh.edu.pl/pl/wydzial/wladze_wydzialu/dziekan/'} variant="contained">
                     WIĘCEJ INFORMACJI
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                  <Avatar alt="Prodziekan ds. Nauki" src={GCieplok} style={{width: "200px", height: "200px", marginTop:"1rem"}} />
                  </Grid>
                  <MDBCardBody>
                    <MDBCardTitle style={{fontSize: "17px"}}>Prodziekan ds. Nauki</MDBCardTitle>
                    <MDBCardText style={{fontSize: "13px"}}>
                    dr hab. inż. Grzegorz Cieplok, prof. AGH  <CancelIcon style={{ color: red[500] }}/>
                    </MDBCardText>
                    <Divider />
                    <MDBCardText style={{fontWeight: "bold", marginTop:"1rem"}}> 
                    Kontakt:
                    </MDBCardText>
                    <MDBCardText>
                    tel. 12-617-31-30
                    </MDBCardText>
                    <MDBCardText>
                    e-mail: cieplok@agh.edu.pl
                    </MDBCardText>
                    <Button color="primary" onClick={event =>  window.location.href='http://www.imir.agh.edu.pl/pl/wydzial/wladze_wydzialu/prodziekani/'} variant="contained">
                     WIĘCEJ INFORMACJI
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                  <Avatar alt="Prodziekan ds. Kształcenia" src={WRaczka} style={{width: "200px", height: "200px", marginTop:"1rem"}} />
                  </Grid>
                  <MDBCardBody>
                    <MDBCardTitle style={{fontSize: "17px"}}>Prodziekan ds. Kształcenia</MDBCardTitle>
                    <MDBCardText style={{fontSize: "13px"}}>
                    dr hab. inż. Waldemar Rączka, prof. AGH  <CheckCircleIcon style={{ color: green[500] }}/>
                    </MDBCardText>
                    <Divider />
                    <MDBCardText style={{fontWeight: "bold", marginTop:"1rem"}}>
                    Kontakt:
                    </MDBCardText>
                    <MDBCardText>
                    tel. 12-617-50-73
                    </MDBCardText>
                    <MDBCardText>
                    e-mail: wraczka@agh.edu.pl
                    </MDBCardText>
                    <Button color="primary" onClick={event =>  window.location.href='http://www.imir.agh.edu.pl/pl/wydzial/wladze_wydzialu/prodziekani/'} variant="contained">
                     WIĘCEJ INFORMACJI
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Avatar alt="Prodziekan ds. Studenckich" src={KZagorski} style={{width: "200px", height: "200px", marginTop:"1rem"}} />
                </Grid>
                  <MDBCardBody>
                    <MDBCardTitle style={{fontSize: "17px"}}>Prodziekan ds. Studenckich</MDBCardTitle>
                    <MDBCardText style={{fontSize: "13px"}}>
                    dr inż. Krzysztof Zagórski  <CheckCircleIcon style={{ color: green[500] }}/>
                    </MDBCardText>
                    <Divider />
                    <MDBCardText style={{fontWeight: "bold", marginTop:"1rem"}}>
                    Kontakt:
                    </MDBCardText>
                    <MDBCardText>
                    tel. 12-617-30-90
                    </MDBCardText>
                    <MDBCardText>
                    e-mail: zagkrzys@agh.edu.pl
                    </MDBCardText>
                    <Button color="primary" onClick={event =>  window.location.href='http://www.imir.agh.edu.pl/pl/wydzial/wladze_wydzialu/prodziekani/'} variant="contained">
                     WIĘCEJ INFORMACJI
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Avatar alt="Prodziekan ds. Ogólnych" src={KKolodziejczyk} style={{width: "200px", height: "200px", marginTop:"1rem"}} />
                </Grid>
                  <MDBCardBody>
                    <MDBCardTitle style={{fontSize: "17px"}}>Prodziekan ds. Ogólnych</MDBCardTitle>
                    <MDBCardText style={{fontSize: "13px"}}>
                    dr hab. inż. Krzysztof Kołodziejczyk, prof. AGH  <CheckCircleIcon style={{ color: green[500] }}/>
                    </MDBCardText>
                    <Divider />
                    <MDBCardText style={{fontWeight: "bold", marginTop:"1rem"}}>
                    Kontakt:
                    </MDBCardText>
                    <MDBCardText>
                    tel. 12-617-45-46
                    </MDBCardText>
                    <MDBCardText>
                    e-mail: krzysztof.kolodziejczyk@agh.edu.pl
                    </MDBCardText>
                    <Button color="primary" onClick={event =>  window.location.href='http://www.imir.agh.edu.pl/pl/wydzial/wladze_wydzialu/prodziekani/'} variant="contained">
                     WIĘCEJ INFORMACJI
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Avatar alt="Prodziekan ds. Współpracy i Projektów" src={MKot} style={{width: "200px", height: "200px", marginTop:"1rem"}} />
                </Grid>
                  <MDBCardBody>
                    <MDBCardTitle style={{fontSize: "17px"}}>Prodziekan ds. Współpracy i Projektów</MDBCardTitle >
                    <MDBCardText style={{fontSize: "13px"}}>
                    dr hab. inż. Marcin Kot, prof. AGH  <CancelIcon style={{ color: red[500] }}/>
                    </MDBCardText>
                    <Divider />
                    <MDBCardText style={{fontWeight: "bold", marginTop:"1rem"}}>
                    Kontakt:
                    </MDBCardText>
                    <MDBCardText>
                    tel. 12-617-50-46
                    </MDBCardText>
                    <MDBCardText>
                    e-mail: kotmarc@agh.edu.pl
                    </MDBCardText>
                    <Button color="primary" onClick={event =>  window.location.href='http://www.imir.agh.edu.pl/pl/wydzial/wladze_wydzialu/prodziekani/'} variant="contained">
                     WIĘCEJ INFORMACJI
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </MDBRow>
    </MDBContainer>
  );
}

export default MultiCarouselPage;