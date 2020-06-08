import React, { Component } from 'react'

class AddTodoList extends Component {
    state = {
        content: ''
    }

    addHandler = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {        
        return (
            <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-md-3">
                <form onSubmit={this.submitHandler}>
                    <div className="input-group mt-5 mb-5">
                        <input type="text" className="form-control" placeholder="Your todo list" value={this.state.content} onChange={this.addHandler}/>
                        <div class="input-group-append">
                            <button class="btn btn-dark" type="submit"><b>Add</b></button>  
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodoList;
