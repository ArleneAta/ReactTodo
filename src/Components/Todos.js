import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component{

    // markComplete = () => {
    //     console.log('hello')
    // }

  render(){
     // console.log(this.props.todos);


    return this.props.todos.map((todo) => (
        //this takes the props and maps through each (like foreach)
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo = {this.props.delTodo}/>
    ));
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    
}


export default Todos;
