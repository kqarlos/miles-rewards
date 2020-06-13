import React from 'react';

function RewardRow(props) {

    return (

        <div className="row">
            <div className="col-2 border-right">
                <div className="border my-1 p-4">
                    {props.reward}
                </div>
            </div>
            <div className="col-2 border-right">

            </div>
            <div className="col-2 border-right">

            </div>
            <div className="col-2 border-right">

            </div>
            <div className="col-2 border-right">

            </div>
            <div className="col-2">

            </div>
        </div>

    );

}

export default RewardRow;