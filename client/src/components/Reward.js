import React from 'react';

//Reward box that displays the reward name
function Reward(props) {

    function onDragStart(e) {
        // e.preventDefault();
        console.log("DRAG START!")
    }

    function onDrag(e) {
        // e.preventDefault();
        console.log("ON DRAG!")
    }

    return (

        <div className="border mx-auto mt-3 p-4" style={{width: 100}} data-category={props.category} draggable
            onDragStart={(e) => onDragStart(e)} onDrag={(e) => onDrag(e)}>
            <div data-category={props.category} className="float-right" onClick={props.remove}> x </div>
            <div data-category={props.category} className="text-center"> {props.reward} </div>
        </div>
    );

}

export default Reward;