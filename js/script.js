//Opciones de compras

// Defino mis productos en stock con arrays
const Talles = [
    { tB: 1, medida: 'Talle S', precio: 2500 },
    { tB: 2, medida: 'Talle M', precio: 4000 },
    { tB: 3, medida: 'Talle L', precio: 6500 }
  ];
  
  // Carrito de compras (array vacío por el momento)
  let carro = [];
  
  //Función de ingresos al carro de compras
  function agregarAlCarrito(tB) {
    const Talle = Talles.find(toteBag => toteBag.tB === tB);
    if (Talle) {
      if (!carro.includes(Talle)) {
        carro.push(Talle);
        alert(`Agregaste una Tote Bag ${Talle.medida} en tu carrito.`);
      } else {
        alert(`La Tote Bag ${Talle.medida} ya está en el carrito.`);
      }
    } else {
      alert(`La Tote Bag ${tB} todavía no existe, para sugerencias escribinos en @A!.bags`);
    }
  }

  //Proximo carrito con el total de la compra
//   function totalCarro() {
//     i
//   }
  
  // Función para mostrar el carro
//   function mostrarCarro() {
//     console.table(carro);
//   }

  //Ingresos del usuario

  let pushTote = true;
  while (pushTote) {
    const ProductoTb = parseInt(prompt('Ingrese el ID del producto que desea agregar al carrito. '     +    ' Tote Bag S = 1 '    +     ' Tote Bag M = 2 '    +   '   Tote Bag L = 3  '));
    if (isNaN(ProductoTb) || ProductoTb < 1 || ProductoTb > Talles.length) {
      alert('Ingrese nuevamene el número de su Tote Bag');
    } else {
      agregarAlCarrito(ProductoTb);
    }
    pushTote = confirm('¿Nos damos otro gustito?');
  }
  
//   const verCarro = confirm('¿Desea ver el carrito?');
//   if (verCarro) {
//     mostrarCarro();
//   } else {
//      confirm('Gracias por comprar, see u <3!');
//   }