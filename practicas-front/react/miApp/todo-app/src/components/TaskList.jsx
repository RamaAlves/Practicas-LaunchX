import React from "react";
import Checkbox from "./Checkbox";


const TaskList= props =>{
    const {list,setList} = props;
    
    const onChangeStatus= e=>{
        const {name, checked}=e.target;
        const updateList =list.map(item=>({
            ...item,
            done: item.id===name?checked:item.done
        }));
        console.log(updateList)
        setList(updateList)
    }

    const onClickRemoveItem = e=>{
        const updateList=list.filter(item => !item.done);
        setList(updateList)
    }
    const checkbox= list.map(item=>(
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>));
    
    return(
        <div className="todo-list">
            <div className="task-todo">
                {list.length? checkbox: "no hay tareas"}
            </div>
            <div className="container-delete">
                {list.length? (
                    <p>
                        <button className="button blue" onClick={onClickRemoveItem}>Delete</button>
                    </p>
                ): null}
            </div>
        </div>
        )
}

export default TaskList