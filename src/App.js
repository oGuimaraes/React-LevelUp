import React, {Component} from 'react';
import './App.css';
import Tasks from './components/Tasks';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        tarefas: [
            {
                id: 1,
                title: 'Estudar para a prova de Redes',
                completed: true
            },
            {
                id: 2,
                title: 'Ir à Academia',
                completed: false
            },
            {
                id: 3,
                title: 'Andar de Bicicleta',
                completed: false
            },
            {
                id: 4,
                title: 'Passear com o dog',
                completed: false
            }
        ]
    }
  } 

    markCompleted = (id) => {
        this.setState({
            tarefas: this.state.tarefas.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                console.log(task)
                return task;
            })
        })
    }

    removeTask = (id) => {
        const { tarefas } = this.state;
        this.setState({
            tarefas: tarefas.filter(task => task.id !== id)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="Container">
                    <Tasks tarefas={this.state.tarefas}                                                 markCompleted={this.markCompleted}
                    removeTask={this.removeTask} />
                </div>
            </div>
        );
    }
}

export default App;
