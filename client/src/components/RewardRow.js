import React from 'react';
import Reward from "./Reward";

function RewardRow(props) {

    var categories = props.categories;

    function click(e) {
        e.preventDefault();
        console.log("Clicked!");
        console.log("Reward", props.reward);
        console.log("Category", e.target.dataset.category);
    }
    
    function del(e) {
        e.preventDefault();
        console.log("Delete!");
        console.log("Reward", props.reward);
        console.log("Category", e.target.dataset.category);
    }

    return (

        <div className="row">
            <div className="col-2 border-right">
                <div className="border my-1 p-4">
                    {props.reward}
                </div>
            </div>
            <div onClick={click} data-category="C1" className="col-2 border-right">
                {
                    categories.map((cat, index) => {
                        if (cat === "C1") {
                            return <Reward key={index} category="C1" del={del} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div onClick={click} data-category="C2" className="col-2 border-right">
                {
                    categories.map((cat, index) => {
                        if (cat === "C2") {
                            return <Reward key={index} category="C2" del={del} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div onClick={click} data-category="C3" className="col-2 border-right">
                {
                    categories.map((cat, index) => {
                        if (cat === "C3") {
                            return <Reward key={index} category="C3" del={del} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div onClick={click} data-category="C4" className="col-2 border-right">
                {
                    categories.map((cat, index) => {
                        if (cat === "C4") {
                            return <Reward key={index} category="C4" del={del} reward={props.reward} />
                        }

                    })
                }
            </div>
            <div onClick={click} data-category="C5" className="col-2">
                {
                    categories.map((cat, index) => {
                        if (cat === "C5") {
                            return <Reward key={index} category="C5" del={del} reward={props.reward} />
                        }

                    })
                }
            </div>
        </div>

    );

}

export default RewardRow;