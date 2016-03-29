var AppDispatcher = require('../dispatcher/AppDispatcher');
var TasksConstants = require('../constants/TasksConstants');

var TasksActions = {
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TasksConstants.CREATE_TASK,
      text: text
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: TasksConstants.DESTROY_TASK,
      id: id
    });
  },

  update: function(id, text) {
    AppDispatcher.dispatch({
      actionType: TasksConstants.UPDATE_TASK,
      id: id,
      text: text
    });
  }
};

module.exports = TasksActions;