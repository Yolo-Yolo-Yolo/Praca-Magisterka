import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AGH from '../../assets/img/agh.jpg'

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 150,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={AGH}
          title="AGH"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Akademia Górniczo-Hutnicza
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height:"290px"}}>
          Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie, AGH (dawniej Akademia Górnicza w Krakowie) – największa polska uczelnia techniczna, powołana 8 kwietnia 1919 uchwałą Rady Ministrów. Jedna z najlepszych uczelni w Polsce. Powierzchnia kampusu wynosi 38 hektarów.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href="https://www.agh.edu.pl">
          Więcej Informacji
        </Button>
        <Button size="small" variant="outlined" color="Secondary" href="https://www.agh.edu.pl/osiagniecia/">
          Osiągnięcia
        </Button>
      </CardActions>
    </Card>
  );
}