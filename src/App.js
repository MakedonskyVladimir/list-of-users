import './App.css';
import React from 'react';
import Users from './components/Users/Users'
import Success from './components/Success/Success'

// список пользователей: http://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([])

  // let response = fetch('http://reqres.in/api/users')

  return (
    <div>
      <h1>Список пользователей</h1>
      <h2></h2>
    </div>
  );
}

export default App;