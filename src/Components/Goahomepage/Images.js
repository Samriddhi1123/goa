import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Mahatma from '../../Assets/Mahatma.jpg'
import Portal from '../../Assets/NationalPortal.jpg'
import India from '../../Assets/IncredibleIndia.jpg'
import Ministry from '../../Assets/Ministry.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        backgroundColor: '#999999',
        '& > *': {
        },
    },
    image: {
        backgroundColor: '#999999',
    }
}));

export default function Images() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.image}>
                <Grid container spacing={5}>
                    <Grid item xl={6} xs={6}>
                        <img src={Mahatma} className="Mahatma" alt="Mahatma" width="50%" height="100%" />
                    </Grid>
                    <Grid item xl={6} xs={6}>
                        <img src={Portal} className="Portal" alt="Portal" width="30%" height="50%" />
                    </Grid>
                    <Grid item xl={6} xs={6}>
                        <img src={India} className="India" alt="India" width="50%" height="50%" />
                    </Grid>
                    <Grid item xl={6} xs={6}>
                        <img src={Ministry} className="Ministry" alt="Ministry" width="50%" height="100%" />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}