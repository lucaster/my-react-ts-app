import { Todo } from '../models/todo';
import classes from './TodoComponent.module.css';

const TodoComponent: React.FC<TodoProps> = (props) => {
  const item = props.item;
  const onTodoClick = (event: React.MouseEvent) => {
    props.onTodoClick(item);
  };
  return (
    <span
      className={classes.todo}
      onClick={onTodoClick}
    >
      ({item.id}) {item.text}
    </span>
  );
};

interface TodoProps {
  readonly item: Todo;
  onTodoClick(removee: Todo): void;
}

export default TodoComponent;
