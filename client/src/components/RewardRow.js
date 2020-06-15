import React from 'react';
import Reward from "./Reward";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CATEGORY, ADD_TO_CATEGORY } from '../utils/actions';

//Rewards row. Renders a reward box in each category column the rewards belongs to
function RewardRow(props) {

    const [state, dispatch] = useStoreContext();

    var categories = props.categories;

    //Called when a cell in the table is clicked. 
    //Adds category to the reward
    function add(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Clicked!");
        //Calls the state management and sends over the reward/category cell clicked.
        //Lets the state management know that the task is new and needs to be added to the recent tasks stack.
        dispatch({
            type: ADD_TO_CATEGORY,
            reward: props.reward,
            category: e.target.dataset.category,
            newTask: true
        });
    }

    //Called when the x is clicked in the rewards category. 
    //Removes the category from the reward.
    function remove(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Delete!");
        //Calls the state management and sends over the reward/category cell clicked.
        //Lets the state management know that the task is new and needs to be added to the tasks stack.
        dispatch({
            type: REMOVE_FROM_CATEGORY,
            reward: props.reward,
            category: e.target.dataset.category,
            newTask: true
        });
    }

    function onDragStart(e) {
        // e.preventDefault();
        console.log("DRAG START!");
    }

    function onDrag(e) {
        // e.preventDefault();
        console.log("ON DRAG!");
    }

    function onDragOver(e) {
        e.preventDefault();
        // console.log("DRAG OVER!")
    }

    function onDrop(e) {
        // e.preventDefault();
        console.log("DROPPING!", e);
        add(e);
    }

    return (

        <div className="row text-muted">
            <div className="col-2 border-right" draggable onDragStart={(e) => onDragStart(e)} onDrag={(e) => onDrag(e)}>
                <div className="border mt-3 p-4 mx-auto text-center" style={{width: 100}}>
                    {props.reward}
                </div>
            </div>
            <div data-category="C1" className="col-2 border-right"
                onClick={(e) => add(e)} onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                {
                    categories.map((cat, index) => {
                        if (cat === "C1") {
                            return <Reward key={index} category="C1" remove={remove} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div data-category="C2" className="col-2 border-right"
                onClick={(e) => add(e)} onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                {
                    categories.map((cat, index) => {
                        if (cat === "C2") {
                            return <Reward key={index} category="C2" remove={remove} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div data-category="C3" className="col-2 border-right"
                onClick={(e) => add(e)} onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                {
                    categories.map((cat, index) => {
                        if (cat === "C3") {
                            return <Reward key={index} category="C3" remove={remove} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div data-category="C4" className="col-2 border-right"
                onClick={(e) => add(e)} onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                {
                    categories.map((cat, index) => {
                        if (cat === "C4") {
                            return <Reward key={index} category="C4" remove={remove} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div data-category="C5" className="col-2 border-right"
                onClick={(e) => add(e)} onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                {
                    categories.map((cat, index) => {
                        if (cat === "C5") {
                            return <Reward key={index} category="C5" remove={remove} reward={props.reward} />
                        }

                    })
                }
            </div>
        </div>

    );

}

export default RewardRow;