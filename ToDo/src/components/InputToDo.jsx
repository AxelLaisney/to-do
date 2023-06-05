import React from 'react'
import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { useTodosStore } from '@/store';

const InputToDo = () => {
  const AddTodo = useTodosStore((state) => state.addTodo);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()) {
      AddTodo(title);
      setTitle('');
      setMessage('');
    } else{
      setMessage('Please add an item')
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form-container'> 
        <input type="text" placeholder="Add todo..." value={title} onChange={handleChange} className='input-text' />
        <button className='input-submit'>
          <FaPlusCircle/>
        </button>
      </form>
      <span className='submit-warning'>{message}</span>
    </>
  );
};

export default InputToDo