import { Grid, Typography } from '@mui/material';
import React from 'react';
import Dashboard from './Dashboard'
import useStyles from './TeamsStyle';

function Teams() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Dashboard/>
            <main className={classes.content}>
                <Typography>Teams*</Typography> 
                <Grid container>
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid>
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid> 
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid>    
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid>    
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid>    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid> 
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa" }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid> 
                    <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa",margin:'10px',
                }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid> <Grid item xs={12} md={4} lg={2}>
                    <div className='card' style={{backgroundColor: "#f7f8fa",margin:'10px' }}>
                    <Typography>box1</Typography>
                    </div>

                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default Teams;