import React from 'react';
import { useStoreContext } from "../utils/GlobalState";


function SaveButton() {

    const [state, dispatch] = useStoreContext();

    function click(e) {
        e.preventDefault();
        console.log("Save");
        localStorage.setItem("Rewards", JSON.stringify(state.rewards));
    }
    return (

        <button onClick={click}>Save</button>
    );

}

export default SaveButton;