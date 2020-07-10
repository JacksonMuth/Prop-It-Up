import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from './components/Person';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <PersonCard FirstName = "Jane" LastName = "Doe" Age = {45} Hair = "Black"/>
      <PersonCard FirstName = "John" LastName = "Smith" Age = {88} Hair = "Brown"/>
      <PersonCard FirstName = "Millard" LastName = "Fillmore" Age = {50} Hair = "Brown"/>
      <PersonCard FirstName = "Maria" LastName = "Smith" Age = {62} Hair = "Brown"/>
    </div>
  );
}

export default App;
