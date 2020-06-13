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
            console.log("STATE!! ADDING ", action.reward, " TO CATEGORY ", action.category);
            var rewards2 = state.rewards;
            var categories = rewards2[action.reward];
            if (!categories.includes(action.category)) {
                rewards2[action.reward].push(action.category);
            }
            return {
                ...state,
                rewards: rewards2,
            };
        case REMOVE_FROM_CATEGORY:
            console.log("STATE!! REMOVING ", action.reward, " FROM CATEGORY ", action.category);
            var rewards2 = state.rewards;
            rewards2[action.reward] = state.rewards[action.reward].filter(cat => cat !== action.category);
            console.log(state.rewards);
            return {
                ...state,
                rewards: rewards2
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        rewards: {
            "R1": [],
            "R2": [],
            "R3": [],
            "R4": [],
            "R5": []
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
