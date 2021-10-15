import { useContext, useRef } from 'react';
import { Todo } from "../models/todo";
import { ServicesContext } from '../store/services-context';
import { TodosContext } from "../store/todos-context";
import classes from './NewTodoComponent.module.css';

const NewTodoComponent: React.FC = () => {

  const services = useContext(ServicesContext);

  const todosContext = useContext(TodosContext);

  const asd = services.translateService('translate me!');

  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = textInputRef.current!.value;
    if (!text || !text.trim()) {
      // err
      return;
    }
    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      text: text
    };
    todosContext.addTodo(newTodo);
  };

  return (
    <form onSubmit={onSubmit} className={classes.newTodo}>
      <h2>NewTodo: {asd}</h2>
      <fieldset>
        <legend>New Todo data</legend>
        <label>Text</label>
        <input
          name="text"
          ref={textInputRef}
        />
        <button>Add Todo</button>
      </fieldset>
    </form>
  );
};

export default NewTodoComponent;
