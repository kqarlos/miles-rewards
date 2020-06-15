import React from 'react';
import { useStoreContext } from "../utils/GlobalState";

function SaveButton() {

    const [state, dispatch] = useStoreContext();

    function save(e) {
        e.preventDefault();
        console.log("Saved");
        localStorage.setItem("Rewards", JSON.stringify(state.rewards));
    }
    return (

        <button className="btn btn-secondary" onClick={(e) => save(e)}>Save</button>
    );

}

export default SaveButton;