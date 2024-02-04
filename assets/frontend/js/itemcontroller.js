var productosVisible = 3;
var productosTotales;
var productosData;

$(document).ready(function () {
    $.getJSON("productos.json", function (data) {
        productosTotales = data.destacados.length;
        productosData = data.destacados;
        mostrarProductosDestacados(productosVisible, productosData);
    });
});

function mostrarProductosDestacados(cantidad, data) {
    var productosContainer = $(".destacados-container");
    productosContainer.empty();

    for (var i = 0; i < cantidad; i++) {
        var nuevoProducto = '<div class="col-lg-4 mb-4">' +
            '<div class="card producto">' +
            '<img src="' + data[i].imagen + '" class="card-img-top" alt="' + data[i].nombre + '">' +
            '<div class="card-body">' +
            '<h5 class="card-title nombreproducto">' + data[i].nombre + '</h5>' +
            '<p class="card-text precio">' + data[i].precio + '</p>' +
            '<button class="btn btn-anadir" onclick="anadirAlCarrito(event, ' + i + ')">Añadir al Carrito</button>' +
            '</div>' +
            '</div>' +
            '</div>';

        productosContainer.append(nuevoProducto);
    }

    actualizarTextoBoton(cantidad);
}

function toggleProductosDestacados() {
    if (productosVisible === 3) {
        productosVisible = productosTotales;
    } else {
        productosVisible = 3;
    }

    mostrarProductosDestacados(productosVisible, productosData);
}

function actualizarTextoBoton(cantidad) {
    var boton = $(".btn-ver-mas");
    if (cantidad === productosTotales) {
        boton.text("Ver menos productos");
    } else {
        boton.text("Ver más productos");
    }
}

function anadirAlCarrito(event, indice) {
    event.preventDefault();
    console.log('Producto añadido al carrito:', productosData[indice]);
}

//coontrolador de la seccion de ofertas

var ofertasVisible = 3;
var ofertasTotales;
var ofertasData;

$(document).ready(function () {
    $.getJSON("productos.json", function (data) {
        ofertasTotales = data.ofertas.length;
        ofertasData = data.ofertas;
        mostrarProductosOfertas(ofertasVisible, ofertasData);
    });
});

function mostrarProductosOfertas(cantidad, data) {
    var ofertasContainer = $(".ofertas-container");
    ofertasContainer.empty();

    for (var i = 0; i < cantidad; i++) {
        var nuevaOferta = '<div class="col-lg-4 mb-4">' +
            '<div class="card producto">' +
            '<img src="' + data[i].imagen + '" class="card-img-top" alt="' + data[i].nombre + '">' +
            '<div class="card-body">' +
            '<h5 class="card-title nombreproducto">' + data[i].nombre + '</h5>' +
            '<p class="card-text precio">' + data[i].precio + '</p>' +
            '<button class="btn btn-anadir" onclick="anadirAlCarrito(event, ' + i + ')">Añadir al Carrito</button>' +
            '</div>' +
            '</div>' +
            '</div>';

        ofertasContainer.append(nuevaOferta);
    }

    actualizarTextoBotonOfertas(cantidad);
}

function toggleProductosOfertas() {
    if (ofertasVisible === 3) {
        ofertasVisible = ofertasTotales;
    } else {
        ofertasVisible = 3;
    }

    mostrarProductosOfertas(ofertasVisible, ofertasData);
}

function actualizarTextoBotonOfertas(cantidad) {
    var boton = $(".btn-ver-oferta");
    if (cantidad === ofertasTotales) {
        boton.text("Ver menos ofertas");
    } else {
        boton.text("Ver más ofertas");
    }
}

