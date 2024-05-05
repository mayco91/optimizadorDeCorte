const optimizador = require("../Utility/funcionOptimizadora");
let resultado

const optimizarCortes = {

// METODO QUE RENDERIZA EL FORMULARIO

    optimizerForm: (req, res) => {

        res.render('index', { title: "FORMULARIO DE CORTE" })

    },

// METODO QUE PROCESA EL FORMULARIO

    optimizerProcess: (req, res) => {

        //Me aseguro de que el ancho y el alto tengan una tipologia asignada segund su posicion en el array,uso el parametro ignore para ignorar el primero parametro y asi ingresar correctamente al array por el map ya que si solo le paso el indice me devuelve null 
        
    const tipologiasAncho = req.body.tipologia.map((ignore, index) => req.body.tipologia[index]);
    const tipologiasAlto = req.body.tipologia.map((ignore, index) => req.body.tipologia[index]);

        // combino ambos valores en un solo array 

    const tipologias = tipologiasAncho.concat(tipologiasAlto);

        // hago lo mismo con las medidas 

    const medidas = req.body.ancho.concat(req.body.alto);

        // devuelvo un objeto con los datos del formulario filtrado a mi gusto para usarlo 

    const data = {
            tipo: tipologias,
            medida: medidas
        };

    resultado = optimizador(data);
    
        
    res.redirect('/vistaBarra');
    },

vistaBarra: (req,res)=>{
    const barras = resultado;
    res.render('vistaBarra',{barras})
}
}

module.exports = optimizarCortes;