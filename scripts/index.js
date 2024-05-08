document.addEventListener('DOMContentLoaded', (event) => {
// botao de ver mais

let aprovadosOcultos = false;
let maisOcultos = false;

window.onload = function() {
  if (window.innerWidth < 871) { 
    let elementosAprovados = document.getElementsByClassName('ver-mais-aprovados');
    let elementosMais = document.getElementsByClassName('ver-mais');
    for (let i = 0; i < elementosAprovados.length; i++) {
      elementosAprovados[i].classList.add('d-none');
    }
    for (let i = 0; i < elementosMais.length; i++) {
      elementosMais[i].classList.add('d-none');
    }
    aprovadosOcultos = true;
    maisOcultos = true;
  }
}

document.getElementById('botaoVerMaisAprovados').addEventListener('click', function() {
  toggleElementos('ver-mais-aprovados', this);
});

document.getElementById('botaoVerMais').addEventListener('click', function() {
  toggleElementos('ver-mais', this);
});

window.addEventListener('resize', ocultarElementos);

function toggleElementos(clase, boton) {
  let elementos = document.getElementsByClassName(clase);
  let ocultos = (clase === 'ver-mais-aprovados') ? aprovadosOcultos : maisOcultos;
  for (let i = 0; i < elementos.length; i++) {
    if (ocultos) {
      // Se os elementos estao ocultos, os mostramos
      elementos[i].classList.remove('d-none');
      // muda o texto a 'Ver menos'
      boton.textContent = 'Ver menos';
    } else {
      // Se os elementos estao visiveis, os ocultamos
      elementos[i].classList.add('d-none');
      // muda o texto a 'Ver más'
      boton.textContent = 'Ver mais';
    }
  }
  if (clase === 'ver-mais-aprovados') {
    aprovadosOcultos = !aprovadosOcultos;
  } else {
    maisOcultos = !maisOcultos;
  }
}

})







