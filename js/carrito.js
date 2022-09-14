function renderProductosCarrito() {
  const productosHombres = cargarProductosCarrito();
  let contenido = "";

  if (productosHombres.length == 0) {
    contenido = `<div class="alert1  alert-danger d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        No hay productos en el carrito
      </div>
    </div>`

  } else {
    contenido += `<table class= "table"> 
    <tr>
    <td class="text-end" colspan="6"> <a href="#" class="btn btn-warning"  title="Vaciar Producto" onclick="vaciarCarrito()">Vaciar Carrito<img src="../imagenes/basura.png" alt="eliminar" title="elimiar producto"  width="25"> </td>
    </tr>`;

    productosHombres.forEach((productoH) => {
      contenido += `
        <tr>
        <td> <img src="${productoH.imagen}" class="card-top" width="126" height="120" alt="${productoH.nombre}">
        <td> ${productoH.nombre} </td>
        <td> Precio: c/u $  ${productoH.precio} </td>
        <td><a href="#" class="btn btn-warning"  title="eliminar producto" onclick="eliminarItemCarrito(${productoH.id})">- </a> ${productoH.cantidad} <a href="#" class="btn btn-warning"  title="agregar producto" onclick="agregarItemCarrito(${productoH.id})">+</td>
        <td> precio: ${productoH.precio * productoH.cantidad} </td>
        <td><a href="#" class="btn btn-warning" onclick="eliminarItemCarrito(${productoH.id})"><img src="../imagenes/basura.png" alt="eliminar" title="elimiar producto" class="text-end" width="25"></a></td>
        </tr>`;
    });
    contenido += `<tr>
    <td colspan="4">Total a Pagar: </td>
    <td colspan="2"><b>$${totalaPagar()}</b></td></tr></table>
    `
    
  }
  document.getElementById('productosHombres').innerHTML = contenido;
}

renderProductosCarrito();
numeroProductosInCarrito();