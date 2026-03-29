import React, { useState, useEffect } from "react"; 
import { TaskCard } from "../Element/TaskCard";
import { useTodo } from "../TodoContext";

export const Complete = () => {

    const { todos, completeTodo, deleteTodo, completedTodos} = useTodo()

    return (
        <>
            <h1 className="text-3xl font-bold">Completed Task</h1>
            <p>Your Completed Task: {completedTodos.length}</p>
            {completedTodos.length === 0 ? (
                <p>No Task Here</p>
            ) : (
                <ul>
                    {completedTodos.map((todo) => (
                        <li key={todo.id}>
                            <TaskCard 
                                todo={todo} 
                                onComplete={completeTodo}
                                onDelete={deleteTodo}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}