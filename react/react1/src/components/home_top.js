import React, { Component } from 'react';
import './App.css';
import './ToDo';
import ToDo from './ToDo';
import Header from './header';


class Top extends Component {

    constructor()
    {
        super()
        this.state = {
            user_name : "ali assi",
            email: "ali@gmail.com",
            location : "hermel",
            joined : "junuary 1,2022",
            number : 0
        }
        this.save_handler = this.save_handler.bind(this)
    }

    click_handler()
    {
        const arr = ['user_name','user_email','user_location','user_joined','user_button'];
        arr.forEach(element => {
            document.getElementById(element).classList.add('none');
        });
        const arr_to_show = ['user_name_up','email_up','location_up','user_button_up'];
        arr_to_show.forEach(element => {
            document.getElementById(element).classList.remove('none');
        });
    }
    save_handler()
    {
        this.setState(
            prevNumber =>{
                return {
                    number : prevNumber.number + 1
                }
            }
        )
        this.setState({
            user_name : document.getElementById('up_user_name').value + "s"
        })

        const arr = ['user_name','user_email','user_location','user_joined','user_button'];
        arr.forEach(element => {
            document.getElementById(element).classList.remove('none');
        });
        const arr_to_show = ['user_name_up','email_up','location_up','user_button_up'];
        arr_to_show.forEach(element => {
            document.getElementById(element).classList.add('none');
        });
    }

    render() {
        return (
            <main>
                <Header />
                <div className="row">
                    <div className="col">
                        <div className='container'>
                            <div className='card shadow-lg card-cus'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img src='https://picsum.photos/seed/picsum/200/300'  className='img-fluid rounded-start' alt='User Avatar' />
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>User Profile</h5>
                                            <div className='user-info'>
                                                <div className='mb-3'>
                                                    number : {this.state.number} saves
                                                </div>
                                                <div className='user_name mb-3' id='user_name'>
                                                    <strong>User Name:</strong> {this.state.user_name}
                                                </div>
                                                <div className='none mb-3' id='user_name_up'>
                                                    <strong>User Name:</strong> <input type='text' name='up_user_name' id='up_user_name' value={this.state.user_name}/>
                                                </div>
                                                {/* email begin */}
                                                <div className='user_email mb-3' id='user_email'>
                                                    <strong>Email:</strong> {this.state.email}
                                                </div>
                                                <div className='none mb-3' id='email_up'>
                                                    <strong>email:</strong> <input type='email' name='up_email' id='up_email' value={this.state.email}/>
                                                </div>
                                                {/* location begin */}
                                                <div className='user_location mb-3' id='user_location'>
                                                    <strong>Location:</strong>{this.state.location}
                                                </div>
                                                <div className='none mb-3' id='location_up'>
                                                    <strong>location:</strong> <input type='text' name='up_location' id='up_location' value={this.state.location}/>
                                                </div>
                                                {/* joined begin */}
                                                <div className='user_joined mb-3' id='user_joined'>
                                                    <strong>Joined:</strong> {this.state.joined}
                                                </div>
                                                
                                            </div>
                                            <div className='user_button' id="user_button">
                                                <button className='btn btn-primary' onClick={this.click_handler}>Edit Profile</button>
                                            </div>
                                            <div className='user_button none' id="user_button_up">
                                                <button className='btn btn-danger' onClick={this.save_handler}>Save Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className='container mr-5'>
                            <ToDo />
                        </div>
                    </div>
                </div>


            </main>
        );
    }
}

export default Top;
