import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id
                ? {...todo, isCompleted: true, completedAt: new Date().toLocaleString()}
                : todo
        ))
    }


    const activeTodos = todos.filter(todo => !todo.isCompleted);
    const completedTodos = todos.filter(todo => todo.isCompleted);

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            deleteTodo,
            completeTodo,  
            activeTodos,
            completedTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);