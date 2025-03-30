// aplicar jsdocs


class AbsComplejidad{
    constructor(){
     if (new.target === AbsComplejidad) {
       throw new Error("No se puede instanciar una clase abstracta directamente")
     }
   }
 
   calcCosto(tiempo){
    throw new Error("se debe implementar el metodo calcCosto")
   }
   shouldOverhead(cantSubTareas){
    throw new Error("se debe implementar el metodo shouldOverhead")
   }
}

// El costo en dinero de una tarea es igual al tiempo de la tarea multiplicado por un valor común y configurable para todas las complejidades.
class ComplejidadCosto{
    static #communValue = 0;
    
    static getCommunValue(){
        return ComplejidadCosto.#communValue
    }
    static setCommunValue(val){
    if (val < 0) return
    ComplejidadCosto.#communValue = val
  }
}

// Además cada complejidad puede agregarle un porcentaje extra que se suma al costo.
// - Complejidad mínima: no agrega porcentaje extra.
// A su vez las tareas que tengan más de 3 subtareas directas asociadas tienen un costo extra del 4% por overhead.

// - Complejidad media: agrega un 5% extra
class ComplejidadMedia extends AbsComplejidad{
    calcCosto(tiempo){
        let base = tiempo * ComplejidadCosto.getCommunValue()
        return base * 1.05
    }
    shouldOverhead(){}
}


// - Complejidad máxima:
//   - Si el tiempo es menor o igual a 10 unidades entonces agrega un extra del 7%
//   - Si el tiempo es mayor a 10 unidades entonces agrega un extra del 7% más $1000 por cada día que la tarea exceda las 10 unidades.
class ComplejidadMaxima extends AbsComplejidad{
    calcCosto(tiempo){
        let base = tiempo * ComplejidadCosto.getCommunValue() * 1.07
        return tiempo <= 10 ? base : base + (tiempo - 10)*1000
    }
    shouldOverhead(){}
}