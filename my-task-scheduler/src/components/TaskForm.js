import React, { Component } from 'react'

class TaskForm extends Component{

    constructor(){
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        }

        /**
         * When we call a Event from render function usually this eventFunction lose 
         * the scope. In other words, the eventFunction doesnt know "this"
         * Here, We attach "this" with the event function 
         */
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChangeValue(e){
        // console.log(e.target.value, e.target.name);
        
        const { value, name } = e.target;

        this.setState({
            [name] : value
        });

        
    }

    onSave(e){
        e.preventDefault();

        if( this.state.title.trim() === "" ||
        this.state.responsible.trim() === "" ||
        this.state.description.trim() === ""){
            alert("You must complete all fields");
            return;
        }
        
        console.log("Sending data...");
        console.log(this.state);

        this.props.onAddTask(this.state);

        this.setState = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.onChangeValue}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange={this.onChangeValue}/>
                        </div>
                        <div className="form-group">
                            <textarea  name="description" className="form-control" placeholder="Description" rows="3" onChange={this.onChangeValue}/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="priority" onChange={this.onChangeValue}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default TaskForm;