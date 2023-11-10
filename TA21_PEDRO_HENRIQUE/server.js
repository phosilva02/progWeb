const express = require('express');
const fs = require('fs');
const usuarios = require('./usuarios.json');


const app = express();

app.use(express.json());

app.use(express.static('public'));

app.post('/cadastrar', (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  if(usuario === "" || senha === ""){
    mensagem = "Ambos os campos login e senha devem ser preenchidos"
  }
  else{
    const index = usuarios.usuarios.findIndex(u => u.usuario === usuario);
    if (index >= 0) {
      usuarios.usuarios[index].senha = senha;
      mensagem = `Usuário ${usuario} atualizado`;
    } 
    else {
      usuarios.usuarios.push({ usuario, senha });
      mensagem = `Usuário ${usuario} cadastrado`;
    }
    fs.writeFileSync('./usuarios.json', JSON.stringify(usuarios));
  }
  
  res.json({ mensagem });
});

app.post('/logar', (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  
  if(usuario === "" || senha === ""){
    mensagem = "Ambos os campos login e senha devem ser preenchidos"
  }
  else{
    const usuarioEncontrado = usuarios.usuarios.find(u => u.usuario === usuario);
    if (usuarioEncontrado) {
      if (usuarioEncontrado.senha === senha) {
        mensagem = `Usuário ${usuario} logado`;
      } else {
        mensagem = 'Senha incorreta';
      }
    }
    else {
      mensagem = 'Usuário não existe';
    }
  }
  res.json({ mensagem });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});