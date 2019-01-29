import React from 'react';
import ToDoThumbnail from '../../images/ToDoThumbnail.png'


const Todo = () => (
  <div className='project' id='webNail'>
    <a href='https://dangerok.github.io/Todo-Ex/' target='_blank' rel="noopener noreferrer">
      <h2>The To-Do Experiment</h2>
      <img src={ToDoThumbnail} alt='site thumbnail' />
      <p>Your run of the mill To-Do App. One of the first projects I built using React.</p>
    </a>
</div>
)

export default Todo;
