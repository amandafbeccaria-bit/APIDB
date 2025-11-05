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

// Rota 4- Produtos- crie um json com 5 produtos ---> copiar visualmente o exemplo anterior 
app.get('/produtos', (req,res) => {
  res.json([
    {id:1, produto:"Onix"},
    {id:2 , produto: "Civic"},
    {id:3 , produto: "Corolla"},
    {id:4 , produto: "Vectra "},
    {id:5 , produto: "Opala"},
    {id:2 , produto: "omega"}
  ]);
});

// Inicia o servidor 
app.listen(3000,() =>{
  console.log('Servidor rodando em http://localhost:3000');
});