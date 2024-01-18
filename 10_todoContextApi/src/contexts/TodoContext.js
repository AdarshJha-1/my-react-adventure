import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            isCompleted: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});



export const useTodo = () => {
    return useContext(TodoContext)
} 

export const TodoContextProvider = TodoContext.Provider;