import React, { Component } from 'react'
import TaskItem from './TaskItem'

export class Tasks extends Component {

    removeTask = () => {
        console.log("Teste")
    }


  render() {
    const taskItems = this.props.tarefas.map(task => (
      <TaskItem key={task.id} 
            tarefa={task} 
            removeTask={this.props.removeTask}              
            markCompleted={this.props.markCompleted}/>
    ))

    return (
      <div>
        {taskItems}
      </div>
    )
  }

}

export default Tasks
