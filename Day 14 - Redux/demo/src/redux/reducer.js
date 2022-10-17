import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO } from "./ActionConstant";

const initialState = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Redux' },
    { id: 3, text: 'Build something fun!' }
];

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                }
            ]
        }
            break;
        case DELETE_TODO: {
            return state.filter(todo => todo.id !== action.payload)
        }
            break;
        default: return state;
            break;
    }
}

const rootReducer = combineReducers({
    initTodo: reducer
});
export default rootReducer;