import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add({ ...this.state, id: uuid(), isCompleted: false });
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <div>
          <label>New Todo</label>
          <div>
            <input
              type="text"
              onChange={this.handleChange}
              name="task"
              value={this.state.task}
            ></input>
            <button>Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;
