import { ADD_TODO, DELETE_TODO } from "./ActionConstant"

export const addTodo = (data) => {
    return { type: ADD_TODO, payload: data }
}

export const removeTodo = (data) => {
    return { type: DELETE_TODO, payload: data }
}