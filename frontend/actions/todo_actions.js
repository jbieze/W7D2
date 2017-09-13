export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TODO_ERROR = "TODO_ERROR";
import * as TodoAPIUtil from '../util/todo_api_util.js';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
});

export const requestTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  TodoAPIUtil.postTodo(todo).then(tod => dispatch(receiveTodo(tod)) )
);

//
// import { requestTodos } from './todo_actions';
//
// const mapDispatchToProps = dispatch => ({
//   requestTodos: () => dispatch(requestTodos())
// })
// this.props.requestTodos();
//






//
