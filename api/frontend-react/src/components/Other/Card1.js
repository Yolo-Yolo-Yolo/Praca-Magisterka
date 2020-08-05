import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WIMIR from '../../assets/img/wimir.png'

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="https://www.imir.agh.edu.pl">
        <CardMedia
          className={classes.media}
          image={WIMIR}
          title="Wydział inżynierii mechanicznej i robotyki"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wydział Inżynierii Mechanicznej i Robotyki
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height:"268px"}}>
          Wydział Inżynierii Mechanicznej i Robotyki jest jednym z najstarszych i największych na Akademii Górniczo-Hutniczej w Krakowie. Możemy poszczycić się osiągnięciami, które dają nam pozycję jednego z najlepszych wydziałów o profilu mechatronicznym w Polsce i na świecie. Jak dotąd wykształciliśmy tysiące absolwentów, którzy piastują wysokie stanowiska w przemyśle, szkolnictwie wyższym i administracji państwowej w wielu krajach, na wszystkich kontynentach.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href="https://www.imir.agh.edu.pl">
          Więcej Informacji
        </Button>
        <Button size="small" variant="outlined" color="Secondary" href="http://www.imir.agh.edu.pl/pl/studenci/rozklady_zajec/studia_stacjonarne_zima/">
          Podziały godzin
        </Button>
      </CardActions>
    </Card>
  );
}