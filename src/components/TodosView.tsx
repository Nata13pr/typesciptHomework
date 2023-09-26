import { Stats } from "fs";
import { useState } from "react"
import { nanoid } from 'nanoid'
import TodoEditor from "./TodoEditor";




const  barStyles={
    display:'flex',
    alignItems:'flex-end',
    marginBottom:20,
}


const initialTodos=[
    {id:'1',text:'React',completed:false},
    {id:'2',text:'Redux',completed:true},
    {id:'3',text:'JS',completed:false},
    {id:'4',text:'HTML',completed:true},
]


type Todo ={
    id:string;
    text:string;
    completed:boolean;
}

 const TodosView=()=>{
    const [todos,setTodos]=useState<Todo[]>(initialTodos);
    const [filter,setFilter]=useState('');

    const addTodo=(text:string)=>{
        const todo={
            // id:new Date(),
            //  id:shortid.generate(),
            id:nanoid(),
            text,
            completed:false,
        }
          
        setTodos(todos=>[todo,...todos])
    }

    const deleteTodo=(todoId:string)=>{
        setTodos(todos=>todos.filter(todo=>todo.id!==todoId))
    }

    const toggleCompleted=(todoId:string)=>{
        setTodos(todos=>
            todos.map(todo=>
                todo.id===todoId ? {...todo,completed:!todo.completed}:todo,
                )
                )
    }

    const changeFilter=(filter:string)=>{
        setFilter(filter)
    }

    const getVisibleTodos=()=>{
        const normalizedFilter=filter.toLowerCase();

        return todos.filter(todo=>
            todo.text.toLowerCase().includes(normalizedFilter))
    }
    
    const calculateCompletedTodos=()=>{
        return todos.reduce(
            (total,todo)=>(todo.completed ?total + 1 :total),
            0
        )
    }

    const completedTodoCount =calculateCompletedTodos();
    const visibleTodos=getVisibleTodos()
    return(
        <>
        <TodoEditor onSubmit={addTodo}/>
         {/* <div style={barStyles}> */}
            {/* <Filter value={filter} onChange={changeFilter}/>
            <Stats total={todos.length} completed={completedTodoCount}/>
        </div>
        <TodoList todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
        /> */}
        </>
    )
}
export default TodosView;