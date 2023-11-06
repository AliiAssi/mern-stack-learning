import React, { Component } from 'react';
import Task from './task_info';
import './css/todo.css'



class ToDo extends Component {
  render() {
    return (
      <div className='container   styled-container'>
        <div className="container">
          <h1 className="text-white">My Todos</h1>
          <ul className="list-group">
          <Task
             p =  {{
              title : 'task1' ,
              img   : 'https://picsum.photos/200'
             }}
            />
            <Task
             p =  {{
              title : 'task2' ,
              img   : 'https://picsum.photos/250'
             }}
            />

          </ul>
        </div>
      </div>
    );
  }
}

export default ToDo;



