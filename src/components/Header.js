import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <h2>Minhas Tarefas</h2>
                <nav className="nav-bar">
                    <Link to='/'>Tarefas</Link>
                    <Link to='/about-me'>Sobre mim</Link>
                </nav>
            </header>
        )
    }
}

export default Header
