import React from 'react';

function Reward(props) {

    return (

        <div data-category={props.category} className="border my-1 p-4">
            <div data-category={props.category} className="float-right" onClick={props.del}> x </div>
            <div data-category={props.category} > {props.reward} </div>
        </div>
    );

}

export default Reward;