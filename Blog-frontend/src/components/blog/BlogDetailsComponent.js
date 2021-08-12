import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { fetchBlogById, deleteBlogById } from "../../services/BlogService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },

  title: {
    fontSize: "2rem",
    fontWeight: 900,
    marginBottom: theme.spacing(1),
  },
  subTitle: {
    fontSize: "1.2rem",
    fontWeight: 500,
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
  },

  main: {
    backgroundColor: theme.palette.primary.secondary,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  formsection: {
    background: theme.palette.background.main,
    paddingLeft: theme.spacing(15),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      background: "black",
      color: "white",
    },
    borderRadius: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontWeight: "700",
    fontSize: "0.95rem",
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));

function BlogDetailsComponent() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [blog, setBlog] = useState([]);

  const blog_id = location.state;

  // useEffect(() => {
  //   if (!blog_id) {
  //     history.goBack();
  //   }
  //   const data = fetchBlogById(blog_id);
  //   console.log(data);
  // })

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blog_id) {
        history.goBack();
        return;
      }
      const blogData = await fetchBlogById(blog_id);
      console.log(blogData);
      if (blogData) {
        setBlog(blogData);
      }
    };
    fetchBlog();
  }, []);

  const handleDelete = async (blog_id) => {
    const deleteBlog = await deleteBlogById(blog_id);
    if (deleteBlog && deleteBlog.data) {
      history.push("/");
    }
  };

  return (
    <div className={classes.root}>
      <Grid container lg={12}>
        <Grid item lg={5} className={classes.main}>
          <Grid
            container
            lg={12}
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <img src={blog.img_url} alt="" className={classes.image} />
          </Grid>
        </Grid>
        <Grid item lg={6} className={classes.formsection} justify="center">
          <Grid
            container
            lg={12}
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Typography className={classes.title}>{blog.title}</Typography>
            <Typography>Author : {blog.author}</Typography>
            <Typography className={classes.subTitle}>
              Created at : {moment(+blog.created_at).format("D MMM `YY")}
            </Typography>
            <Typography paragraph className={classes.text}>
              {blog.body}
            </Typography>

            <Box display="flex" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                endIcon={<CreateIcon />}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                endIcon={<DeleteIcon />}
                onClick={() => handleDelete(blog_id)}
              >
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogDetailsComponent;
