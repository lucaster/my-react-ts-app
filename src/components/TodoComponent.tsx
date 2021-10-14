import { Todo } from '../models/todo';
import classes from './TodoComponent.module.css';

const TodoComponent: React.FC<TodoProps> = (props) => {
  const item = props.item;
  return (
    <span className={classes.todo}>
      ({item.id}) {item.text}
    </span>
  );
};

interface TodoProps {
  readonly item: Todo;
}

export default TodoComponent;
