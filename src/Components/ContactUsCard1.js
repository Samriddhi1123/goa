import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root}>

      <CardContent>



        <LocationOnIcon />

        <Typography variant="h5" component="h2">
          Contact Us

        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Department of Tourism
        </Typography>



        <Grid item xs={12}>
          <Typography variant="body2" component="p">
            Paryatan Bhavan, 2nd Floor, Patto, Panaji-Goa, India, 403001

          </Typography>

        </Grid>











      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>

  );
}
