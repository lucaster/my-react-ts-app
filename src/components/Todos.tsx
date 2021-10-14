import { TodosProps } from "../models/todo";

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <div>
      <h1>hi</h1>
      <ul>
        {props.items.map((item, i) => (
          <li key={item.id}>
            ({item.id}) {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
