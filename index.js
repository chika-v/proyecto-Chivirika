 var Alquileres = [];
 var ciudadesAMostrar = ["Guadalajara", "Tijuana", "Culiacan", "Toluca", "Merida" ]
 var vehiculosAMostrar = [ "Bicicleta", "Moto", "Cuatrimoto", "Carro De Golf"]
 var preciosAMostrar = ["Bicicleta-$4", "Moto-$6", "Cuatrimoto-$15", "Carro De Golf-$18"]

var listaDeCiudades = document.getElementById("listaCiudades")
var listaDeVehiculos = document.getElementById("listaVehiculos")
var listaDePrecios = document.getElementById("listaPrecios")
var listaDeAlquileres = document.getElementById("alquileres")

// Muestra los datos de ciudades, vehícuños y precios en el archivo HTML
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

//Ésta función la uso para registrar un nuevo alquiler en el array de Alquileres y la llamo en mi archivo html
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
  
  // Esta función me crea un nuevo div con todos los datos de los alquileres guardados, son objetos y por eso accedemos a
  // Alquileres[posicion].dato, luego se añade el dato al parrafo correspondiente
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

// Esta función nos da la recaudación total por cada vehículo en cada ciudad y al final de devuelve un objeto con éstos datos
function recaudacionPorCiudad(ciudad) {
  let gananciasTotalesBicicleta = Alquileres.reduce((sum, value) => {
    if (ciudad === value.ciudad) {
      return (value.vehiculo === "Bicicleta" ? sum += (parseInt(value.horas) * 4) : sum) 
    }
    return sum
  }, 0)
  let gananciasTotalesMoto = Alquileres.reduce((sum, value) => {
    if (ciudad === value.ciudad) {
      return (value.vehiculo === "Moto" ? sum += (parseInt(value.horas) * 6) : sum) 
    }
    return sum
  }, 0)
  let gananciasTotalesCuatrimoto = Alquileres.reduce((sum, value) => {
    if (ciudad === value.ciudad) {
      return (value.vehiculo === "Cuatrimoto" ? sum += (parseInt(value.horas) * 15) : sum) 
    }
    return sum
  }, 0)
  let gananciasTotalesCarroDeGolf = Alquileres.reduce((sum, value) => {
    if (ciudad === value.ciudad) {
      return (value.vehiculo === "Carro de golf" ? sum += (parseInt(value.horas) * 18) : sum) 
    }
    return sum
  }, 0)
  
  const gananciasTotalesPorCiudad = {
    ciudad,
    Bicicleta: `$${gananciasTotalesBicicleta}`,
    Moto: `$${gananciasTotalesMoto}`,
    Cuatrimoto: `$${gananciasTotalesCuatrimoto}`,
    CarroDeGolf: `$${gananciasTotalesCarroDeGolf}`
  }
  return gananciasTotalesPorCiudad
}

// Con ésta función usamos el método reduce de los arrays para recorrer cada objeto dentro del array y obtener un objeto con la 
// recaudación total y el porcentaje.
function facturacionTotal() {
  let facturacionTotalGuadalajara = Alquileres.reduce((sum,value) => {
    return (value.ciudad === "Guadalajara" ? sum += 1 : sum)
  }, 0)
  let facturacionTotalTijuana = Alquileres.reduce((sum,value) => {
    return (value.ciudad === "Tijuana" ? sum += 1 : sum)
  }, 0)
  let facturacionTotalCuliacan = Alquileres.reduce((sum,value) => {
    return (value.ciudad === "Culiacan" ? sum += 1 : sum)
  }, 0)
  let facturacionTotalToluca = Alquileres.reduce((sum,value) => {
    return (value.ciudad === "Toluca" ? sum += 1 : sum)
  }, 0)
  let facturacionTotalMerida = Alquileres.reduce((sum,value) => {
    return (value.ciudad === "Merida" ? sum += 1 : sum)
  }, 0)
  const facturasTotales = facturacionTotalGuadalajara + facturacionTotalTijuana + facturacionTotalCuliacan + facturacionTotalToluca + facturacionTotalMerida
  const facturTotal = [
    {ciudad: "Guadalajara", facturas: facturacionTotalGuadalajara, porcentajeTotal: `%${((facturacionTotalGuadalajara * 100) / facturasTotales)}`},
    {ciudad: "Tijuana", facturas: facturacionTotalTijuana, porcentajeTotal: `%${((facturacionTotalTijuana * 100) / facturasTotales)}`},
    {ciudad: "Culiacan", facturas: facturacionTotalCuliacan, porcentajeTotal: `%${((facturacionTotalCuliacan * 100) / facturasTotales)}`},
    {ciudad: "Toluca",  facturas: facturacionTotalToluca, porcentajeTotal: `%${((facturacionTotalToluca * 100) / facturasTotales)}`},
    {ciudad: "Merida", facturas: facturacionTotalMerida, porcentajeTotal: `%${((facturacionTotalMerida * 100) / facturasTotales)}`}
  ]
  facturTotal.sort((a, b) => b.facturas - a.facturas) 
  return { facturasTotales, facturTotal}
}


// Esta función usa como callBack a la función de recaudaciónPorCiudad y facturaciónTotal y luego te muestra en la consola los
// resultados requeridos.

//Los datos finales están siendo mostrados en consola, los manejo con el array de objetos de alquileres y usando las funciones que construí.
function recaudacionTotal() {
  let recaudacionGuadalajara = recaudacionPorCiudad("Guadalajara")
  let recaudacionTijuana = recaudacionPorCiudad("Tijuana")
  let recaudacionCuliacan = recaudacionPorCiudad("Culiacan")
  let recaudacionToluca = recaudacionPorCiudad("Toluca")
  let recaudacionMerida = recaudacionPorCiudad("Merida")
  const resultadosTotales = {
    Guadalajara: recaudacionGuadalajara,
    Tijuana: recaudacionTijuana,
    Culiacan: recaudacionCuliacan,
    recaudaciontoluca: recaudacionToluca,
    recaudacionMerida: recaudacionMerida
  }
  let facturasTotales = facturacionTotal()
  console.log(`Total Recaudad por vehículo y ciudad:`)
  console.log(resultadosTotales)
  console.log('Facturas Totales por ciudad')
  console.log(facturasTotales)
  console.log('Ciudad con menor facturación')
  console.log(facturasTotales.facturTotal[facturasTotales.facturTotal.length - 1].ciudad)
}

mostrarDatos(ciudadesAMostrar, listaDeCiudades)
mostrarDatos(vehiculosAMostrar, listaDeVehiculos)
mostrarDatos(preciosAMostrar, listaDePrecios)