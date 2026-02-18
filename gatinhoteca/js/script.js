let estadoDoGato = 'neutro';

const botaoTenho = document.querySelector (".botao-tenho");
const imagemGato = document.querySelector('.img-gato');



botaoTenho.addEventListener('click', function () {
  console.log ('Cliquei em Tenho');
  estadoDoGato = 'tenho';
  imagemGato.src = '/gatinhoteca/assets/img/github.png';


});


const botaoQuero = document.querySelector (".botao-quero");

botaoQuero.addEventListener('click', function () {
  console.log ('Cliquei em Quero');


});

