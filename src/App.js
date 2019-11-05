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
                completed: false
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
    render() {

        return (
            <div className="App">
                <Tasks key="1" tarefas={this.state.tarefas} />
            </div>
        );
    }
}

export default App;
