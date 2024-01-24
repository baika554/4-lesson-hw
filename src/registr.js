import React, { useState } from 'react';
import './registrform.css'; 

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleAgeChange = (e) => {
    const { name, value } = e.target;


    if (name === 'age' && isNaN(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleCheckBoxChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: fieldValue });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+996\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.fullName &&
      formData.age &&
      formData.email &&
      formData.phoneNumber &&
      validatePhoneNumber(formData.phoneNumber) &&
      formData.agreement
    ) {
      onRegister(formData);
    } else {
      alert('Пожалуйста, заполните все поля формы и введите корректный номер телефона с кодом +996. Либо поставьте галочку с соглашением на условия');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ФИО:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Возраст:
        <input type="text" name="age" value={formData.age} onChange={handleAgeChange} />
      </label>
      <br />
      <label>
        Электронная почта:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Номер телефона (+996):
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+996123456789"
        />
      </label>
      <br />
      <br />
      <label>
        Согласен с условиями: {}
        <input type="checkbox" name="agreement" defaultChecked onChange={handleCheckBoxChange} />
      </label>
      <br />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
