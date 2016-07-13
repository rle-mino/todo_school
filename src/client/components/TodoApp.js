import React from 'react';
import _ from 'lodash';
import Title from './Title';
import AddTaskList from './AddTaskList';
import TaskLists from './TaskLists';

let currentListId = 0;
let currentTaskId = 0;

class TodoApp extends React.Component {
  static propTypes = {
    lists: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      lists: props.lists,
      newListTitle: '',
    };
  }

  addTasklist = () => {
    const { lists, newListTitle } = this.state;
    this.setState({
      lists: {
        ...lists,
        [currentListId]: {
          title: newListTitle,
          newTaskText: '',
          tasks: {},
        },
      },
      newListTitle: '',
    });
    currentListId = currentListId + 1;
  }

  addTaskListInput = (value) => {
    this.setState({ newListTitle: value });
  }

  removeTaskList = (listId) => {
    const { lists } = this.state;
    this.setState({
      lists: _.omit(lists, listId),
    });
  }

  addTask = (listId) => {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [listId]: {
          ...lists[listId],
          tasks: {
            ...lists[listId].tasks,
            [currentTaskId]: { text: lists[listId].newTaskText },
          },
          newTaskText: '',
        },
      },
    });
    currentTaskId = currentTaskId + 1;
  }

  addTaskInput = (listId, value) => {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [listId]: {
          ...lists[listId],
          newTaskText: value,
        },
      },
    });
  }

  removeTask = (listId, taskId) => {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [listId]: {
          ...lists[listId],
          tasks: _.omit(lists[listId].tasks, taskId),
        },
      },
    });
  }

  render() {
    return (
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList
          onAddTaskList={this.addTasklist}
          onChange={this.addTaskListInput}
          value={this.state.newListTitle} />
        <TaskLists
          lists={this.state.lists}
          onAddTask={this.addTask}
          onAddTaskInput={this.addTaskInput}
          onRemoveTask={this.removeTask}
          onRemoveTaskList={this.removeTaskList} />
      </div>
    );
  }
}

export default TodoApp;
