var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TasksConstants = require('../constants/TasksConstants');
var assign = require('object-assign');

var _tasks = {};

function destroy(id) {
  delete _tasks[id];
}

function create(text) {
  var id = Date.now();
  _tasks[id] = {
    id: id,
    text: text
  };
}

function update(id, text) {
  _tasks[id]['text'] = text;
}

var TasksStore = assign({}, EventEmitter.prototype, {
  getTasks: function() {
    return _tasks;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case TasksConstants.DESTROY_TASK:
      destroy(payload.id);
      break;
    case TasksConstants.CREATE_TASK:
      create(payload.text);
      break;
    case TasksConstants.UPDATE_TASK:
      update(payload.id, payload.text);
      break;
    default:
      return true;
  }
  TasksStore.emitChange();

  return true;
});

module.exports = TasksStore;