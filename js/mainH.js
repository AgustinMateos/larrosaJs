async function fetchProductos(){
  const respuesta = await fetch("../data/productosHombres.json") 
  return await respuesta.json();
}

let catalogoHombres=[];


function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos Hombres")) || [];

}
//
function guardarProductosHombresCarrito(catalogoHombres){
  localStorage.setItem("productosHombresCarrito",JSON.stringify(catalogoHombres));
}

function cargarProductosCarrito(){
  return JSON.parse(localStorage.getItem("productosHombresCarrito")) || [];

}

function buscarProducto(id){
const productos=cargarProductosLS();
return productos.find(item =>item.id === id)};

function cartelProductoAgregado(){Toastify({
  text: "Se Agrego Correctamente",
  className:"notificacionAgregado",
  offset: {
    x: 0, 
    y: 80 
  },
}).showToast();}

function cartelProductoEliminado(){Toastify({
  text: "Se Elimino Correctamente",
  className:"notificacionEliminado",
  offset: {
    x: 0, 
    y: 80 
  },
}).showToast();}

function cartelCarritoVacio(){Toastify({
  text: "No hay productos en el carrito",
  className:"notificacionCarritoVacio",
  offset: {
    x: 0, 
    y: 80 
  },
}).showToast();}

function agregarProductos(id){
  const productos__carrito=cargarProductosCarrito();
  let pos =productos__carrito.findIndex(item => item.id === id);
  if(pos > -1){
    productos__carrito[pos].cantidad+= 1;
  }else{ const producto= buscarProducto(id);
         producto.cantidad=1;
         productos__carrito.push(producto);
  }

  guardarProductosHombresCarrito(productos__carrito);
  numeroProductosInCarrito();
  cartelProductoAgregado();
}

function agregarProductosItem(id){
  const productos__carrito=cargarProductosCarrito();
  let pos =productos__carrito.findIndex(item => item.id === id);

  if(pos > -1){
    productos__carrito[pos].cantidad+= 1;
  }else{ const producto= buscarProducto(id);
         producto.cantidad=1;
         productos__carrito.push(producto);
  }

  guardarProductosHombresCarrito(productos__carrito);
  numeroProductosInCarrito();
 
}

function eliminarProductos(id){
  const productos__carrito=cargarProductosCarrito();
  let pos=productos__carrito.findIndex(item => item.id === id);
  productos__carrito[pos].cantidad -= 1;

  if(productos__carrito[pos].cantidad == 0){
     productos__carrito.splice(pos,1);

  }
  guardarProductosHombresCarrito(productos__carrito);
  numeroProductosInCarrito();
}

function agregarItemCarrito(id){
  agregarProductosItem(id);
  renderProductosCarrito();
  cartelProductoAgregado();
}

function eliminarItemCarrito(id){
  eliminarProductos(id);
  renderProductosCarrito();
  cartelProductoEliminado()
  
}

function vaciarCarrito(){
  localStorage.removeItem("productosHombresCarrito")
  renderProductosCarrito();
  numeroProductosInCarrito();
  cartelCarritoVacio();
}

function numeroProductosInCarrito(){
  let contenido=`<button type="button" class="btn btn-primary position-relative">
  <img src="../imagenes/carrito1.jpeg" alt="carrito" width="30" height="35">
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${totalProductosInCarrito()}
  </span>
</button>`;
 document.getElementById("botonCarrito").innerHTML=contenido;
}


function totalProductosInCarrito(){
     const productos__carrito= cargarProductosCarrito();
     return productos__carrito.reduce((acumulador,item)=>acumulador+item.cantidad,0);

}

function totalaPagar(){
  const productos__carrito= cargarProductosCarrito();
  return productos__carrito.reduce((acumulador,item)=>acumulador+( item.cantidad * item.precio ),0)

}



guardarProductosHombresLS(catalogoHombres);



