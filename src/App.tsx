import React from 'react';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
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
          <header>
            <nav>
              <a href="welcome">anchor to welcome</a> <br />
              <a href="products">anchor to products</a> <br />
              <a href="/welcome">anchor to /welcome</a> <br />
              <a href="/products">anchor to /products</a> <br />
              <Link to="welcome">Link to welcome</Link> <br />
              <Link to="products">Link to products</Link> <br />
              <Link to="/welcome">Link to /welcome</Link> <br />
              <Link to="/products">Link to /products</Link> <br />
              <NavLink to="welcome" activeClassName={'active'}>NavLink to welcome</NavLink> <br />
              <NavLink to="products" activeClassName={'active'}>NavLink to products</NavLink> <br />
              <NavLink to="/welcome" activeClassName={'active'}>NavLink to /welcome</NavLink> <br />
              <NavLink to="/products" activeClassName={'active'}>NavLink to /products</NavLink> <br />
            </nav>
          </header>
          <main>
            <Route path="/welcome">
              <WelcomeComponent />
            </Route>
            <Route path="/products">
              <ProductsComponent />
            </Route>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
