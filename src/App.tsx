import './App.css';
import NewTodoComponent from './components/NewTodoComponent';
import TodosComponent from './components/TodosComponent';
import ServicesContextProvider from './store/services-context';
import TodosContextProviderComponent from './store/todos-context';

function App() {
  return (
    <ServicesContextProvider>
      <TodosContextProviderComponent>
        <NewTodoComponent />
        <TodosComponent />
      </TodosContextProviderComponent>
    </ServicesContextProvider>
  );
}

export default App;
