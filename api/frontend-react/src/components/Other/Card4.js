import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dokumenty from '../../assets/img/dokumenty.jpg'

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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Dokumenty}
          title="Dokumenty"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dokumenty
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height:"270px"}}>
            Wszystkie dokumenty potrzebne przy wizycie u dziekanów można znaleźć na stronie Wydziału Inżynierii Mechanicznej i Robotyki.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href="http://www.imir.agh.edu.pl/pl/studenci/blankiety_dokumenty/blankiety/">
          Blankiety
        </Button>
        <Button size="small" variant="outlined" color="Secondary" href="http://www.imir.agh.edu.pl/pl/studenci/blankiety_dokumenty/dokumenty/">
          Dokumenty
        </Button>
      </CardActions>
    </Card>
  );
}