import React, {Component} from 'react';
import Todos from './Components/Todos';


import './App.css';

class App extends Component{
state = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      compoleted: false
    },
    {
      id: 2,
      title: '2nd state',
      compoleted: false
    },
    {
      id: 3,
      title: '3rd state',
      compoleted: false
    }
  ]
}

  render(){
   //  console.log(this.state.todos)
    //we are taking the todos and passing the state as a prop
    return (
      <div className="App">
        <Todos todos={this.state.todos} /> 
       
      </div>
    );
  }
}
  


export default App;
