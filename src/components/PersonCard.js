import React from 'react';

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.LastName }, { props.FirstName }</h1>
            <p>Age: { props.Age }</p>
            <p>Hair Color: { props.Hair }</p>
        </div>
    );
}
export default PersonCard;
