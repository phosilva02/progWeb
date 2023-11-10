function cadastrarUsuario() {
  const usuario = document.querySelector('#usuario').value;
  const senha = document.querySelector('#senha').value;

  fetch('/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, senha })
  })
  .then(response => response.json())
  .then(data => {
    mensagemDiv.innerHTML = '';
    const text = document.createTextNode(data.mensagem)
    mensagemDiv.appendChild(text)
  });
}

function logarUsuario() {
  const usuario = document.querySelector('#usuario').value;
  const senha = document.querySelector('#senha').value;

  fetch('/logar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, senha })
  })
  .then(response => response.json())
  .then(data => {
    mensagemDiv.innerHTML = '';
    const text = document.createTextNode(data.mensagem)
    mensagemDiv.appendChild(text)
  });
}


const cadastrarBotao = document.querySelector('#cadastrar');
const logarBotao = document.querySelector('#logar');
const mensagemDiv = document.querySelector('#mensagem');

cadastrarBotao.addEventListener('click', cadastrarUsuario);
logarBotao.addEventListener('click', logarUsuario);