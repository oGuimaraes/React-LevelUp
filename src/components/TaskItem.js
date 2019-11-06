import React, { Component } from 'react'

export class TaskItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox"></input>
        <span>{this.props.tarefa.title}</span>
        <br/>
      </div>
    )
  }
}

export default TaskItem
