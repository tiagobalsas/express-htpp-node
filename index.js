const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Server Online');
});

// 1. Criar uma nova aplicação Express;
// 2. Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /recipes , retorne um objeto json
// 3. Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;rs
