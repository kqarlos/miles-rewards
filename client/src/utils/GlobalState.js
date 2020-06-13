import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_TO_CATEGORY,
    REMOVE_FROM_CATEGORY
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CATEGORY:
            return {
                ...state,
                rewards: action.rewards,
            };
        case REMOVE_FROM_CATEGORY:
            return {
                ...state,
                rewards: action.rewards,
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        rewards: {
            "R1": ["C1", "C2"],
            "R2": ["C1", "C3"],
            "R3": ["C5"],
            "R4": ["C4"],
            "R5": ["C3"]
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
