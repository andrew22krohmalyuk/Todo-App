import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../action';

class InputTodo extends Component {
  render() {
    const Add = () => {
        this.props.addTodo(this.textInput.value);
        this.textInput.value = '';
    }

    return (
      <div className="app-form">
        <input
            type="text"
            className="app-form-input"
            ref={(input) => this.textInput = input}/>
        <button
        className="app-form-button"
            onClick={Add}
        >
        Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(InputTodo);
