import { Component, useRef, useState } from "react";

interface Props {
  onSubmit:(cred:{email:string;password:string})=>void;
}
export default function Form ({onSubmit}:Props){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

const formRef=useRef(null);
  // const formRef=useRef<HTMLFormElement | null>;не працює


const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.currentTarget;
  switch(name){
    case 'email':
      setEmail(value);
      break;

    case 'password':
     setPassword(value);
     break;

     default:
  console.warn(`Unknown ${name}`);
  }}

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({email,password })
  }
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        Name
        <input 
        name="email" 
        type="mail" 
        onChange={onChange} 
        value={email}></input>
      </label>
      <label>
        Name
        <input 
        name="password" 
        type="password" 
        onChange={onChange} 
        value={password}></input>
      </label>
      <button type='submit'>Log in</button>
      {/* <label>
        Nickname
        <input 
        type="text" 
        name="tag" 
        onChange={onChange} 
        value={this.state.tag}></input>
      </label> */}
      

      {/* <p>Your level :</p>
      <label><input type='radio' name='experience' value='junior' onChange={onChange} checked={this.state.experience==='junior'}></input></label>
      <label><input type='radio' name='experience' value='middle' onChange={onChange} checked={this.state.experience==='middle'}></input></label>
      <label><input type='radio' name='experience' value='senior' onChange={onChange} checked={this.state.experience==='senior'}></input></label>
     */}
    {/* <label><input
    type='checkbox'
    name='licence'
    checked={this.state.licence}
    onChange={this.handleLicenceChange}
    />Agreed</label>
    <button type="submit" disabled={!this.state.licence}>Send</button> */}
    </form>
  );
}


