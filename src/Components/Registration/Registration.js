import { Card, Typography,TextField,Grid,Checkbox, Button} from '@mui/material';
import React from 'react';
import useStyles from './RegistrationStyle';
import { Link } from "react-router-dom";

function Registration() {
    const classes = useStyles();

    return (
        <div  style={{
            backgroundColor: "#f7f8fa",
            height: "100vh",
            justifyContent: "center",
          }}>
          <div style={{ textAlign: "center" }}>
            <Typography
              className={classes.title}
              variant="h3"
            >
            Want to be a member?
            </Typography>
          </div>
          <Card className={classes.card}>
          <Typography color="primary" variant='h4'>Registration</Typography>
          <br/>
          <Grid>
            <Grid item>
            <div>
            <TextField style={{ width: "70%", height: "78px" }}
            className={classes.textField} id="outlined-basic" label="Name*" variant="outlined" />
            </div>
            <div >
            <TextField style={{ width: "70%", height: "78px" }}
            className={classes.textField} id="outlined-basic" label="Email*" variant="outlined" />
            </div>
            <div>
            <TextField style={{ width: "70%", height: "78px" }}
            className={classes.textField} id="outlined-basic" label="Password*" variant="outlined" />
            </div>
            <div>
                <Checkbox
                color="primary"
                />
                Remember Me 
            </div>
            <div>
            <Button variant="outlined">Register</Button>
            </div>
            <Typography className={classes.title}>
            <strong>Not a member yet?</strong>
            <Link to="/">
              <Button  color="primary">Login</Button>
            </Link>
          </Typography>
            </Grid>
          </Grid>
          </Card>
       
        </div>
    );
}

export default Registration;