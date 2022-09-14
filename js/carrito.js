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
    <td class="text-end" colspan="6"> <a href="#" class="btn btn-warning2"  title="Vaciar Producto" onclick="vaciarCarrito()">Vaciar Carrito<img src="../imagenes/basura.png" alt="eliminar" title="elimiar producto"  width="25"> </td>
    </tr>`;

    productosHombres.forEach((productoH) => {
      contenido += `
        <tr>
        <td> <img src="${productoH.imagen}" class="card-top bordesImgCarrito" width="126" height="120" alt="${productoH.nombre}">
        <td> ${productoH.nombre} </td>
        <td> Precio: c/u $  ${productoH.precio} </td>
        <td><input type="button" class="btn btn-warning2"  title="eliminar producto" onclick="eliminarItemCarrito(${productoH.id})" value="-"> </input> ${productoH.cantidad} <input type="button" class="btn btn-warning2" value="+" title="agregar producto" onclick="agregarItemCarrito(${productoH.id})"></td>
        <td> Precio: $ ${productoH.precio * productoH.cantidad} </td>
        </tr>`;
    });
    contenido += `<tr>
    <td colspan="4">Total a Pagar: </td>
    <td colspan="4"><b>$${totalaPagar()}</b></td></tr></table>
    `
    
  }
  document.getElementById('productosHombres').innerHTML = contenido;
}

renderProductosCarrito();
numeroProductosInCarrito();