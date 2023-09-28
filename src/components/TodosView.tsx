import { useEffect, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import TodoEditor from "./TodoEditor";
import Filter from "./Filter";
import ITodo from "../intefaces/Todo.interface";
import Stats from "./Stats";
import TodoList from "./TodoList";

const barStyles = {
  display: "flex",
  alignItems: "flex-end",
  marginBottom: 20,
};

const initialTodos = [
  { id: "1", text: "React", completed: false },
  { id: "2", text: "Redux", completed: true },
  { id: "3", text: "JS", completed: false },
  { id: "4", text: "HTML", completed: true },
];
// interface ITodo{
//     id:string;
//     text:string;
//     completed:boolean;
// }

// type Todo ={
//     id:string;
//     text:string;
//     completed:boolean;
// }

const getInitialTodoState = () => {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
};

// const getInitialTodoState=():ITodo[]=>{
//     const savedTodos=localStorage.getItem('todos');

//     return savedTodos ? JSON.parse(savedTodos):[];
// }

const TodosView = () => {
  // const [todos,setTodos]=useState<Todo[]>(initialTodos);
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodoState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const todo = {
      // id:new Date(),
      //  id:shortid.generate(),
      id: nanoid(),
      text,
      completed: false,
    };

    setTodos((todos) => [todo, ...todos]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  const toggleCompleted = (todoId: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  const visibleTodos = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  }, [todos, filter]);

  // const getVisibleTodos=()=>{
  //     const normalizedFilter=filter.toLowerCase();

  //     return todos.filter(todo=>
  //         todo.text.toLowerCase().includes(normalizedFilter))
  // }

  const completedTodoCount = useMemo(() => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }, [todos]);
  // const calculateCompletedTodos=()=>{
  //     return todos.reduce(
  //         (total,todo)=>(todo.completed ?total + 1 :total),
  //         0
  //     )
  // }

  // const completedTodoCount =calculateCompletedTodos();
  // const visibleTodos=getVisibleTodos()
  return (
    <>
      <TodoEditor onSubmit={addTodo} />
      <div style={barStyles}>
        <Filter value={filter} onChange={changeFilter} />
        <Stats total={todos.length} completed={completedTodoCount} />
      </div>
      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </>
  );
};
export default TodosView;
