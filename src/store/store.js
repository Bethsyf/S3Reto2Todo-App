import { combineReducers, createStore } from "redux";
import filterReducer from "../reducers/filterReducer";
import themeReducer from "../reducers/themeReducer";
import { todoReducer } from "../reducers/todoReducer";

const reducers = combineReducers({
    todos: todoReducer,
    filtered: filterReducer,
    theme: themeReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)