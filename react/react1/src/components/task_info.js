import React, { Component } from 'react';
import './css/task.css'
class Task extends Component {
    render() {
        const { title } = this.props.p; 
        const { img } = this.props.p; 
        
        return (
            <li className="list-group-item">
                <input type="checkbox" id={title} />
                <label htmlFor={title}> {title}</label>
                <img src ={img} alt='k' width="50px" className='task_img' />
            </li>
        );
    }
}

export default Task;
