import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { UNDO } from '../utils/actions';

function UndoButton() {

    const [state, dispatch] = useStoreContext();

    function undo(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch({
            type: UNDO
        });
    }
    return (

        <button onClick={undo}>Undo</button>
    );

}

export default UndoButton;