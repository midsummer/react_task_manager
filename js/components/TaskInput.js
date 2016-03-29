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
    }
  },

 _onChange: function(event) {
    this.setState({
      text: event.target.value
    });
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.text} />
      </div>
    );
  }
});

module.exports = TaskInput;

