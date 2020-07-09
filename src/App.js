import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div>
      <Person FirstName = "Jane" LastName = "Doe" Age = {45} Hair = "Black"/>
      <Person FirstName = "John" LastName = "Smith" Age = {88} Hair = "Brown"/>
      <Person FirstName = "Millard" LastName = "Fillmore" Age = {50} Hair = "Brown"/>
      <Person FirstName = "Maria" LastName = "Smith" Age = {62} Hair = "Brown"/>
    </div>
  );
}

export default App;
