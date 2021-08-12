import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Flower from '../../images/flower.jpg';
import InputLabel from '@material-ui/core/InputLabel';
import { useHistory } from "react-router-dom";
import {createNewBlog} from "../../redux/actions/blogAction"
import { useDispatch } from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 900,
    marginTop: theme.spacing(7),
    
  },
  button: {
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius:theme.spacing(3),
    fontWeight:"700",
    backgroundColor:'black',
    color:'white',
    '&:hover': {
      background: "black",
      color:"white",
   },
  },
  textField: {
    width: "70%",
    marginTop: theme.spacing(2),
    '& .MuiOutlinedInput-input': {
      padding: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      background: "white",
      borderRadius: theme.spacing(1),
    },
    '& .MuiOutlinedInput-multiline':{
      padding:0
  }
  },
 
  noBorder: {
    border: 'none',
  },
  
  main: {
    
    height:'100vh'
  },
  
  
  label: {
    color: '#000',
    marginTop: theme.spacing(3),
    fontWeight: 900,
    fontSize: '1.2rem',
  },
  
  formsection: {
    paddingLeft: theme.spacing(9),
  },
  imageButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius:theme.spacing(3),
    fontWeight:"700",
    backgroundColor:'black',
    color:'white',
    '&:hover': {
      background: "black",
      color:"white",
   },
  },

}));


function CreateBlogComponent() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const inputFile = useRef(null);


  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader?.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const clear = () => {
    setTitle('');
    setAuthor('');
    setText('');
  };

  
  const handleClick = () => {
    if(title!=='' && author!=='' && text!=='')
    {
       dispatch(createNewBlog({
        title: title,
        author: author,
        body: text,
        img_url: img
      })) 
      clear();
      history.push('/');
    };
  }

  return (
    <div className={classes.root}>
      <Grid container lg={12} >
        <Grid item lg={6} className={classes.main}>
        <img src={Flower} alt="" className={classes.image}/>
        </Grid>
        <Grid />
        <Grid item lg={6} className={classes.formsection} justify="center">
            <Typography variant="h6" className={classes.title}>
              Enter Blog Details
            </Typography>
            <Box mt={3}>
            <input
                      type="file"
                      accept="image/*"
                      name="image-upload"
                      ref={inputFile}
                      onChange={e => imageHandler(e)}
                    ></input>
                    {/* <img src={profileImg} alt="" id="img" className="img" /> */}
            <Box>
            {/* <Button
        variant="contained"
        className={classes.imageButton}
        onClick={onButtonClick}
      >
        Upload Image
      </Button> */}
      </Box>
            </Box>
              <InputLabel className={classes.label}>Title</InputLabel>
              <TextField
              className={classes.textField}
              variant="outlined"
              placeholder="Title"
              fullWidth
              InputProps={{
                classes: { notchedOutline: classes.noBorder },
              }}
              name="title"
              value={title}
              autoComplete="off"
              onChange={e => setTitle(e.target.value)}
            />
              <InputLabel className={classes.label}>Author</InputLabel>
              <TextField
              className={classes.textField}
              variant="outlined"
              placeholder="Author"
              InputProps={{
                classes: { notchedOutline: classes.noBorder },
              }}
              name="author"
              value={author}
              autoComplete="off"
              onChange={e => setAuthor(e.target.value)}
            />
              <InputLabel className={classes.label}>Blog Text</InputLabel>
              <TextField
          className={classes.textField}
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="outlined"
          placeholder="Blog Text"
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
          value={text}
          onChange={e => setText(e.target.value)}
          
        />
        <Box>
        <Button
        variant="contained"
        className={classes.button}
        endIcon={<ChevronRightIcon fontSize="large"></ChevronRightIcon>}
        onClick={()=>handleClick()}
      >
        Submit
      </Button>
      </Box>
          </Grid>
        </Grid>
    </div>
  );
}

export default CreateBlogComponent;

