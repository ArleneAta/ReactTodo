import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
                    // if(this.props.todo.completed) {
                    //     return {
                    //         textDecoration: 'line-through'
                    //     }
                    // } else {
                    //     return {
                    //         textDecoration: 'none'
                    //     }
                    // }
                    // ----instead of all this code we can use a turn 

        return {
            textDecoration: this.props.todo.completed ? 'line-through': 'none',

            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'

        }

        // function for event checkbox



    }

    // markComplete=(e) => {
    //     console.log(this.props)
    // } ------this is a custom method that would not have access to 'this'  the other ones could because they are part of the component

    render() {

        const { id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
               
                <p> 
                     {/* put a checkbox */}

                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />

                        {/* can either bind (<input type="checkbox" onChange={this.markComplete.bind(this)} />{' '}))
                    with event " markComplete(e) {console.log(this.props)}'or 
                    use a arrow function instead */}

                    {title} 

                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
                        x
                    </button>
                </p>
               
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    
}

//This is an example of using a variable instead of this.
const btnStyle = {
    background: '#ff0000',
    color: 'fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
