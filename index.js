 var Alquileres = [];
 var ciudadesAMostrar = ["Guadalajara", "Tijuana", "Culiacan", "Toluca", "Merida" ]
 var vehiculosAMostrar = [ "Bicicleta", "Moto", "Cuatrimoto", "Carro De Golf"]
 var preciosAMostrar = ["Bicicleta-$4", "Moto-$6", "Cuatrimoto-$15", "Carro De Golf-$18"]

var listaDeCiudades = document.getElementById("listaCiudades")
var listaDeVehiculos = document.getElementById("listaVehiculos")
var listaDePrecios = document.getElementById("listaPrecios")
var listaDeAlquileres = document.getElementById("alquileres")

function mostrarDatos(datosAMostrar, listaAAñadir) {

    for(var x = 0; x < datosAMostrar.length; x += 1) {
          //Crea un nuevo elemnto li
          var elemento = document.createElement("li")
          //asigna el texto a nuestro elemento
          elemento.textContent = datosAMostrar[x]
          //añade nuestro elemento a la lista
         listaAAñadir.appendChild(elemento)
    }
}

function registrarAlquiler() {
    const ciudad = document.getElementById("ciudades").value 
    const vehiculo = document.getElementById("vehiculos").value
    const horas = document.getElementById("horas").value
    const nombre = document.getElementById("nombre").value
    const fecha = document.getElementById("fecha").value
    const cita = document.getElementById("cita").value
    const cantidad = document.getElementById("cantidad").value
  
    const alquiler = {
      ciudad,
      vehiculo,
      horas,
      nombre,
      fecha,
      cita,
      cantidad
    }
  
    Alquileres.push(alquiler)
  }
  
  function mostrarAlquileres() {
    for(var y = 0; y < Alquileres.length; y += 1) {
      let alquiler = document.createElement("div")
      let ciudad = document.createElement("p")
      let vehiculo = document.createElement("p")
      let horas = document.createElement("p")
      let nombre = document.createElement("p")
      let fecha = document.createElement("p")
      let cita = document.createElement("p")
      let cantidad = document.createElement("p")

      ciudad.textContent = `Ciudad: ${Alquileres[y].ciudad}`
      vehiculo.textContent = `vehiculo: ${Alquileres[y].vehiculo}`
      horas.textContent =  `horas: ${Alquileres[y].horas}`
      nombre.textContent =  `nombre: ${Alquileres[y].nombre}`
      fecha.textContent =  `fecha: ${Alquileres[y].fecha}`
      cita.textContent =  `cita: ${Alquileres[y].cita}`
      cantidad.textContent =  `cantidad: ${Alquileres[y].cantidad}`

      alquiler.appendChild(nombre)
      alquiler.appendChild(ciudad)
      alquiler.appendChild(vehiculo)
      alquiler.appendChild(horas)
      alquiler.appendChild(fecha)
      alquiler.appendChild(cita)
      alquiler.appendChild(cantidad)
      alquiler.setAttribute("class", "alquiler_mostrado")

      listaDeAlquileres.appendChild(alquiler)
    }
}

function recaudacionPorCiudad(ciudad) {
  let gananciasTotalesBicicleta = Alquileres.reduce((sum, value) => {
    if (ciudad === value.ciudad) {
      
    }
    return (value.vehiculo === "Bicicleta" ? sum + value.horas : sum)
  }, 0)
}


mostrarDatos(ciudadesAMostrar, listaDeCiudades)
mostrarDatos(vehiculosAMostrar, listaDeVehiculos)
mostrarDatos(preciosAMostrar, listaDePrecios)