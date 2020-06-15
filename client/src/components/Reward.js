import React from 'react';

//Reward box that displays the reward name
function Reward(props) {

    function onDragStart(e) {
        // e.preventDefault();
    }

    function onDrag(e) {
        // e.preventDefault();
    }

    return (

        <div className="border my-1 p-4" data-category={props.category} draggable
            onDragStart={(e) => onDragStart(e)} onDrag={(e) => onDrag(e)}>
            <div data-category={props.category} className="float-right" onClick={props.remove}> x </div>
            <div data-category={props.category} > {props.reward} </div>
        </div>
    );

}

export default Reward;