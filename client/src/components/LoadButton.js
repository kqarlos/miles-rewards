import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { LOAD } from '../utils/actions';

function LoadButton() {

    const [state, dispatch] = useStoreContext();

    function load(e) {
        e.preventDefault();
        console.log("Loading");
        console.log(JSON.parse(localStorage.getItem("Rewards")));
        dispatch({
            type: LOAD,
            rewards: JSON.parse(localStorage.getItem("Rewards"))
        });
    }
    return (

        <button onClick={(e) => load(e)}>Load</button>
    );

}

export default LoadButton;