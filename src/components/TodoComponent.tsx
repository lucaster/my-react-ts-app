import { useContext } from 'react';
import { Todo } from '../models/todo';
import { ServicesContext } from '../store/services-context';
import classes from './TodoComponent.module.css';

const TodoComponent: React.FC<TodoProps> = (props) => {

  const services = useContext(ServicesContext);

  const asd = services.translateService('translate me!');

  const todo = props.todo;
  const onTodoClick = (event: React.MouseEvent) => {
    props.onTodoClick(todo);
  };
  return (
    <span
      className={classes.todo}
      onClick={onTodoClick}
    >
      Todo: {asd} ({todo.id}) {todo.text}
    </span>
  );
};

interface TodoProps {
  readonly todo: Todo;
  onTodoClick(removee: Todo): void;
}

export default TodoComponent;
