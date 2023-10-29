import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'

const About = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 使用fetch请求Spring Boot后端
    fetch('http://localhost:8080/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMessage(data.message);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // 使用空数组作为依赖，以确保该效应只运行一次
  return (
    <Container>About{message}</Container>
  )
}

export default About