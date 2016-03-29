var React = require('react');
var TasksActions = require('../actions/TasksActions');
var TasksConstants = require('../constants/TasksConstants');

var TaskInput = React.createClass({

  propTypes: {
    id: React.PropTypes.number,
    text: React.PropTypes.string,
    mode: React.PropTypes.string,
    updateHandler: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      text: this.props.text || ''
    };
  },

  _save: function() {
    switch (this.props.mode) {
      case TasksConstants.EDIT_MODE:
        TasksActions.update(this.props.id, this.state.text);
        this.props.updateHandler();
        break;

      case TasksConstants.NEW_MODE:
        TasksActions.create(this.state.text);
        this.setState({
          text: ''
        });
        break;
    }
  },

  _onKeyDown: function(event) {
    if (event.keyCode === 13) {
      this._save();
    } else if (event.keyCode == 27 && this.props.mode === TasksConstants.EDIT_MODE) {
      this.props.updateHandler();
    }
  },

 _onChange: function(event) {
    this.setState({
      text: event.target.value
    });
  },

  render: function() {
    var placeholder = this.props.mode === TasksConstants.EDIT_MODE ? 'Edit your task...' : 'New task'
    return (
      <div>
        <input 
          autoFocus 
          type="text" 
          placeholder={placeholder}
          className="task-input" 
          onChange={this._onChange} 
          onKeyDown={this._onKeyDown} 
          value={this.state.text} 
        />
      </div>
    );
  }
});

module.exports = TaskInput;

