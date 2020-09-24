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
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

class App extends Component {
  render() {
    return(
    <div className="App">
      <ParentComp/>
    {/*   <Table/> */}
      {/* <FragmentDemo/> */}
   {/*  <LifeCycleA/> */}
    {/*  <Form/> */}
    {/*   <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      
     {/*  <Inline/> */}
    {/*  <Stylesheet primary={true}/> */}
    {/*   <NameList/> */}
    {/*   <UserGreeting/> */}
    {/*   <ParentComponent/> */}
     {/*  <EventBind/> */}
     {/*  <FunctionClick/> */}
     {/*  <ClassClick/> */}
     {/*  <Counter /> */}
     {/*  <Message /> */}
     {/*   <Greet name="Bruce" heroName="BatMna">
          <p>This is childern prop</p>
      </Greet> */}
     {/*     <Greet name="Anais" heroName="SuperAird">
          <button>Action</button>
        </Greet> */}
     {/*  <Greet name="George" heroName="WomanSupermna"/> */}
     {/*  <Welcome name="Bruce" heroName="BatMna"/> */}
     {/*  <Welcome name="Anais" heroName="SuperAird"/> */}
     {/*  <Welcome name="George" heroName="WomanSupermna"/> */}
     {/*  <Hello /> */}
    </div>
    );
  }
}

export default App;
