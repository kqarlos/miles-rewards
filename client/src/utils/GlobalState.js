import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_TO_CATEGORY,
    REMOVE_FROM_CATEGORY,
    UNDO, REDO, LOAD, DRAGGING,
    DROPPED
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {

        case ADD_TO_CATEGORY:
            // console.log("STATE!! ADDING ", action.reward, " TO CATEGORY ", action.category);
            //If the call was made by a dragged element
            if (state.dragging["reward"]) {
                // console.log("DRAGGED: ", state.dragging)
                // return and ignore if it came from another reward row or from first column
                if (state.dragging["reward"] !== action.reward) {
                    return {
                        ...state,
                        dragging: {
                            "reward": "",
                            "category": ""
                        }
                    };
                //Remove incoming if dragged from another category
                }
                else if (state.dragging["category"]) {
                    reducer(state, {
                        type: REMOVE_FROM_CATEGORY,
                        reward: state.dragging["reward"],
                        category: state.dragging["category"],
                        newTask: true
                    });
                }
            }
            var rewards2 = state.rewards;
            var categories = rewards2[action.reward];
            //If rewards categories is new, add to list of categories
            if (!categories.includes(action.category)) {
                rewards2[action.reward].push(action.category);
            }

            //If task is new add to tasks stack
            if (action.newTask) {
                // console.log("NEW TASK!! TASKS: ", state.tasks);
                let tasks2 = state.tasks;
                //update current task index, remove everything after it, add new task
                state.taskIndex++;
                tasks2.splice(state.taskIndex);
                tasks2.push({
                    "action": "add",
                    "reward": action.reward,
                    "category": action.category
                });
                // console.log("UPDATED TASKS", tasks2);
                return {
                    ...state,
                    rewards: rewards2,
                    tasks: tasks2,
                    dragging : {
                        "reward": "",
                        "category": ""
                    }
                };
            }
            //If task is a redo/undo don't add to tasks stack. Update Rewards
            else {
                return {
                    ...state,
                    rewards: rewards2,
                    dragging : {
                        "reward": "",
                        "category": ""
                    }
                };
            }

        case REMOVE_FROM_CATEGORY:
            // console.log("STATE!! REMOVING ", action.reward, " FROM CATEGORY ", action.category);
            var rewards2 = state.rewards;
            //Remove category that matches given category
            rewards2[action.reward] = state.rewards[action.reward].filter(cat => cat !== action.category);

            //If task is new add to tasks stack
            if (action.newTask) {
                // console.log("NEW TASK!! TASKS: ", state.tasks);
                let tasks2 = state.tasks;
                //update current task index, remove everything after it, add new task
                state.taskIndex++;
                tasks2.splice(state.taskIndex);
                tasks2.push({
                    "action": "remove",
                    "reward": action.reward,
                    "category": action.category
                });
                // console.log("UPDATED TASKS", tasks2);
                return {
                    ...state,
                    rewards: rewards2,
                    tasks: tasks2,
                    dragging : {
                        "reward": "",
                        "category": ""
                    }
                };
            }
            //If task is a redo/undo don't add to tasks stack. Update Rewards
            else {
                return {
                    ...state,
                    rewards: rewards2,
                    dragging : {
                        "reward": "",
                        "category": ""
                    }
                };
            }

        case UNDO:
            // console.log("To UNDO", state.tasks[state.taskIndex]);
            //If there no more tasks to undo and we are at the beggining of the stack, return.
            if (state.taskIndex < 0) {
                return {
                    ...state
                };
            }
            //If there are more tasks to undo
            else {
                //If last taks was a remove, add the category back to the reward
                if (state.tasks[state.taskIndex]["action"] === "remove") {
                    reducer(state, {
                        type: ADD_TO_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    });

                }
                //If last taks was an add, remove the category from to the reward
                else if (state.tasks[state.taskIndex]["action"] === "add") {
                    reducer(state, {
                        type: REMOVE_FROM_CATEGORY,
                        reward: state.tasks[state.taskIndex]["reward"],
                        category: state.tasks[state.taskIndex]["category"]
                    });
                }
                //If that was the last task to undo and we are back at the beggining of the stack, return.
                if (state.taskIndex === -1) {
                    return {
                        ...state,
                        taskIndex: -1
                    };
                    //If there are more tasks to undo, decrease the index of the task stack
                } else {
                    state.taskIndex--;
                    return {
                        ...state,
                    };
                }

            }

        case REDO:
            // console.log("To REDO", state.tasks[state.taskIndex + 1]);
            //If there are no more tasks to redo and we are at the end of the stack, return.
            if (state.tasks.length === state.taskIndex + 1) {
                return {
                    ...state
                };
            }
            //If there are more tasks to redo
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
                //If that was the last task to redo and we a re at the end of the stak, return
                if (state.taskIndex === state.tasks.length - 1) {
                    return {
                        ...state,
                    };
                    //If there are more tasks to redo, increment the index of the tasks stack
                } else {
                    state.taskIndex++;
                    return {
                        ...state,
                    };
                }

            }

        case LOAD:
            return {
                ...state,
                rewards: action.rewards
            };

        case DRAGGING:
            // console.log("DRAGGING: ", state.dragging, action.reward);
            return {
                ...state,
                dragging: {
                    "reward": action.reward,
                    "category": action.category
                }
            };

        default:
            return state;
    }
};

//Initialize the state with rewards with no categories and an empty tasks stack.
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
        taskIndex: -1,
        dragging: {
            "reward": "",
            "category": ""
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
