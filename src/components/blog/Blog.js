import React from 'react';
import './Blog.css';
import { Route, Link } from 'react-router-dom';
import About from './articles/About';
import BlogLanding from './articles/BlogLanding';
import MovieSomething from './articles/MovieSomething'

const Blog = ({ match }) => {
  return (
    <div className='blog-container'>
      <div className='blog-sidebar'>
        <ul>
          <h2><Link to={'/Blog'}>Blog</Link></h2>
          <li><Link to={`${match.path}/About`}>About</Link></li>
          <li><Link to={`${match.path}/MovieSomething`}>MovieSomething</Link></li>
        </ul>
      </div>
      <div className='article-container'>
        <Route exact path={`/Blog`} component={BlogLanding}></Route>
        <Route path={`${match.path}/About`} component={About}></Route>
        <Route path={`${match.path}/MovieSomething`} component={MovieSomething}></Route>
      </div>
    </div>
  )
}

export default Blog;
//
//
//
