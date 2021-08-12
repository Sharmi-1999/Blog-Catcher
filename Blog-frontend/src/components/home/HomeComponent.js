import React from 'react'
import BlogCardComponent from '../blog/BlogCardComponent'
import HeaderComponent from '../layout/HeaderComponent'
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid,Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        padding:theme.spacing(4),
        flexGrow:1,

    },
    title:{
        fontFamily: 'Yanone Kaffeesatz',
        fontSize: '4rem',
        textDecoration:'none',
        fontWeight:'700',
        color:theme.palette.text.primary
    },
    subtitle:{
      fontFamily: 'Dancing Script',
      fontSize: '2rem',
      textDecoration:'none',
      fontWeight:'300',
      color:theme.palette.text.secondary
    },
    
    button: {
      margin: theme.spacing(1),
      backgroundColor:'black',
      color:'white',
      '&:hover': {
        background: "black",
        color:"white",
     },
      borderRadius:theme.spacing(3),
      paddingLeft:theme.spacing(4),
      paddingRight:theme.spacing(2),
      paddingTop:theme.spacing(2),
      paddingBottom:theme.spacing(2),
      fontWeight:"700",
      fontSize:"0.95rem"
    },
    buttonContain: {
      paddingLeft:theme.spacing(4),
    }
  }));

function HomeComponent() {
    const classes = useStyles();
    let history = useHistory();

  function handleClick() {
    history.push("/create");
  }
    return (
        <>
        <HeaderComponent/>
        <Container  maxWidth="lg" className={classes.root}>
        <Typography className={classes.title}>Blog Catcher</Typography>
        </Container>
        <Container  maxWidth="lg" className={classes.root}>
        <Typography className={classes.subtitle}>"Diary of Blogs"</Typography>
        </Container>
        <Grid container spacing={3} className={classes.buttonContain}>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        endIcon={< AddIcon/>}
        onClick={handleClick}
      >
        create blog
      </Button>
      </Grid>
        <Grid container spacing={3} className={classes.main}>
          <BlogCardComponent/>
      </Grid>
      
        
           
        </>
    )
}

export default HomeComponent;