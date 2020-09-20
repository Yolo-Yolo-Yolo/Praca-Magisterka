import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headingContent: {
      color: "black",
      backgroundColor: "#757ce8",
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.headingContent}
        >
          <Typography className={classes.heading}><b>Co to są Ogłoszenia?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Są to ogłoszenia dotyczące możliwości rezerwacji wizyty w dziekanacie, bądź jej odwołaniu w danym dniu. Dodatkowo administratorzy stron mogą informować o zmianie godzin otwarcia dziekanatu. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.headingContent}
        >
          <Typography className={classes.heading}><b>Jakie są godziny otwarcia dziekanatu?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Godziny otwarcia dziekanatu różnią się dla poszczególnych kierunków i są także zależne od roku na którym się student znajduję. Najlpiej sprawdzić można te godziny
            na stronie Wydziału Inżynierii mechanicznej i robotyki. Są także podane podczas wypełniania rezerwacji obok formularza w celu ułatwienia dokonania rezerwacji odpowiedniego
            terminu wizyty.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.headingContent}
        >
          <Typography className={classes.heading}><b>Czy trzeba potwierdzać rezerwację?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tak, w innym wypadku nie będzie ważna.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.headingContent}
        >
          <Typography className={classes.heading}><b>Jak należy potwierdzić rezerwację?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Rezerwacje mozna potwierdzić tylko na miejscu w budynku B2 pod dziekanatem używając znajdującego się tam urządzenia mobilnego. W tym celu należy zapisać sobie numer rezerwacji wygenerowany 
            na tej stronie a następnie przepisać go juz na miejscu w aplikacji. Należy to wykonać maksymalnie do 30 minut od terminu rezerwacji. Jeśli rezerwacja nie zostanie potwierdzona
            do 30 minut przed jej terminem zostanie usunięta i zostanie wpuszczona inna osoba która nie zrobiła rezerwacji.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.headingContent}
        >
          <Typography className={classes.heading}><b>Jak często można rezerwować wizytę?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nie ma limitu rezerwacji na osobę do dziekanatu. Należy jednak że nagminne rezerwacje które nie zostaną potwierdzone, mogą skutkować ostrzeżeniem przed administratorów,
            a następnie blokadę konta oraz brak możliwości rezerwacji online i stanie w kolejce przed dziekanatem.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.headingContent}
        >
          <Typography className={classes.heading}><b>Dlaczego strona się ciągle ładuje ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jeśli strona się ciągle ładuje to znaczy, że twoja sesja wygasła.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}