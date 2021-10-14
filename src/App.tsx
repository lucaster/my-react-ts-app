import './App.css';
import Todos from './components/Todos';
import { Todo } from './models/todo';

function App() {
  const items: Todo[] = [
    {
      id: '1',
      text: 'a',
    },
    {
      id: '2',
      text: 'b',
    },
  ];

  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
