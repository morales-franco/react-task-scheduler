import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import TaskForm from './components/TaskForm'
import { tasks } from './tasks.json'

class App extends Component {

    constructor(){
        //Super() is necessary if I use a constructor
        super();

        this.state = {
            tasks: tasks
        };
    }

    render() {
        console.log("Before render App component");
        console.log(this.state.tasks);

        const tasks = this.state.tasks.map((task, i) => {
                            return (
                                <div className="col-md-4">
                                    <div className="card text-center">
                                        <div className="card-header">
                                            <h3>{ task.title }</h3>
                                            <span className="badge badge-pill badge-danger ml-2">
                                                { task.priority }
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{ task.responsible }</h5>
                                            <p class="card-text">{ task.description }</p>
                                        </div>
                                        <div class="card-footer text-muted">
                                            <a href="#" class="btn btn-dark">Done</a>
                                        </div>
                                    </div>
                                </div>)
                        });


        //Code Xjs
        return (
            <div className = "App" >
                <Navigation title="Task Scheduler" tasksCount={ this.state.tasks.length } />
                
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <TaskForm/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                { tasks }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;