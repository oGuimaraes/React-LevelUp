import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { thisExpression } from '@babel/types'
import { constants } from 'zlib'

export class TaskItem extends Component {
    setStyle = () => {
       return {
            textDecoration: this.props.tarefa.completed ? 'line-through' : 'none'
       }
    }
    render() {
            const {id, title, completed} = this.props.tarefa;
        return (
            <div>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={ this.props.markCompleted.bind(this, id) }>
                </input>
                <span style={this.setStyle} >{ title }</span>
            </div>
        )
    }
}
TaskItem.propTypes = {
    tarefa: PropTypes.object.isRequired
}

export default TaskItem


