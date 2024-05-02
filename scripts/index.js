document.addEventListener('DOMContentLoaded', (event) => {
// botao de ver mais

let elementosOcultos = false;

window.onload = function() {
  if (window.innerWidth < 821) { // Se a tela for pequena 
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
      // Se os elementos estao ocultos, os mostramos
      elementos[i].classList.remove('d-none');
    } else {
      // Se os elementos estao visiveis, os ocultamos
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
      // Se os elementos estao ocultos, os mostramos
      elementos[i].classList.remove('d-none');
    } else {
      // Se os elementos estao visiveis, os ocultamos
      elementos[i].classList.add('d-none');
    }
  }
  aprovadosOcultos = !aprovadosOcultos;
});

});








