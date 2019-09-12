import React, {Component} from 'react';
import Todos from './Components/Todos';


import './App.css';

class App extends Component{
state = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: '2nd state',
      completed: true
    },
    {
      id: 3,
      title: '3rd state',
      completed: false
    }
  ]
}

//toggle complete
  markComplete = (id) => {
    //console.log('from app.js')
    this.setState({ todos:this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed =!todo.completed;
      } 
      return todo;
    })
  });
  };

//Delete Todo
  delTodo = (id)=> {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
  
  }
  render(){
   //  console.log(this.state.todos)
    //we are taking the todos and passing the state as a prop
    return (
      <div className="App">
        <Todos todos={this.state.todos} 
              markComplete={this.markComplete} 
              delTodo={this.delTodo}/> 
       
      </div>
    );
  }
}
  


export default App;
