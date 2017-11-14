import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(event) {
    this.setState ({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state.input);
    this.setState({ input: ""});
  }

  render () {
    return (
      <div>

        <h2>New Todo Item</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.updateTodo}
            value={this.state.input}>

          </input>
          <button>Add item</button>
        </form>

      </div>
    );
  }
}


export default TodoForm;
