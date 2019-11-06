import React, { Component } from 'react'
import TaskItem from './TaskItem'

export class Tasks extends Component {
     markCompleted = () => {
        console.log('Tô no Tasks')
    }

  render() {
    const taskItems = this.props.tarefas.map(task => (
      <TaskItem key={task.id} tarefa={task} markCompleted={this.props.markCompleted}/>
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
