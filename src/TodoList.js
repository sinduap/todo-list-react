import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.completed = this.completed.bind(this);
  }

  remove(id) {
    this.setState((st) => ({
      todos: st.todos.filter((todo) => todo.id !== id),
    }));
  }

  add(task) {
    this.setState((st) => ({
      todos: [...st.todos, task],
    }));
  }

  edit(id, editedTask) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  completed(id, isCompleted) {
    this.setState((st) => ({
      todos: st.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !isCompleted };
        } else {
          return todo;
        }
      }),
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App</p>
        <hr />
        <ul>
          {this.state.todos.map(({ task, id, isCompleted }) => (
            <Todo
              isCompleted={isCompleted}
              key={id}
              id={id}
              task={task}
              remove={this.remove}
              edit={this.edit}
              completed={this.completed}
            />
          ))}
        </ul>
        <NewTodoForm add={this.add} />
      </div>
    );
  }
}

export default TodoList;
