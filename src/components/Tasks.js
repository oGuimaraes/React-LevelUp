import React, { Component } from 'react'

export class Tasks extends Component {
    
    render() {
        console.log(this.props)
        const taskList = this.props.tarefas.map(arrayItem => (
            <div key={arrayItem.id}>
                <input type="checkbox"></input>
                <span>{arrayItem.id }. { arrayItem.title }</span>
                <br/>
            </div>
        )        
        )
        return (
            <div>
                <h2>Minhas Tarefas</h2>
                <div className="content-task">{taskList}</div>
            </div>
        )
    }

}

export default Tasks
