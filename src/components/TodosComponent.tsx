import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoComponent from './TodoComponent';
import classes from './TodosComponent.module.css';

const TodosComponent: React.FC = () => {

  const todosContext = useContext(TodosContext);

  return (
    <div>
      <h1>Todos</h1>
      <ul className={classes.todos}>
        {todosContext.todos.map((todo, i) => (
          <li
            key={todo.id}
          >
            <TodoComponent
              todo={todo}
              onTodoClick={todosContext.removeTodo.bind(null, todo)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosComponent;
