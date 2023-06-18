
          /***** MI CAFETERIA  *****/

const simularCafeteria = function() {
  alert('Bienvenido/a a Mi Cafetería');

  let hacerPedido = true;

  while (hacerPedido) {
    const bebida = parseInt(prompt('¿Qué bebida desea tomar? Ingrese el número correspondiente: \n\n 1: Té \n 2: Café'));
    const comida = parseInt(prompt('¿Con qué comida desea acompañar su bebida? Ingrese el número correspondiente: \n\n 1: Tostados \n 2: Tortitas \n 3: Mediaslunas'));

    let valorBebida = 0;
    let valorComida = 0;
    let total = 0;

    switch (bebida) {
      case 1:
        valorBebida = 1.50;
        break;
      case 2:
        valorBebida = 2.50;
        break;
      default:
        alert('Valor ingresado incorrecto');
        return; // Sale de la funcion si el valor de bebida es incorrecto
    }

    switch (comida) {
      case 1:
        valorComida = 4;
        break;
      case 2:
        valorComida = 2.50;
        break;
      case 3:
        valorComida = 3;
        break;
      default:
        alert('Valor ingresado incorrecto');
        return; // Sale de la funcion si el valor de comida es incorrecto
    }

    total = valorBebida + valorComida;

    let resumenPedido =
      "Resumen del pedido:\n\n" +
      "Bebida: " + (bebida === 1 ? "Té" : "Café") + " (€" + valorBebida.toFixed(2) + ")\n" +
      "Comida: " + (comida === 1 ? "Tostados" : comida === 2 ? "Tortitas" : "Mediaslunas") + " (€" + valorComida.toFixed(2) + ")\n" +
      "Total: €" + total.toFixed(2);

    let llevar = confirm('¿Desea llevar su pedido?');

    let mensaje = resumenPedido + '\n\n Disfrute su ' + (bebida === 1 ? "Té" : "Café") + ' y ' + (comida === 1 ? "Tostados" : comida === 2 ? "Tortitas" : "Mediaslunas");

    if (llevar) {
      alert('Su pedido está listo para llevar.\n\n ' + mensaje);
    } else {
      alert('Puede quedarse en la cafeteria.\n\n ' + mensaje);
    }

    hacerPedido = confirm('¿Desea realizar otro pedido?');

    if (hacerPedido === false ){
      alert('Gracias, que tenga un buen dia')
    }
  }
}

simularCafeteria();


