import React from 'react';
import './Portfolio.css';
import Todo from './todo/Todo';
import MovieSomething from './moviesomething/MovieSomething';
import PortfolioPage from './portfolioPage/PortfolioPage';




class Portfolio extends React.Component {
  render() {
    return(
      <div className='portfolio-container' id='Portfolio'>
        <h3>Projects</h3>
        <div className='project-container'>
          <MovieSomething />
          <Todo />
          <PortfolioPage />
        </div>
      </div>
    )
  }
}

export default Portfolio;
