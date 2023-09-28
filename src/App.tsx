import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import ColorPicker from './components/ColorPicker';
import Form from './components/Form';
import TodosView from './components/TodosView';
import Filter from './components/Filter';



// import shortid from "shortid";
// import "./App.css";
// import ColorPicker from "./ColorPicker";
// // import Counter from './Counter';
// import DropDown from "./DropDown";
// import Filter from "./Filter/Filter";
// import Form from "./Form/Form";
// import Clock from "./Modal/Clock/Clock";
// import Modal from "./Modal/Modal";
// import Tabs from "./Tabs/Tabs";
// import TodoEditor from "./TodoEditor/TodoEditor";
// import TodoList from "./TodoList";
// import items from './tabs.json'
// import IconButton from "./IconButton/IconButton";
// import CounterwithRedux from "./CounterwithRedux/CounterwithRedux";



const colorPicker=[
  {label:'red',color:'#F44336'},
  {label:'green',color:'#4CAF50'},
  {label:'blue',color:'##7FFF00'},
  {label:'grey',color:'#2196F3'},
  {label:'pink',color:'#607D88'},
  {label:'indigo',color:'#6077'},
  {label:'amazur',color:'#2199'},
]

class App extends Component {
  // state = {
  //   todos: [
  //     // { id: "id-1", text: "Learn react", completed: false },
  //     // { id: "id-2", text: "Learn react Router", completed: false },
  //     // { id: "id-3", text: "Survive Redux", completed: false },
  //   ],
  //   name: "",
  //   tag: "",
  //   filter: "",
  //   showModal:false,
  // };



  // componentDidMount(){
  //   console.log('componentDidMount');

  //   const todos =localStorage.getItem('todos');
  //   const parsedTodos=JSON.parse(todos);

  //   if(parsedTodos){
  //     this.setState({todos:parsedTodos})

  //   }
  // }

  // componentDidUpdate(prevProps,prevState){
  //   console.log('componentDidUpdate');
 
  //   if(this.state.todos!==prevState.todos){
  //     console.log("Обновилось");

  //     localStorage.setItem('todos',JSON.stringify(this.state.todos))
  //   }

  //   if(
  //     this.state.todos.length > prevState.todos.length &&
  //     prevState.todos.lenght !==0
  //   ){
  //     this.toggleModal()
  //   }
  // }

  
  // toggleModal=()=>{
  //   this.setState(({showModal})=>({
  //     showModal:!showModal,
  //   }))
  // }

  // deleteTodos = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  // addTodo = (text) => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState((prevState) => ({
  //     todos: [todo, ...prevState.todos],
  //   }));

  //   // this.toggleModal();
  // };

  // formSubmitHandler = (data) => {
  //   console.log(data);
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // onToggleCompleted = (todoId) => {
  //   // this.setState(prevState=>({
  //   //   todos:prevState.todos.map(todo=>{
  //   //     if(todo.id===todoId){
  //   //       console.log('Found');
  //   //       return {
  //   //         ...todo,
  //   //         completed:!todo.completed,
  //   //       }
  //   //     }
  //   //     return todo;
  //   //   })
  //   // }))

  //   this.setState((prevState) => ({
  //     todos: prevState.todos.map((todo) =>
  //       todo.id === todoId
  //         ? {
  //             ...todo,
  //             completed: !todo.completed,
  //           }
  //         : todo
  //     ),
  //   }));
  // };

  // getVisibleTodos=()=>{
  //   const {filter,todos}=this.state;

  //   const normalizedFiler=filter.toLowerCase();

  //   return todos.filter(todo=>
  //     todo.text.toLowerCase().includes(normalizedFiler),
  //     )
  // }

  // calculateCompletedTodos =()=>{
  //   const {todos}=this.state;

  //   return todos.reduce(
  //     (total,todo)=>(todo.completed ?total +1 :total),0
  //   )
  // }


  render() {
    // console.log('render');
    // const completedTodos = this.calculateCompletedTodos();

    // const visibleTodos = this.getVisibleTodos();

    return (
      <>
      {/* <Counter initialValue={9} /> */}
      {/* <HookCounter/> */}
      {/* <ColorPicker options={colorPicker}/> */}
      <Form onSubmit={(cred)=>console.log(cred)}/>
      <TodosView/>
      {/* {this.state.showModal && <Clock/>}
      <button type='button' onClick={this.toggleModal}>Open timer</button> */}
{/* <Tabs items={items} /> */}

{/* <IconButton type='button' onClick={this.toggleModal}>Open Modal Reused button</IconButton>
      <button type='button' onClick={this.toggleModal}>Open modal</button> */}

      {/* {this.state.showModal && (
       <Modal onClose={this.toggleModal}> */}
        {/* <h1>Context Modal-children</h1>
        <p>Lorem fdfgdfgdgdgdgdgsdfhdfhsdfhshsfghfghsfghsfghsfhgfsdghs</p> */}
        {/* <button type="button" onClick={this.toggleModal}>Close</button>
        <TodoEditor onSubmit={this.addTodo} />
        </Modal>)} */}
      
      
        {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}

        {/* <h1>Component state</h1> */}
        {/* <Counter  initialValue={50}/> */}
        {/* <DropDown/> */}
        {/* <ColorPicker options={colorPicker}/> */}
        {/* <CounterwithRedux/> */}


          {/* <div>
          <p>Total amount : {this.state.todos.length}</p>
          <p>Completed amount : {completedTodos}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodos}
          onToggleCompleted={this.onToggleCompleted}
        />
        <Form onSubmit={this.formSubmitHandler} />   */}
      </>
    );
  }
}




export default App;
