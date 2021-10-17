let carrito;

function multiplicarPrecio(i){
    let precio = parseInt(document.getElementById(`precio${i}`).innerText);
    let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);
  
    let total = precio * cantidad;
  
    document.getElementById(`prodPrice${i}`).innerHTML = total;

  }

function showCarrito(){
    let html = "";
    for(let i = 0; i < carrito.length; i++){
        let articulo = carrito[i];

        html += `<div class="card bg-light mb-3 container-cart" style="min-width: 55.5rem;">
        <div class="card-body">
          <img src="` + articulo.src + `" alt="" id="imagen">
          <h5 class="card-title">` + articulo.name + `</h5>
          <p class="card-text" id="precio${i}">` + articulo.unitCost + `</p>
          <p class="card-text" >` + articulo.currency + `</p>
          
          <input id="cantidad${i}" class="cart_item_text cantidad" min="1" value="` + articulo.count + `" type="number" onchange="multiplicarPrecio(${i})">
        </div>
      </div> 
      
      <div class="card bg-light mb-3 container-envio" style="max-width: 23rem;">
      <div class="card-body">
        <h5 class="titulo">Resumen del pedido</h5>
        <hr>
        <div class="container-btn">
          <h6 class="titulo-envio"><strong>Seleccione el metodo de envio</strong></h6>
          <label><input type="radio" name="envio">Envio comun(UYU120)</label>
          <label><input type="radio" name="envio">Envio premium(UYU250)</label>
          <label><input type="radio" name="envio">Envio express(UYU300)</label>
        </div>
        <hr>
        <h6 class="titulo-envio"><strong>Sub total</strong></h6>
        <div>`+ "Producto" + " " + articulo.currency + `
        <span id="prodPrice${i}">${articulo.unitCost * articulo.count}</span>
        <p>Costo de envio</p>
        </div>
        <hr>
        <h6 class="titulo-envio"><strong>Total:</strong></h6>
        <p id="total"></p>
      </div>
      <button type="button" class="btn btn-primary btn-lg boton-comprar">Comprar</button>
      <button type="button" class="btn btn-secondary btn-lg boton-comprar">Seguir comprando</button>
    </div>
      `
      
    }

    document.getElementById("listaCarrito").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function(e){
    fetch(CART_INFO_URL).then(function(resultObj){
    return resultObj.json();
    }).then(function(resultObj2){
        carrito = resultObj2.articles
        showCarrito(carrito);
    })
});


/*
getJSONData(CART_INFO_URL).then(function(resultObj2){
        if(resultObj2.status==="ok"){
            carrito = resultObj2.articles  
        }
        showCarrito(carrito)
    });
*/