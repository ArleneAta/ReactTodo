import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from './Components/Todos';
import Header from './Components/layout/Header';
import AddTodo  from './Components/AddTodo';
import About from './Components/pages/About.js';
import uuid  from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component{
    state = {
        todos: [
    // {
    //   id: uuid.v4(),
    //   title: 'Take out the trash',
    //   completed: false
    // },
    // {
    //   id: uuid.v4(),
    //   title: '2nd state',
    //   completed: true
    // },
    // {
    //   id:uuid.v4(),
    //   title: '3rd state',
    //   completed: false
    // }
  ]
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState( {todos : res.data} ))
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

//Delete Todo (no props bc done in this state)
  delTodo = (id)=> {

    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res =>  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    
  
  }

//add todo
  AddTodo = (title)=> {
    // const newTodo = {
    //   id:uuid.v4(),
    //   title,
    //   completed:false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {title,
    completed: false
  })

    .then(res=> this.setState({ todos: [...this.state.todos, res.data]}))
  }


  render(){
   //  console.log(this.state.todos)
    //we are taking the todos and passing the state as a prop
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path = "/" render={props=> (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo}/>
                  <Todos todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}/> 
                </React.Fragment>
            )} /> 
            <Route path="/about" Component={About} />

           
          </div>
          
        
        </div>
      </Router>
    );
  }
}
  


export default App;
