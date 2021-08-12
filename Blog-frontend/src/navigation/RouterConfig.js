import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import CreateBlog from '../pages/CreateBlogPage'
import BlogDetails from '../pages/BlogDetailsPage'


export default function RouterConfig() {
    return (
        <Switch>
        {/* List all public routes here */}
       
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/create" exact>
          <CreateBlog />
        </Route>
        <Route path="/details" exact>
          <BlogDetails />
        </Route>
        
        {/* {' '}
        <Route path="*">
           <NotFound />
          {' '}
        </Route> */}
      </Switch>
    )
}
