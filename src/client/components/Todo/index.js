import React, { PropTypes } from 'react';
import styled from 'styled-components';

import CreateTodoForm from '../CreateTodoForm';
import TodoEl from '../TodoEl';

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const drawTodos = (tasks, actions) => tasks.map((el, key) =>
  <TodoEl key={key}>{el.title}</TodoEl>
);

const TodoContainer = ({ store, actions }) =>
  <div>
    <CreateTodoForm />
    <TodoList>
      {drawTodos(store.state, actions)}
    </TodoList>
  </div>
;

Todo.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoContainer;
