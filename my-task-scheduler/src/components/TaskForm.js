import React, { Component } from 'react'

class TaskForm extends Component{

    render() {
        return (
            <div className="card">
                <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible" />
                    </div>
                    <div className="form-group">
                        <textarea  name="description" className="form-control" placeholder="Description" rows="3" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="priority" >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </form>
                </div>
            </div>
        );
    }

}

export default TaskForm;