import React from 'react';

function RewardRow(props) {

    function click(e) {
        e.preventDefault();
        console.log("Reward", props.reward);
        console.log("category", e.target.dataset.category);
    }

    return (

        <div className="row">
            <div className="col-2 border-right">
                <div className="border my-1 p-4">
                    {props.reward}
                </div>
            </div>
            <div onClick={click} data-category="C1" className="col-2 border-right">

            </div>
            <div onClick={click} data-category="C2" className="col-2 border-right">

            </div>
            <div onClick={click} data-category="C3" className="col-2 border-right">

            </div>
            <div onClick={click} data-category="C4" className="col-2 border-right">

            </div>
            <div onClick={click} data-category="C5" className="col-2">

            </div>
        </div>

    );

}

export default RewardRow;