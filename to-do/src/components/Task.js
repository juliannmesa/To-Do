import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: false
    };
  }

  updateReview = () => {
    this.setState({ selected: !this.state.selected });
    this.setState({ textDecorationLine: "line-through" });
  };

  render() {
    return (
      <li class="task">
        <div
          style={this.state.selected ? {textDecorationLine: "line-through"} : {textDecorationLine: ""}}
          onClick={() => this.updateReview()}
        >
          {this.props.children}
        </div>
      </li>
    );
  }
}
export default Task