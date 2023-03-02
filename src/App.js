import React from 'react';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <TodosLogic />
    </div>
  );
}

export default App;
