var React = require('react');
var TasksStore = require('../stores/TasksStore');
var TasksList = require('./TasksList');
var TaskInput = require('./TaskInput');
var TasksConstants = require('../constants/TasksConstants');

function getTasksState() {
  return {
    tasks: TasksStore.getTasks()
  };
}

var TaskManager = React.createClass({

  getInitialState: function() {
    return getTasksState();
  },

  componentDidMount: function() {
    TasksStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TasksStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <TasksList allTasks={this.state.tasks} />
        <TaskInput mode={TasksConstants.NEW_MODE} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getTasksState());
  }

});

module.exports = TaskManager;