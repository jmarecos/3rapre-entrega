
const imgCarrito = document.getElementById("imgCarrito")
const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const carrito = recuperarCarrito()

function filtrarProductos() {
    
    let resultado = productos.filter(prenda => prenda.nombre.toLowerCase().includes(valor.toLowerCase()))
        if (resultado.length > 0) {
            cargarProductos()
        }
}
function retornoCardHTML(carritoPrendas) {
    return `<div class="card">
                <div class="card-image"><img src="${remera1.jpg}></div>
                <div class="card-image"><img src="${remera2.jpg}></div>
                <div class="card-image"><img src="${remera3.jpg}></div>
                <div class="card-image"><img src="${bota.jpg}></div>
                <div class="card-image"><img src="${zapas2.jpg}></div>
                <div class="card-image"><img src="${zapas3.jpg}></div>
                <div class="card-image"><img src="${cadenas.jpg}></div>
                <div class="card-image"><img src="${jean2.jpg}></div>
                <div class="card-image"><img src="${jean3.jpg}></div>
                <div class="card-name">${prenda.nombre}</div>
                <div class="card-price">$ ${prenda.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${prenda.id}" title="Clic para agregar al carrito"><img src="img/Logo corporativo Estudio elegante blanco y negro.jpg"></button>
                </div>
            </div>`
    }
    
    function cargarProductos(array) {
        container.innerHTML = ""
        array.forEach(prenda => {
            container.innerHTML += retornoCardHTML(prenda)
        })
        activarClickEnBotones()
    }
    
    inputSearch.addEventListener("search", (e)=> {
        filtrarProductos(e.target.value)
    })
    
    function activarClickEnBotones() {
        const botones = document.querySelectorAll("button.button.button-outline.button-add")
              for (const boton of botones) {
                boton.addEventListener("click", ()=> {
                    let resultado = productos.find(prenda => productos.id === parseInt(boton.id))
                        carrito.push(resultado)
                        guardarCarrito()
                })
              }
    }
    
    function guardarCarrito() {
        localStorage.setItem("carritoPrendas", JSON.stringify(carrito))
    }
    
    function recuperarCarrito() {
        return JSON.parse(localStorage.getItem("carritoPrendas")) || []
    }

    inputSearch.addEventListener("")
    
    cargarProductos(productos)
    recuperarCarrito()

    