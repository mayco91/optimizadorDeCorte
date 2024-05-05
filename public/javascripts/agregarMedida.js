function agregarMedida() {
    
    const contenedor = document.getElementById("contenedor")
    const subContenedor = document.createElement("div")
    subContenedor.id = "subContenedor"
    const nuevoDiv = document.createElement("div");

    // input para la tipología
    const labelTipologia = document.createElement("label")
    labelTipologia.textContent = "Tipologia "
    const nuevaTipologia = document.createElement("input");
    nuevaTipologia.type = "text";
    nuevaTipologia.name = "tipologia";
    nuevaTipologia.label = "Tipología";

    // input para el ancho
    const labelAncho = document.createElement("label")
    labelAncho.textContent = "Ancho (en milimetros) "
    const nuevoAncho = document.createElement("input");
    nuevoAncho.type = "text";
    nuevoAncho.name = "ancho";
    nuevoAncho.label = "Ancho (en milímetros)";

    // input para el alto
    const labelAlto = document.createElement("label")
    labelAlto.textContent = "Alto (en milimetros) "
    const nuevoAlto = document.createElement("input");
    nuevoAlto.type = "text";
    nuevoAlto.name = "alto";
    nuevoAlto.label = "Alto (en milímetros)";

    // Agrego los input al div creado 
    nuevoDiv.appendChild(labelTipologia)
    nuevoDiv.appendChild(nuevaTipologia);
    nuevoDiv.appendChild(labelAncho)
    nuevoDiv.appendChild(nuevoAncho);
    nuevoDiv.appendChild(labelAlto)
    nuevoDiv.appendChild(nuevoAlto);
    subContenedor.appendChild(nuevoDiv)
    contenedor.appendChild(subContenedor)

// Agrego el evento a los nuevos inputs que se crean
    nuevaTipologia.addEventListener('input', function() {

    // Convierte el valor del input a mayúsculas
    this.value = this.value.toUpperCase();
    });
  }