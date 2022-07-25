import { Card, Typography,TextField,Grid,Checkbox, Button} from '@mui/material';
import React from 'react';
import useStyles from './LoginStyle';
import { Link } from "react-router-dom";

function Login() {
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
              Login to Google Classroom and start working
            </Typography>
          </div>
          <Card className={classes.card}>
          <Typography color="primary" variant='h4'>Login</Typography>
          <br/>
          <Grid>
            <Grid item>
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
            <Button variant="outlined">Login</Button>
            </div>
            <Typography className={classes.title}>
            <strong>Not a member yet?</strong>
            <Link to="/">
              <Button  color="primary">SignUP</Button>
            </Link>
          </Typography>
            </Grid>
          </Grid>
          </Card>
       
        </div>
    );
}

export default Login;