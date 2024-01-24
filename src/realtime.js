import React from 'react';

const UserDisplay = ({ user }) => {
  return (
    <div>
      <h2>Данные пользователя в реальном времени:</h2>
      <p>ФИО: {user.fullName}</p>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Номер телефона: {user.phoneNumber}</p>
    </div>
  );
};

export default UserDisplay;