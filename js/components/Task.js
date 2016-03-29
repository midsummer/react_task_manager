var React = require('react');
var TasksActions = require('../actions/TasksActions');
var TasksConstants = require('../constants/TasksConstants');
var TaskInput = require('./TaskInput');

var Task = React.createClass({
  getInitialState: function() {
    return {
      mode: TasksConstants.SHOW_MODE
    };
  },

  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  _onDestroyClick: function() {
    TasksActions.destroy(this.props.task.id);
  },

  _onEditClick: function() {
    this.setState({
      mode: TasksConstants.EDIT_MODE
    });
  },

  _updateHandler: function() {
    this.setState({
      mode: TasksConstants.SHOW_MODE
    });
  },

  render: function() {
    var task = this.props.task;
    var rowValue;
    if (this.state.mode === TasksConstants.SHOW_MODE) {
      rowValue = (
        <tr>
          <td>{task.text}</td>
          <td><button className="edit" onClick={this._onEditClick} /></td>
          <td><button className="destroy" onClick={this._onDestroyClick} /></td>
        </tr>
      );
    } else {
      rowValue = (
        <tr>
          <td><TaskInput mode={TasksConstants.EDIT_MODE} text={task.text} id={task.id} updateHandler={this._updateHandler} /></td>
        </tr>
      );
    }
    return rowValue;
  }
});

module.exports = Task;