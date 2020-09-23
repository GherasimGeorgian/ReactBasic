import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
class App extends Component {
  render() {
    return(
    <div className="App">
      <EventBind/>
   {/*   <FunctionClick/>
     <ClassClick/> */}
   {/*   <Counter /> */}
    {/*  <Message /> */}
     {/*    <Greet name="Bruce" heroName="BatMna">
          <p>This is childern prop</p>
        </Greet> */}
    {/*     <Greet name="Anais" heroName="SuperAird">
          <button>Action</button>
        </Greet> */}
     {/*    <Greet name="George" heroName="WomanSupermna"/>
     
     <Welcome name="Bruce" heroName="BatMna"/> */}
    {/*  <Welcome name="Anais" heroName="SuperAird"/> */}
    {/*  <Welcome name="George" heroName="WomanSupermna"/> */}
    {/*  <Hello /> */}
    </div>
    );
  }
}

export default App;
