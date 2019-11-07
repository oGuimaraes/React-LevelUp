import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    changeInput = (event) => {
        const { target } = event
        this.setState({
            [target.name]: target.value
        })
    }

    clearProp = prop => {
        this.setState({
            [prop]: ''
        })
    }

    render() {
        const { task } = this.state;
        const { addTask} = this.props;
        return (
            <form onSubmit={e => {e.preventDefault();
                                    addTask(task); 
                                    this.clearProp("task")}}>
                <input className="input" type="text" name="task"value={task}
                    onChange={this.changeInput}
                    placeholder="Nova Tarefa">
                </input>
            </form>
        )
    }
}

export default AddTask
