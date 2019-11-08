import React, {Component} from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header'
import About from './components/Pages/About'
import uuid from 'uuid'
import {BrowserRouter} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
    //this.counter = this.state.tarefas.length
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

    addTask = title => {
        const { tarefas } = this.state;

        this.setState({
            tarefas: [
                ...tarefas,
                {
                    id: uuid.v4(),
                    //id: ++this.counter,
                    title,
                    completed: false
                }
            ]
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="Container">
                        <Header></Header>

                        <Route exact path='/' render={(props) => (
                            <React.Fragment>
                                <AddTask addTask={this.addTask}/>
                                <Tasks  tarefas={this.state.tarefas}
                                        markCompleted={this.markCompleted}
                                        removeTask={this.removeTask} />
                            </React.Fragment>
                        )}/>
                        <Route exact path='/about-me' component={About}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
