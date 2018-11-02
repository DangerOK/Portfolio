import React from 'react';
import './Portfolio.css';
import Todo from './todo/Todo';
import MovieSomething from './moviesomething/MovieSomething';
import Project3 from './project3/Project3';



class Portfolio extends React.Component {
  render() {
    return(
      <div className='portfolio-container' id='Portfolio'>
        <MovieSomething />
        <Project3 />
        <Todo />
      </div>
    )
  }
}

export default Portfolio;
