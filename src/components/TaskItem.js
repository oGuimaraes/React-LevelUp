import React, { Component } from 'react'

export class TaskItem extends Component {
    render() {
        return (
                <div>{ this.props.tarefas }</div>
        )
    }
}

export default TaskItem
