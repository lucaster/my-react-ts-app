import { Todo } from '../models/todo';
import classes from './TodoComponent.module.css';

const TodoComponent: React.FC<TodoProps> = (props) => {
  const todo = props.todo;
  const onTodoClick = (event: React.MouseEvent) => {
    props.onTodoClick(todo);
  };
  return (
    <span
      className={classes.todo}
      onClick={onTodoClick}
    >
      ({todo.id}) {todo.text}
    </span>
  );
};

interface TodoProps {
  readonly todo: Todo;
  onTodoClick(removee: Todo): void;
}

export default TodoComponent;
