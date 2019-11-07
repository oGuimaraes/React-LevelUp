import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { thisExpression } from '@babel/types'

export class TaskItem extends Component {
    setStyle = () => {
       return {
          textDecoration: this.props.tarefa.completed ? 'line-through' : 'none',
          color: this.props.tarefa.completed ? '#f9afaf' : 'black'

       }
    }

    btnStyle = () => {
        return {
            border: 'none',
            borderRadius: '10px',
            margin: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            color: 'white',
            backgroundColor: '#66c0cc',
            fontWeight: 700,
            
        }
    }

    render() {
            const {id, title, completed} = this.props.tarefa;
        return (
            <div className="line">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={ this.props.markCompleted.bind(this, id) }>
                </input>
                <span style={this.setStyle()} >{ title }</span>
                <button style={this.btnStyle()} 
                        onClick={this.props.removeTask.bind(this, id)}
                        > x </button>
            </div>
        )
    }
}
TaskItem.propTypes = {
    tarefa: PropTypes.object.isRequired
}

export default TaskItem






