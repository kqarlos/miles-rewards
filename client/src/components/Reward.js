import React from 'react';
import { DRAGGING } from '../utils/actions';
import { useStoreContext } from "../utils/GlobalState";

//Reward box that displays the reward name
function Reward(props) {
    const [state, dispatch] = useStoreContext();

    function onDragStart(e) {
        // e.preventDefault();
        dispatch({
            type: DRAGGING,
            reward: props.reward,
            category: props.category
        });
    }

    function onDrag(e) {
        // e.preventDefault();
    }

    return (

        <div className="border mx-auto mt-3 p-4" style={{ width: 100 }} data-category={props.category} draggable
            onDragStart={(e) => onDragStart(e)} onDrag={(e) => onDrag(e)}>
            <div data-category={props.category} className="float-right" onClick={props.remove}> x </div>
            <div data-category={props.category} className="text-center"> {props.reward} </div>
        </div>
    );

}

export default Reward;