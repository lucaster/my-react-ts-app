import './App.css';
import NewTodoComponent from './components/NewTodoComponent';
import TodosComponent from './components/TodosComponent';
import ServicesContextProviderComponent from './store/services-context';
import TodosContextProviderComponent from './store/todos-context';

function App() {
  return (
    <ServicesContextProviderComponent>
      <TodosContextProviderComponent>
        <NewTodoComponent />
        <TodosComponent />
      </TodosContextProviderComponent>
    </ServicesContextProviderComponent>
  );
}

export default App;
