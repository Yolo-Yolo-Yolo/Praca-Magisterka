import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Syllabus from '../../assets/img/syllabus.png'

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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Syllabus}
          title="test"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Syllabus AGH
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height:"300px"}}>
          Syllabus AGH - oferta dydaktyczna dla kandydatów i studentów, programy studiów, efekty kształcenia i uczenia się, moduły, syllabusy. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href="https://syllabuskrk.agh.edu.pl/2019-2020/pl/treasuries/academy_units/offer">
          Więcej Informacji
        </Button>
        <Button size="small" variant="outlined" color="Secondary" href="https://syllabuskrk.agh.edu.pl/2019-2020/pl/treasuries/academy_units/5/study_plans">
          Syllabus Wimir
        </Button>
      </CardActions>
    </Card>
  );
}