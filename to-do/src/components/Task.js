import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: false
    };
  }

  updateReview = () => {
    this.setState({ selected: !this.state.selected });
    //this.setState({ textDecorationLine: "line-through" });
  };

  render() {
    return (
      <li class="task"
          style={this.state.selected ? {textDecorationLine: "line-through"} : {textDecorationLine: ""}} //add as much behaviour as you want
          onClick={() => this.updateReview()}>
          {this.props.children}
      </li>
    );
  }
}
export default Task