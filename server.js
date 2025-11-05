const express = require('express');
const app = express();

// Rota principal
app.get('/',(req,res) => {
  res.send('Olá Mundo!');
});

// Rota 2
app.get('/sobre',(req,res) => {
  res.send('Esta é a rota sobre o sistema ');
});

// Rota 3
app.get('/usuarios',(req,res) => {
  res.json([
    {id: 1, nome: 'Daniel'},
    {id: 2 , nome: 'Amanda '}
  ]);
});

// Inicia o servidor 
app.listen(3000,() =>{
  console.log('Servidor rodando em http://localhost:3000');
});