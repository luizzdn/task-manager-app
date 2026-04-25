function Todo({ todo, removeTodo, completeTodo}) {
        return (
            <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                <div className="content">
                    <p>{todo.text}</p>
                    <p className="caregory">{todo.category} </p>
                </div>
                <div>
                    <button className='btnComplete' onClick={() => completeTodo(todo.id)}>Completar</button>
                    <button className='btnRemove' onClick={() => removeTodo(todo.id)}>X</button>
                </div>
            </div>
        )
    }

export default Todo