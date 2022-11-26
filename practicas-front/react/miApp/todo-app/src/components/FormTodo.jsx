import React from "react";
import { useState } from "react";

const FormTodo= props =>{
    const [description, setDescription]= useState("");
    
    const {addItem}=props;

    const handleSubmit = e=>{
        e.preventDefault();
        console.log(description);
        addItem({
            done:false,
            id: (new Date()).toString(), 
            description
        });
        setDescription("");
    }



    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <label className="label-input">
                        Nueva tarea:
                    </label>
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button className="button blue" disabled={description?"":"disabled"}>
                        Agregar Tarea
                    </button>
                </div>
            </div>
        </form>
        )
}

export default FormTodo