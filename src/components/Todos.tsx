const Todos: React.FC<TodosProps> = (props) => {
  return (
    <div>
      <h1>hi</h1>
      <ul>
        {props.items.map((item, i) => (
          <li key={i}>
            {item} {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

interface TodosProps {
  readonly items: string[];
  // readonly children: any;
}
