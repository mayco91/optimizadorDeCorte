function optimizador(data) {

    // Aca ordeno el array de medidas de mayor a menor 

    data.medida.sort((a, b) => b - a);

    // Usando el while lo que hago es recorrer el array hasta que no se encuentren mas valores,
    // mientras tanto el while va a seguir iterando y agregando barras segun sea necesario para la cantidad de cortes 

    let barrasOptimizadas = [];

        while (data.medida.length > 0) {
        let barraActual = [];
        let longitudBarraActual = 6000;

    // mediante el ciclo for lo que hago es agregar cortes a la barra actual siempre y cuando existan cortes 

        for (let i = 0; i < data.medida.length; i++) {
            const medidaCorte = data.medida[i];
            const tipoCorte = data.tipo[i];
            if (medidaCorte <= longitudBarraActual) {
                barraActual.push({ medida: medidaCorte, tipologia: tipoCorte });
                longitudBarraActual -= medidaCorte;
                // El metodo splice elimina el corte partiendo en el indice asignado 
                data.medida.splice(i, 1);
                data.tipo.splice(i, 1);
                // y luego ajusta el índice nuevamente sin el corte anterior, similar a lo que haría un filter pero dentro de un ciclo 
                i--;
            }
        }
    barrasOptimizadas.push(barraActual);
    }

    return { 
        cantidadBarras: barrasOptimizadas.length,
        barrasOptimizadas 
    };
}

module.exports = optimizador