import React from 'react';
import DrinkSummary from './DrinkSummary';

const DrinkList = ({drinksthing}) => {
    const renderedList = drinksthing && drinksthing.map(drink => <DrinkSummary drink={drink} key={drink.id}/>);
    
    return (
        <div className='col s6'>
            {renderedList}
        </div>
    );
}

export default DrinkList;
