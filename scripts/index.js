document.addEventListener('DOMContentLoaded', (event) => {
// botao de ver mais

let elementosOcultos = false;

window.onload = function() {
  if (window.innerWidth < 821) { // Si la pantalla es pequeña
    let elementos = document.getElementsByClassName('ver-mais');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.add('d-none');
    }
    elementosOcultos = true;
  }
}

document.getElementById('botaoVerMais').addEventListener('click', function() {
  let elementos = document.getElementsByClassName('ver-mais');
  for (let i = 0; i < elementos.length; i++) {
    if (elementosOcultos) {
      // Si los elementos están ocultos, los mostramos
      elementos[i].classList.remove('d-none');
    } else {
      // Si los elementos están visibles, los ocultamos
      elementos[i].classList.add('d-none');
    }
  }
  elementosOcultos = !elementosOcultos;
});

// botao ver mais aprovados

let aprovadosOcultos = false;

window.onload = function() {
  if (window.innerWidth < 821) { 
    let elementos = document.getElementsByClassName('ver-mais-aprovados');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.add('d-none');
    }
    aprovadosOcultos = true;
  }
}

document.getElementById('botaoVerMaisAprovados').addEventListener('click', function() {
  let elementos = document.getElementsByClassName('ver-mais-aprovados');
  for (let i = 0; i < elementos.length; i++) {
    if (aprovadosOcultos) {
      // Si los elementos están ocultos, los mostramos
      elementos[i].classList.remove('d-none');
    } else {
      // Si los elementos están visibles, los ocultamos
      elementos[i].classList.add('d-none');
    }
  }
  aprovadosOcultos = !aprovadosOcultos;
});

});








