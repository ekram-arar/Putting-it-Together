import { Component } from "react";
import React from 'react'
class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count:this.props.age
        };
      }
      increment() {
        this.setState({
          count: this.state.count +1
        });
      };
    render(){
        const { firstName, lastName,hairColor } = this.props;
       
        return(
            
            <div>
                <h1>{firstName}, {lastName}</h1><br/>
                <p>Age: {this.state.count}</p><br/>
                <p>Hair Color:{hairColor}</p><br/>
                <button className='inc' onClick={(e) => this.increment(e)}>Button for {lastName} {firstName} </button>
                
            </div>
        );
    }
}
export default PersonCard;