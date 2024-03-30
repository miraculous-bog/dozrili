import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from './signIn.module.scss'
const focusColor = '#E84514';
const SignIn =()=> {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
      if (response.data.successful) {
        localStorage.setItem('token', response.data.token);
        navigate('/blog');
      } else {
        setError('Неправильні ім’я користувача або пароль.');
      }
    } catch (error) {
      setError('Помилка авторизації. Спробуйте знову.');
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Якщо у локальному сховищі є токен, перевіряємо його валідність
      axios.get('http://localhost:8080/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        if (response.data.user) {
          // Якщо токен валідний, перенаправляємо на /blog
          navigate('/blog');
        }
      }).catch(() => {
        // Якщо токен не валідний, можна залишити користувача на сторінці входу
        localStorage.removeItem('token');
      });
    }
  }, [navigate]);
  return (
    <div className={styles.wrapper}>
      <Typography variant="h6" style={{ marginBottom: '16px' }}>Вхід</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ім'я"
          variant="outlined"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          margin="normal"
          sx={{
            '& label.Mui-focused': {
              color: focusColor,
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: focusColor,
              },
            },
          }}
          fullWidth
        />
        <TextField
          label="Пароль"
          variant="outlined"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          margin="normal"
          sx={{
            '& label.Mui-focused': {
              color: focusColor,
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: focusColor,
              },
            },
          }}
          fullWidth
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
          sx={{
            backgroundColor: focusColor,
            '&:hover': {
              backgroundColor: focusColor,
            },
          }}
          fullWidth
        >
          Увійти
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
