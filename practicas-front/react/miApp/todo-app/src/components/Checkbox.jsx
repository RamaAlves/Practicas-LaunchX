import React, { Fragment } from "react";

const Checkbox =props=>{

    const {
        onChange,
        data:{id, description, done}
    }=props
    return (<Fragment>
        <svg 
            viewBox="0 0 0 0" 
            // className="animationchk" 
            style={{position:"absolute", zIndex:-1, opacity:0}}
            >
            <defs>
                <path id="todo-line" d="M21 12.3h168v0.1z" ></path>
                <path id="todo-box" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4" ></path>
                <path id="todo-check" d="M10 1312 2 5-5" ></path>
                <circle id="todo-circle" cx="13.5" cy="12.5" r="10"/>
                
            </defs>
        </svg>


        <label className="todo new-item">
            <input
                className="todo-state"
                name={id}
                type="checkbox"
                defaultChecked={done}
                onChange={onChange}/>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 200 25" 
                    className="todo-icon">
                    <use xlinkHref="#todo-line" className="todo-line"></use>
                    <use xlinkHref="#todo-box" className="todo-box"></use>
                    <use xlinkHref="#todo-check" className="todo-check"></use>
                    <use xlinkHref="#todo-circle" className="todo-circle"></use>
                </svg>
            <div className="todo-text">{description}</div>
        </label>
    </Fragment>);
}

export default Checkbox;