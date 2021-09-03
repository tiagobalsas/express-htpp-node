const express = require('express');
const app = express(); // 1

app.get('/', helloWorld); // 2

app.listen(3001, () => {
  console.log('Server Online');
}); // 3

function helloWorld(_req, res) {
  res.status(200).send('Hello, Wolrd!') // 4
};

// 1. Criar uma nova aplicação Express;
// 2. Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função helloWorld deve ser chamada;
// 3. Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// 4. Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
