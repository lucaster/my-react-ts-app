import React, { useState } from 'react';
import { Todo } from '../models/todo';

export const TodosContext = React.createContext<TodosState>({
  todos: [],
  addTodo: (newTodo: Todo) => {},
  removeTodo: (removee: Todo) => {},
});

interface TodosState {
  readonly todos: Todo[];
  addTodo(newTodo: Todo): void;
  removeTodo(removee: Todo): void;
}

const TodosContextProviderComponent: React.FC = (props) => {

  const initialState: Todo[] = [];

  const [todos, setTodos] = useState(initialState);

  const addTodo = (newTodo: Todo) => {
    setTodos((curr) => {
      return [...curr, newTodo];
    });
  };

  const removeTodo = (removee: Todo) => {
    setTodos((curr) => {
      return curr.filter((x) => x !== removee);
    });
  };

  const contextValue: TodosState = {
    todos,
    addTodo,
    removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProviderComponent;
