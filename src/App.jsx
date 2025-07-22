import React from 'react';
import Header from './Header/Header.jsx';
import LoginCard from './LoginCard/LoginCard.jsx';

const App = () => {
  const users = [
    { name: 'Musab', email: 'musab@example.com', password: '1234' },
    { name: 'Saad', email: 'saad@example.com', password: '5678' },
    { name: 'Nabeel', email: 'nabeel@example.com', password: 'abcd' },
    { name: 'Salman', email: 'salman@example.com', password: 'efgh' },
    { name: 'Umar', email: 'umar@example.com', password: 'ijkl' },
    { name: 'Ayan', email: 'ayan@example.com', password: 'mnop' }
  ];



  return (
    <>
      <Header />
      <LoginCard users={users} />
    </>
  );
};

export default App;

