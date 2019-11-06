import React, { Component } from 'react'
import TaskItem from './TaskItem'

export class Tasks extends Component {
    
    render() {
        console.log(this.props.tarefas)
        const taskList = this.props.tarefas.map(arrayItem => (
            <div key={arrayItem.id}>
                <input type="checkbox"></input>
                <span>{arrayItem.title}</span>
                <br/>
            </div>
        )        
        )
        return (
            <div>
                <h2>Minhas Tarefas</h2>
                <TaskItem className="Teste" tarefas={taskList}/>
            </div>
        )
    }

}

export default Tasks
