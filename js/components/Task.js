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
        <tr className="task-row">
          <td>{task.text}</td>
          <td className="action-col"><button onClick={this._onEditClick}><i className="fa fa-edit"/></button></td>
          <td className="action-col"><button onClick={this._onDestroyClick}><i className="fa fa-times"/></button></td>
        </tr>
      );
    } else {
      rowValue = (
        <tr>
          <td colSpan="3"><TaskInput mode={TasksConstants.EDIT_MODE} text={task.text} id={task.id} updateHandler={this._updateHandler} /></td>
        </tr>
      );
    }
    return rowValue;
  }
});

module.exports = Task;