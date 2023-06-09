import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/app.css'
import { BrowserRouter as Router } from 'react-router-dom'



import ToDoApp from '@/ToDoApp'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
    <React.StrictMode>
        <Router>
            <ToDoApp />
        </Router>
    </React.StrictMode>
);