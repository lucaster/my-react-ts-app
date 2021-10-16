import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NewTodoComponent from './components/NewTodoComponent';
import TodosComponent from './components/TodosComponent';
import ProductsComponent from './pages/products/ProductsComponent';
import WelcomeComponent from './pages/welcome/WelcomeComponent';
import ServicesContextProviderComponent from './store/services-context';
import TodosContextProviderComponent from './store/todos-context';

function App() {
  return (
    <div>
      <div>
        <h1>Todos</h1>
        <ServicesContextProviderComponent>
          <TodosContextProviderComponent>
            <NewTodoComponent />
            <TodosComponent />
          </TodosContextProviderComponent>
        </ServicesContextProviderComponent>
      </div>
      <hr />
      <div>
        <h1>Routing:</h1>
        <BrowserRouter>
          <Route path="/welcome">
            <WelcomeComponent />
          </Route>
          <Route path="/products">
            <ProductsComponent />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
