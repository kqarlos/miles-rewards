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
            //If rewards categories is new, add to list of categories
            if (!categories.includes(action.category)) {
                rewards2[action.reward].push(action.category);
            }

            //If task is new add to tasks stack
            if (action.newTask) {
                console.log("NEW TASK!! TASKS: ", state.tasks);
                let tasks2 = state.tasks;
                //update current task index, remove everything after it, add new task
                state.taskIndex++;
                tasks2.splice(state.taskIndex);
                tasks2.push({
                    "action": "add",
                    "reward": action.reward,
                    "category": action.category
                });
                console.log("UPDATED TASKS", tasks2);
                return {
                    ...state,
                    rewards: rewards2,
                    tasks: tasks2
                };
            }
            //If task is a redo/undo don't add to tasks stack. Update Rewards
            else {
                return {
                    ...state,
                    rewards: rewards2,
                };
            }

        case REMOVE_FROM_CATEGORY:
            console.log("STATE!! REMOVING ", action.reward, " FROM CATEGORY ", action.category);
            var rewards2 = state.rewards;
            //Remove category that matches given category
            rewards2[action.reward] = state.rewards[action.reward].filter(cat => cat !== action.category);

            //If task is new add to tasks stack
            if (action.newTask) {
                console.log("NEW TASK!! TASKS: ", state.tasks);
                let tasks2 = state.tasks;
                //update current task index, remove everything after it, add new task
                state.taskIndex++;
                tasks2.splice(state.taskIndex);
                tasks2.push({
                    "action": "remove",
                    "reward": action.reward,
                    "category": action.category
                });
                console.log("UPDATED TASKS", tasks2);
                return {
                    ...state,
                    rewards: rewards2,
                    tasks: tasks2
                };
            }
            //If task is a redo/undo don't add to tasks stack. Update Rewards
            else {
                return {
                    ...state,
                    rewards: rewards2,
                };
            }

        case UNDO:
            console.log("STATE!! UNDO ");
            console.log("Tasks", state.tasks);
            console.log("TaskIndex", state.taskIndex);
            console.log("To UNDO", state.tasks[state.taskIndex]);

            if (state.taskIndex < 0) {
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

                }
                else if (state.tasks[state.taskIndex]["action"] === "add") {
                    reducer(state, {
                        type: REMOVE_FROM_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    });
                }
                if (state.taskIndex === -1) {
                    return {
                        ...state,
                        taskIndex: -1
                    };
                } else {
                    state.taskIndex--;
                    return {
                        ...state,
                    };
                }

            }

        case REDO:
            console.log("STATE!! REDO ");
            console.log("Tasks", state.tasks);
            console.log("TaskIndex", state.taskIndex);
            console.log("To REDO", state.tasks[state.taskIndex + 1]);
            if (state.tasks.length === state.taskIndex + 1) {
                return {
                    ...state
                };
            }
            else {
                if (state.tasks[state.taskIndex + 1]["action"] === "add") {
                    reducer(state, {
                        type: ADD_TO_CATEGORY,
                        reward: state.tasks[state.taskIndex + 1]["reward"],
                        category: state.tasks[state.taskIndex + 1]["category"]
                    })
                }
                else if (state.tasks[state.taskIndex + 1]["action"] === "remove") {
                    reducer(state, {
                        type: REMOVE_FROM_CATEGORY,
                        reward: state.tasks[state.taskIndex + 1]["reward"],
                        category: state.tasks[state.taskIndex + 1]["category"]
                    })
                }
                if (state.taskIndex === state.tasks.length - 1) {
                    return {
                        ...state,
                    };
                } else {
                    state.taskIndex++;
                    return {
                        ...state,
                    };
                }

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
