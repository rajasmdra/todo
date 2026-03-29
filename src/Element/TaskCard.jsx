import React, { useState, useEffect } from "react";

export const TaskCard = ({todo, onComplete, onDelete}) => {

    return (
        <div className="flex flex-wrap justify-between items-center my-2 bg-gray-200 px-4 py-2 rounded-md">
            <div>
                <p className="font-semibold">{todo.text}</p>
                <p className="text-xs">Created at: {todo.createdAt}</p>
                <p className="text-xs">Deadline: {todo.deadline}</p>
                {todo.isCompleted && <p className="text-xs">Completed at: {todo.completedAt}</p>}
            </div>
            <div className="flex gap-2 flex-wrap">
                {!todo.isCompleted && (
                    <div className="flex gap-2">
                        <button 
                            className="bg-green-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-green-700"
                            onClick={() => onComplete(todo.id)}
                            >
                            Done
                        </button>
                        <button 
                            className="bg-blue-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-blue-700"
                            // onClick={() => onEdit(todo.id)}
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