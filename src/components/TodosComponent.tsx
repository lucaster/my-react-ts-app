import { Todo } from '../models/todo';
import TodoComponent from './TodoComponent';
import classes from './TodosComponent.module.css';

const TodosComponent: React.FC<TodosProps> = (props) => {
  return (
    <div>
      <h1>hi</h1>
      <ul className={classes.todos}>
        {props.items.map((item, i) => (
          <li
            key={item.id}
          >
            <TodoComponent
              item={item}
              onTodoClick={props.onTodoClick.bind(null, item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

interface TodosProps {
  readonly items: Todo[];
  onTodoClick(removee: Todo): void;
}

export default TodosComponent;
