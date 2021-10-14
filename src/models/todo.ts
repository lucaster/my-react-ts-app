export interface TodosProps {
  readonly items: Todo[];
}

export interface Todo {
  readonly id: string;
  readonly text: string;
}