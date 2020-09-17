import React from 'react';

const DrinkSummary = ({drink}) => {
    return (
    <div className='card horizontal'>
        <div className="card-image"><i className='material-icons small'>bubble_chart</i></div>
        <div className="card-content">
        <p>{`The Drink is... ${drink.name}!`}</p>
        </div>
    </div>
    );
}

export default DrinkSummary;
