function optimizarCortes(cortes) {
    // Aca ordeno el array de mayor a menor 
    cortes.sort((a, b) => b.medida - a.medida);

    // Usando el while lo que hago es recorrer el array hasta que no se encuentren mas valores,
    // mientras tanto el while va a seguir iterando y agregando barras segun sea necesario para la cantidad de cortes 
    let barrasOptimizadas = [];

    while (cortes.length > 0) {
        let barraActual = [];
        let longitudBarraActual = 6000
         

    // mediante el ciclo for lo que hago es agregar cortes a la barra actual siempre y cuando existan cortes 
        for (let i = 0; i < cortes.length; i++) {
            const corte = cortes[i];
            if (corte.medida <= longitudBarraActual) {
                barraActual.push(corte);
                longitudBarraActual -= corte.medida;
                // El metodo splice eimina el corte partiendo en el indice asignado 
                cortes.splice(i, 1); 
                //y luego ajusta el indice nuevamente sin el corte anterior similar a lo que haria un filter pero dentro de un ciclo 
                i--; 
            }
        }

        barrasOptimizadas.push(barraActual);
    }

    return { cantidadBarras: barrasOptimizadas.length, barrasOptimizadas };
}




// harcodeo el array
const cortes = [
    { medida: 1000, tipologia: "VC1" },
    { medida: 700, tipologia: "VC2" },
    { medida: 1200, tipologia: "VC3" },
    { medida: 1200, tipologia: "VC3" },
    { medida: 1400, tipologia: "VC3" },
    { medida: 1800, tipologia: "VC3" },
    { medida: 2400, tipologia: "VC1" },
    { medida: 3800, tipologia: "VC2" },
    { medida: 4000, tipologia: "VC2" },
    ];

const resultado = optimizarCortes(cortes);
console.log("Cantidad de barras", resultado.cantidadBarras);
console.log("Optimizacion", resultado.barrasOptimizadas);
