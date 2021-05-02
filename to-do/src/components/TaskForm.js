import React from 'react';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

class TaskForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: '', taskList: []};
      //should implement dictionaries rather than plain lists for this ( to delete per id rather than per content)
     
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    

    handleSubmit(event) {
        this.state.taskList.push(this.state.value)
        this.setState({value: this.state.value = ''})
      event.preventDefault();
    }
  

    render() {
      return (
        <div class='form-group'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tarea:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Agregar" />
        </form>

        <br/>
        <div>
        <ul>
        
        {this.state.taskList.map(item => (
          <Task>{item} <span></span><button onClick={() => this.setState({taskList: this.state.taskList.filter(val => val != item)})}>delete</button></Task>
        ))}
        </ul>
        </div>
        <button onClick={()=>{}}>Save</button>
        </div>
      );
    }
  }
export default TaskForm