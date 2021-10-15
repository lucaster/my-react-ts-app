import './App.css';
import NewTodoComponent from './components/NewTodoComponent';
import TodosComponent from './components/TodosComponent';
import TodosContextProviderComponent from './store/todos-context';

function App() {
  return (
    <TodosContextProviderComponent>
      <NewTodoComponent />
      <TodosComponent />
    </TodosContextProviderComponent>
  );
}

export default App;
