import React, { Component } from 'react'
import TodoList from './components/Todo/TodoList';
import AddTodoList from './components/Todo/AddTodoList';
import styles from './App.module.css'

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                content: 'Buy Slippers for my mom and dad'
            }, 
            {
                id: 2, 
                content: 'Finish tomorrow homeworks'
            }
        ]
    }

    deleteTodoHandler = (id) => {
        //console.log(id);
        const todos = this.state.todos.filter((todo)=> {
            return todo.id !== id
        });
        
        this.setState({
            todos: todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        //console.log(todo);

        let todos = [...this.state.todos, todo];

        this.setState({
            todos: todos
        })

    }

    render() {
        return (
            <div className="TodoApp">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container">
                        <a className="navbar-brand"><b>Todo App</b></a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <h1 className="text-center mt-5 mb-3">Todo App</h1>
                        </div> */}
                        <AddTodoList addTodo={this.addTodo}/>
                        <TodoList todoList={this.state.todos} deleteTodo={this.deleteTodoHandler}/>                    
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;
