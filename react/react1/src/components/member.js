import React, { Component } from 'react';
import './css/member.css'
class Task extends Component {
    render() {
        const { title } = this.props;
        const { email } = this.props;
        const { content } = this.props;
        const { img } = this.props;
        return (
            <div className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className='profile-picture-container'>
                            <div className='profile-picture-frame'>
                                <img src={img} alt='Profile' className='profile-picture' />
                            </div>
                        </div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            <span className='text-muted'>{email === '' ? (
                                <p>Email not found</p>
                            ) : (
                                <p>Email: {email}</p>
                            )}
                            </span>
                        </p>
                        <p className="card-text">{content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;
