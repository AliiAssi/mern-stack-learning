import React, { Component } from 'react';
import Member from './member'; // Assuming your Member component is in './Member.js'
import memberInfo from './members_of_team';
class Team extends Component {
  constructor() {
    super();
    this.state = {
      cardsData: [],
      index: 0,
      inc : false
    };
    this.show = this.show.bind(this)
  }
  
  show() {
    this.setState(prevState => {
      if (prevState.index < memberInfo.length) {
        return {
          index: prevState.index + 1,
          inc : true,
          cardsData: [...prevState.cardsData, memberInfo[prevState.index]],
          isButtonDisabled: prevState.index + 1 >= memberInfo.length
        };
      }
      
      return null;
    });
  }
  
  mapping(arr) {
    const members = arr.map(member => (
      <Member
        key={member.id}
        title={member.title}
        email={member.email}
        content={member.content}
        img={member.img}
      />
    ));
    return members;
  }
  


  render() {
    // Sample data for the cards (you can replace this with your own data)
    //
    return (
      <section>
        <hr />
        <h2 className='text-center'>OUR USERS  <br />
        <button onClick={this.show} id='show_btn' className='btn btn-primary mr-1' disabled={this.state.isButtonDisabled}>
        {this.state.isButtonDisabled ? "no more" : this.state.inc ? "Show more" : "Show"}
        </button></h2>
        <div className="container mt-4">
          <div className="row">
            {
              this.mapping(this.state.cardsData)
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
