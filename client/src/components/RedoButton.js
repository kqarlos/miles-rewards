import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { REDO } from '../utils/actions';

function RedoButton() {

    const [state, dispatch] = useStoreContext();

    function redo(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch({
            type: REDO
        });
    }
    return (

        <button onClick={(e) => redo(e)}>Redo</button>
    );

}

export default RedoButton;