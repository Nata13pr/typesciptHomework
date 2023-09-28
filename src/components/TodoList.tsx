import ITodo from "../intefaces/Todo.interface"

interface Props{
    todos:ITodo[];
    onDeleteTodo:(todoId:string)=>void;
    onToggleCompleted:(todoId:string)=>void;
}

const TodoList =({todos,onDeleteTodo,onToggleCompleted}:Props)=>(
    <ul>
        {todos.map(({id,text,completed})=>(
            <li key={id}>
                 <input 
                    type="checkbox"
                    checked={completed}
                    onChange={(()=>onToggleCompleted)}/>
                    <p>{text}</p>
                    <button
                    type='button'
                    onClick={()=>onDeleteTodo(id)}
                    ></button>
            </li>
        ))}
    </ul>
)
export default TodoList;