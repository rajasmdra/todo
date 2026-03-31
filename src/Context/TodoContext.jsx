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

    const addTodo = (task, deadline) => {
        const newTodo = {
            id: Date.now(), 
            text: task,
            isCompleted: false,
            createdAt: new Date(),
            deadline: new Date(deadline),
            lastEditedAt: new Date(),
            completedAt: null
        }
        setTodos([...todos, newTodo]);
    }

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

    const editTodo = (id, task, deadline) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, text: task, deadline: deadline, lastEditedAt: new Date()}
                    : todo
            )
        );
    }

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            addTodo,
            deleteTodo,
            completeTodo,
            editTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);