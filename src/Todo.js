import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toogleEdit = this.toogleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.completed = this.completed.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }

  toogleEdit() {
    this.setState((curr) => ({
      isEditing: !curr.isEditing,
    }));
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.edit(this.props.id, this.state.task);
    this.toogleEdit();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  completed() {
    this.props.completed(this.props.id, this.props.isCompleted);
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleEdit}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            ></input>
            <button>
              <i class="fas fa-save fa-2x"></i>
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="Todo">
          <li
            className={
              this.props.isCompleted ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.completed}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toogleEdit}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Todo;
