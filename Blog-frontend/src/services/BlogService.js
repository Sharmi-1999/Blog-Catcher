import { getCall, postCall, putCall, deleteCall } from "../apiCall";
import {
  FETCH_BLOG,
  CREATE_BLOG,
  FETCH_BLOG_BY_ID,
  DELETE_BLOG,
} from "./apiEndPoints";

export const createBlog = async (payload) => {
  return new Promise((resolve, reject) => {
    try {
      postCall(CREATE_BLOG(), payload).then((res) => {
        resolve(res);
      });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};

export const fetchBlogs = async () => {
  return new Promise((resolve, reject) => {
    try {
      getCall(FETCH_BLOG()).then((res) => {
        // console.log(res);
        resolve(res);
      });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};

export const fetchBlogById = async (id) => {
  return new Promise((resolve, reject) => {
    try {
      getCall(FETCH_BLOG_BY_ID(id)).then((res) => {
        // console.log(res);
        resolve(res);
      });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};

export const deleteBlogById = async (id) => {
  return new Promise((resolve, reject) => {
    try {
      deleteCall(DELETE_BLOG(id)).then((res) => {
        // console.log(res);
        resolve(res);
      });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};
