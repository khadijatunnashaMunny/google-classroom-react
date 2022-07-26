import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar'
import useStyles from './TeamsStyle';

function Teams() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Sidebar/>
            <main className={classes.content}>
                <Typography>Teams*</Typography> 
                <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
                    <div className={classes.courseHeader} style={{background:'#005671'}}>
                        <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
                        <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
                    </div>
                    <div className={classes.TeacherImg}>
                        <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
                    </div>
                </Card>
            </Grid> 
            <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
                <div className={classes.courseHeader} style={{background:'#005671'}}>
                    <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
                    <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
                </div>
                <div className={classes.TeacherImg}>
                    <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
                </div>
            </Card>
        </Grid>   <Grid item xs={12} md={6} lg={3}>
        <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
            <div className={classes.courseHeader} style={{background:'#005671'}}>
                <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
                <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
            </div>
            <div className={classes.TeacherImg}>
                <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
            </div>
        </Card>
    </Grid> 
        <Grid item xs={12} md={6} lg={3}>
        <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
            <div className={classes.courseHeader} style={{background:'#005671'}}>
                <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
                <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
            </div>
            <div className={classes.TeacherImg}>
                <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
            </div>
        </Card>
    </Grid>   
    <Grid item xs={12} md={6} lg={3}>
        <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
        <div className={classes.courseHeader} style={{background:'#005671'}}>
            <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
            <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
        </div>
        <div className={classes.TeacherImg}>
            <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
        </div>
    </Card>
</Grid>   
    <Grid item xs={12} md={6} lg={3}>
        <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
            <div className={classes.courseHeader} style={{background:'#005671'}}>
                <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
                <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
            </div>
            <div className={classes.TeacherImg}>
                <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
            </div>
        </Card>
    </Grid>   
    <Grid item xs={12} md={6} lg={3}>
    <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
        <div className={classes.courseHeader} style={{background:'#005671'}}>
            <Typography className={classes.courseHeaderText} varient="h3">Talent Name</Typography>
            <Typography className={classes.courseHeaderText} varient="h6">Lead Software Engineer</Typography>
        </div>
        <div className={classes.TeacherImg}>
            <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
        </div>
    </Card>
</Grid>  
    </Grid>
    </main>
        </div>
    );
}

export default Teams;