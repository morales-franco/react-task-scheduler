import React, { Component } from 'react'
import logo from './../logo.svg'

class Navigation extends Component{

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src={ logo } className = "App-logo d-inline-block align-top" alt="logo" />
                        { this.props.title }
                        <span className="badge badge-pill badge-light ml-2">
                        { this.props.tasksCount }
                        </span>
                    </a>
                </nav>
            </div>
        );
    }

}

export default Navigation;