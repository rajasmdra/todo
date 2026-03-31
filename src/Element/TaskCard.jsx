import React, { useState, useEffect } from "react";

export const TaskCard = ({todo, onComplete, onDelete, onEdit}) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleString("id-ID");
    }
    const isOverdue = new Date(todo.deadline) < new Date() && !todo.isCompleted ||
                    new Date(todo.deadline) < new Date(todo.completedAt) && todo.isCompleted;

    return (
        <div className={`flex flex-wrap gap-1 justify-between items-center my-2 px-4 py-2 rounded-md ${isOverdue ? "bg-red-200" : "bg-gray-200"}`}>
            <div>
                <p className="font-semibold">{todo.text}</p>
                <p className="text-xs">Created at: {formatDate(todo.createdAt)}</p>
                <p className="text-xs">Deadline: {formatDate(todo.deadline)}</p>
                {todo.isCompleted && <p className="text-xs">Completed at: {formatDate(todo.completedAt)}</p>}
            </div>
            <div className="flex gap-2 flex-wrap">
                {!todo.isCompleted && (
                    <div className="flex gap-2 flex-wrap">
                        <button 
                            className="bg-green-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-green-700"
                            onClick={() => onComplete(todo.id)}
                            >
                            Done
                        </button>
                        <button 
                            className="bg-blue-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-blue-700"
                            onClick={() => onEdit(todo)}
                            >
                            Edit
                        </button>
                    </div>
                )}
                <button 
                    className="bg-red-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-red-700"
                    onClick={() => onDelete(todo.id)}
                    >
                    Delete
                </button>
            </div>
        </div>
    )
}