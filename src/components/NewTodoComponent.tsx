import React, { useRef } from "react";
import { Todo } from "../models/todo";

const NewTodoComponent: React.FC<NewTodoProps> = (props: NewTodoProps) => {

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
    props.onAddTodo(newTodo);
  };

  return (
    <form onSubmit={onSubmit}>
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

interface NewTodoProps {
  onAddTodo(newTodo: Todo): void;
}

export default NewTodoComponent;
