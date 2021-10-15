import React, { useState } from 'react';
import { Todo } from '../models/todo';

/**
 * The "state", with its data and methods to change it.
 * It is actually a proxy to the TodosContextProviderComponent,
 * which does the real work.
 */
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

/**
 * This "is" the "concrete" "state"
 */
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
