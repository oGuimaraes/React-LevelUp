import React, { Component } from 'react'
import TaskItem from './TaskItem'

export class Tasks extends Component {
  
  render() {
    const taskItems = this.props.tarefas.map(task => (
      <TaskItem key={task.id} className="Teste" tarefa={task} />
    ))

    return (
      <div>
        <h2>Minhas Tarefas</h2>
        {taskItems}
      </div>
    )
  }

}

export default Tasks
