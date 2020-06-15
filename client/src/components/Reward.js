import React from 'react';

//Reward box that displays the reward name
function Reward(props) {

    return (

        <div data-category={props.category} className="border my-1 p-4">
            <div data-category={props.category} className="float-right" onClick={props.remove}> x </div>
            <div data-category={props.category} > {props.reward} </div>
        </div>
    );

}

export default Reward;