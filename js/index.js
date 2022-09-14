function renderProductos(){
    const productosHombres = cargarProductosLS();
    let contenido = "";
    productosHombres.forEach((productoH)=> {
        contenido += `<div">
        <div class="card" style="width: 15rem;">
        <img src="${productoH.imagen}" class="card-top" width="150" height="150" alt="${productoH.nombre}">
        <div class="card-body">
          <h5 class="card-title">${productoH.nombre}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="card-text">Precio: $ ${productoH.precio}</p>
          <input type="button" value="Agregar" href="#" class="btn btn-primary1" onclick="agregarProductos(${productoH.id})"></input>
        </div>
      </div>
      </div>
      `
        
    })
    document.getElementById('productosHombres').innerHTML= contenido;
    }
    renderProductos();
    numeroProductosInCarrito();