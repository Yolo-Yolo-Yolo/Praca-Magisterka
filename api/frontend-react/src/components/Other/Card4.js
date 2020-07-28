import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KolaNaukowe from '../../assets/img/kolanaukowe.png'

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 170,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="http://www.kolanaukowe.agh.edu.pl/ph/">
        <CardMedia
          className={classes.media}
          image={KolaNaukowe}
          title="Koła Naukowe AGH"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Koła Naukowe AGH
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height:"270px"}}>
          Studenckie koła naukowe AGH były, są i będą najskuteczniejszą szkołą talentów i prawdziwą „kuźnią” przyszłych kadr naukowych – zarówno macierzystej Uczelni, jak i wielu placówek naukowych, zatrudniających naszych absolwentów. Koła naukowe skupiają młodzież, która chce poszerzać, doskonalić i wzbogacać obowiązujący program, poprzez dodatkowe studia literaturowe, referaty, dyskusje. Utrwalany przez studentów w kołach naukowych nawyk doskonalenia swej wiedzy i umiejętności permanentnego samokształcenia pozostaje na zawsze.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href="http://www.kolanaukowe.agh.edu.pl/ph/">
          Więcej Informacji
        </Button>
        <Button size="small" variant="outlined" color="Secondary" href="https://www.wimir.agh.edu.pl/pl/dzialalnosc_naukowa/kola_naukowe_wimir/">
          Koła Naukowe Wimir
        </Button>
      </CardActions>
    </Card>
  );
}