var React = require('react');
var Task = require('./Task');

var TaskList = React.createClass({
  propTypes: {
    allTasks: React.PropTypes.object.isRequired
  },

  render: function() {
    var allTasks = this.props.allTasks;
    var tasks = [];

    if (Object.keys(this.props.allTasks).length < 1) {
      return null;
    }

    for (var key in allTasks) {
      tasks.push(<Task key={key} task={allTasks[key]} />);
    }

    return (
      <table className="tasks-table">
	<tbody>
          { tasks }
        </tbody>
      </table>
    );
  },
});

module.exports = TaskList;