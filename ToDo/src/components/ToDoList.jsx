import React from 'react'
import ToDoItem  from '@/components/ToDoItem';
import { useTodosStore } from '@/store';

const ToDoList = () => {

  const todos = useTodosStore((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

export default ToDoList