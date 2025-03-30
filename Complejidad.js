// aplicar jsdocs
class AbsComplejidad{
    constructor(){
     if (new.target === AbsComplejidad) {
       throw new Error("No se puede instanciar una clase abstracta directamente")
     }
   }
 
   calcCosto(tiempo,cantSubTareas){
    throw new Error("se debe implementar el metodo calcCosto")
   }

   getName(){
    throw new Error("se debe implementar el metodo getName")
   }
}

// El costo en dinero de una tarea es igual al tiempo de la tarea multiplicado por un valor común y configurable para todas las complejidades.
class ConfigComplejidad{
    static #communValue = 10;
    static getCommunValue(){
        return ConfigComplejidad.#communValue
    }
    static setCommunValue(val){
    if (val < 0) return
    ConfigComplejidad.#communValue = val
  }
}

class UtilsComplejidad{
    // A su vez las tareas que tengan más de 3 subtareas directas asociadas tienen un costo extra del 4% por overhead.
    static shouldOverhead(cantSubTareas){ return cantSubTareas > 3}
}

// Además cada complejidad puede agregarle un porcentaje extra que se suma al costo.
// - Complejidad mínima: no agrega porcentaje extra.

class ComplejidadMinima extends AbsComplejidad{
    calcCosto(tiempo,cantSubTareas){
        let base = ConfigComplejidad.getCommunValue() * tiempo
        return UtilsComplejidad.shouldOverhead(cantSubTareas) ? base * 1.04 : base
    }
    getName(){return "minima"}
}

// - Complejidad media: agrega un 5% extra
class ComplejidadMedia extends AbsComplejidad{
    calcCosto(tiempo,cantSubTareas){
        let base = tiempo * ConfigComplejidad.getCommunValue() * 1.05
        return UtilsComplejidad.shouldOverhead(cantSubTareas) ? base * 1.04 : base
    }
    getName(){return "media"}
}

// - Complejidad máxima:
//   - Si el tiempo es menor o igual a 10 unidades entonces agrega un extra del 7%
//   - Si el tiempo es mayor a 10 unidades entonces agrega un extra del 7% más $1000 por cada día que la tarea exceda las 10 unidades.
class ComplejidadMaxima extends AbsComplejidad{
    calcCosto(tiempo,cantSubTareas){
        let base = tiempo * ConfigComplejidad.getCommunValue() * 1.07
        let total = tiempo <= 10 ? base : base + (tiempo - 10)*1000
        
        return UtilsComplejidad.shouldOverhead(cantSubTareas) ? total * 1.04 : total
    }
    getName(){return "maxima"}
}

const COMPLEJIDAD = {
  "minima": new ComplejidadMinima(),
  "media": new ComplejidadMedia(),
  "maxima": new ComplejidadMaxima()
}

module.exports = { COMPLEJIDAD };