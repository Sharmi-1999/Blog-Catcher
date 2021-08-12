/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Fade,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";
import { getBlogs } from "../../redux/actions/blogAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    backgroundColor: "#9fe6a0",
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "black",
  },
  icon: {
    color: "#511281",
  },
  title: {
    "& .MuiCardHeader-title": {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: theme.palette.text.main,
    },
    "& .MuiCardHeader-subheader": {
      fontSize: "0.85rem",
      color: theme.palette.text.secondary,
    },
  },
  cardContent: {
    color: theme.palette.text.main,
    fontSize: "1rem",
  },
  cardStyle: {
    cursor: "pointer",
    paddingLeft: theme.spacing(3),
    "& .MuiGrid-spacing-xs-3 > .MuiGrid-item": {
      padding: theme.spacing(10),
    },
  },
}));

export default function BlogCardComponent() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  // const [blog, setBlog] = useState([]);
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    //   const getBlogs = async () => {
    //     const blogs = await fetchBlogs();
    //     console.log(blogs)
    //     setBlog(blogs);
    //   };

    dispatch(getBlogs());
  }, [blogs]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNextClick = (item) => {
    history.push({ pathname: "/details", state: item._id });
  };

  return (
    <>
      {blogs &&
        blogs.map((item, idx) => (
          <Grid item lg={3} key={idx} className={classes.cardStyle}>
            <Card className={classes.root}>
              <CardHeader
                className={classes.title}
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {item.author.charAt(0).toUpperCase()}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" className={classes.icon}>
                    <MoreVertIcon onClick={handleClick} />
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                      <MenuItem onClick={handleClose}>Delete</MenuItem>
                    </Menu>
                  </IconButton>
                }
                title={item.title}
                subheader={moment(+item.created_at).format("D MMM `YY")}
              />
              <CardMedia
                className={classes.media}
                image={item.img_url}
                title="blog"
                onClick={() => handleNextClick(item)}
              />

              <CardContent>
                <Typography variant="body2" className={classes.cardContent}>
                  {item.body}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                  className={classes.icon}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" className={classes.icon}>
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </>
  );
}
