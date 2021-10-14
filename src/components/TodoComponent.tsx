import { Todo } from '../models/todo';

const TodoComponent: React.FC<TodoProps> = (props) => {
  const item = props.item;
  return (
    <span>
      ({item.id}) {item.text}
    </span>
  );
};

interface TodoProps {
  readonly item: Todo;
}

export default TodoComponent;
