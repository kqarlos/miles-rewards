import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_TO_CATEGORY,
    REMOVE_FROM_CATEGORY,
    UNDO,
    REDO
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

            state.tasks.push({
                "action": "add",
                "reward": action.reward,
                "category": action.category
            });
            state.taskIndex++;

            return {
                ...state,
                rewards: rewards2,
            };

        case REMOVE_FROM_CATEGORY:
            console.log("STATE!! REMOVING ", action.reward, " FROM CATEGORY ", action.category);
            var rewards2 = state.rewards;
            rewards2[action.reward] = state.rewards[action.reward].filter(cat => cat !== action.category);
            console.log(state.rewards);

            state.tasks.push({
                "action": "remove",
                "reward": action.reward,
                "category": action.category
            });
            state.taskIndex++;

            return {
                ...state,
                rewards: rewards2
            };

        case UNDO:
            console.log("STATE!! UNDO ");
            console.log("Tasks", state.tasks);
            console.log("TaskIndex", state.taskIndex);
            console.log("To UNDO", state.tasks[state.taskIndex]);

            if (state.tasks.lenght < 0) {
                return {
                    ...state
                };
            }
            else {
                if (state.tasks[state.taskIndex]["action"] === "remove") {
                    reducer(state, {
                        type: ADD_TO_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    });
                    state.taskIndex -= 2;

                }
                else if (state.tasks[state.taskIndex]["action"] === "add") {
                    reducer(state, {
                        type: REMOVE_FROM_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    });
                    state.taskIndex -= 2;
                }
                return {
                    ...state
                };

            }

        case REDO:
            console.log("STATE!! REDO ");
            console.log("Tasks", state.tasks);
            console.log("TaskIndex", state.taskIndex);
            console.log("To REDO", state.tasks[state.taskIndex + 1]);
            if (state.tasks.lenght === state.taskIndex + 1) {
                return {
                    ...state
                };
            }
            else {
                if (state.tasks[state.taskIndex + 1]["action"] === "add") {
                    reducer(state, {
                        type: ADD_TO_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    })
                }
                else if (state.tasks[state.taskIndex + 1]["action"] === "remove") {
                    reducer(state, {
                        type: REMOVE_FROM_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    })
                }
                return {
                    ...state
                };

            }

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
        },
        tasks: [],
        taskIndex: -1
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
