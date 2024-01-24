import React, { useState } from 'react';
import RegistrationForm from './registr';
import UserDisplay from './realtime';

const App = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    age: '',
    email: '',
    phoneNumber: ''
  });

  const handleRegister = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <RegistrationForm onRegister={handleRegister} />
      <UserDisplay user={userData} />
    </div>
  );
};

export default App;
