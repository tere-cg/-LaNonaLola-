var listaproductos = [];

function agregarProductos(){
    var producto = document.getElementById('producto').value;
    listaproductos.push(producto);
    var nodo = document.createElement('li');
    nodo.appendChild(document.createTextNode("Pizza de $" + producto));
    nodo.className =  "list-group my-2";
    document.getElementById('carrito').appendChild(nodo);
}

function mostrarTotal(){
    var nombre = document.getElementById('nomcliente').value;
    var total = 0;
    productos = [];
    length = listaproductos.length;
    for (var i = 0; i < length; i++)
        productos.push(parseInt(listaproductos[i]));
    for(let x of productos){
        total+=x;
    }
    document.getElementById('resultado').innerHTML = "Nombre del cliente: " + nombre;
    document.getElementById('resultado2').innerHTML = "Total de la orden: $" + total;
}
