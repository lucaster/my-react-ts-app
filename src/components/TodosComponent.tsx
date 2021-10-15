import { useContext } from 'react';
import { ServicesContext } from '../store/services-context';
import { TodosContext } from '../store/todos-context';
import TodoComponent from './TodoComponent';
import classes from './TodosComponent.module.css';

const TodosComponent: React.FC = () => {

  const services = useContext(ServicesContext);

  const todosContext = useContext(TodosContext);

  const asd = services.translateService('translate me!');

  return (
    <div>
      <h1>Todos: {asd}</h1>
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
