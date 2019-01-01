import React, { Component } from 'react';
import propTypes from 'prop-types';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
        this.makeMeOlder = this.makeMeOlder.bind(this);
    }
    makeMeOlder() {
        this.setState(prevState => {
            return {
                age: prevState.age + 3
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Hi, This is React App </h1>
                <p>Your name is {this.props.name} and age is {this.state.age}</p>
                <h2>Skills</h2>
                <ul>
                    {this.props.skills.map(item => {
                        return <li key={item+1}>{item}</li>
                    })}
                </ul>
                <hr/>
                <div>
                    <button onClick={this.makeMeOlder}>
                        MakeMeOlder
                    </button>
                </div>
            </div>
        )
    }
};
User.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    skills: propTypes.array
}
export default User;