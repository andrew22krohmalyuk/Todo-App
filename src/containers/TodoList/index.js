import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import { deleteTodo } from '../../action';

class TodoList extends Component {
  render() {
    let { todos } = this.props;

    return (
      <div className="app-list">
        {todos.map(i =>
        <TodoItem text={i.text} id={i.id} key={i.id} onDelete={this.props.onDeleteTodo} />)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    }
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
