import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import {fetchBlogs, createBlog } from '../../services/BlogService'

export const getBlogs = () => async (dispatch) => {
    try {
    const blogs = await fetchBlogs();
    dispatch({ type: FETCH_ALL, payload: blogs });
    }
    catch (error) {
        console.log(error.message);
      }
};

export const createNewBlog = (blog) => async (dispatch) => {
  try {
    console.log(blog);
    const result  = await createBlog(blog);
    console.log(result);
    dispatch({ type: CREATE, payload: result });
  } catch (error) {
    console.log(error.message);
  }
};

