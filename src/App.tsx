import { useState } from 'react';
import './App.css';
import NewTodoComponent from './components/NewTodoComponent';
import TodosComponent from './components/TodosComponent';
import { Todo } from './models/todo';

function App() {
  const initialState: Todo[] = [];

  const [todos, setTodos] = useState(initialState);

  const onAddTodo = (newTodo: Todo) => {
    setTodos((curr) => {
      return [...curr, newTodo];
    });
  };

  const onRemoveTodo = (removee: Todo) => {
    setTodos((curr) => {
      return curr.filter(x => x !== removee);
    });
  };

  return (
    <div>
      <NewTodoComponent
        onAddTodo={onAddTodo}
      />
      <TodosComponent
        items={todos}
        onTodoClick={onRemoveTodo}
      />
    </div>
  );
}

export default App;
