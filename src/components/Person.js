import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: this.props.FirstName,
            LastName: this.props.LastName,
            Age: this.props.Age,
            Hair: this.props.Hair
        };
    }
    
    render() {
        const { FirstName, LastName, Age, Hair } = this.state;
        return (
            <div>
                <h1>{ LastName }, { FirstName }</h1>
                <p>Age: { Age }</p>
                <p>Hair Color: { Hair }</p>
                <button onClick={ () => { this.setState({ Age: this.state.Age + 1 })} }>Birthday Button for {FirstName} {LastName}</button>
            </div>
        );
    }
}
