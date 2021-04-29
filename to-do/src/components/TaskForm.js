import React from 'react';
import Task from './Task';

class TaskForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: '', taskList: ['Sacar basura', 'hacer compras', 'pasear perro']};
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
        <div>
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
          <Task>{item}<button onClick={() => this.setState({taskList: this.state.taskList.filter(val => val != item)})}>delete</button></Task>
        ))}
        </ul>
        </div>
        </div>
      );
    }
  }
export default TaskForm