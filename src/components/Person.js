import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        const { FirstName, LastName, Age, Hair } = this.props;
        return (
            <div>
                <h1>{ LastName }, { FirstName }</h1>
                <p>Age: { Age }</p>
                <p>Hair Color: { Hair }</p>
            </div>
        );
    }
}
