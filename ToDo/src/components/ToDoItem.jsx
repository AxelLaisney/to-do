import React from 'react';
import styles from "@/styles/ToDoItem.module.css";
import { useState, useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosStore } from '@/store';

const ToDoItem = ({ itemProp }) => {
  const handleChange = useTodosStore((state) => state.handleChange);
  const delTodo = useTodosStore((state) => state.delTodo);
  const setUpdate = useTodosStore((state) => state.setUpdate);

  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  } //

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if(event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-throught',
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
        <button onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input type="text" ref={editInputRef} defaultValue={itemProp.title} className={styles.textInput} style={editMode}  onKeyDown={handleUpdatedDone}/>
    </li>
  );
};

export default ToDoItem