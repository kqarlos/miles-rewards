import React from 'react';

function Reward(props) {

    return (

        <div data-category={props.category} className="border my-1 p-4">
            {props.reward}
        </div>
    );

}

export default Reward;