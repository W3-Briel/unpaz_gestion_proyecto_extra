/**
 * clase abstracta para ser utilizada como interfaz por las complejidades
*/
class AbsComplejidad {
    constructor() {
        if (new.target === AbsComplejidad) {
            throw new Error("No se puede instanciar una clase abstracta directamente")
        }
    }

    calcCosto(tiempo, cantSubTareas) {
        throw new Error("se debe implementar el metodo calcCosto")
    }

    getName() {
        throw new Error("se debe implementar el metodo getName")
    }
}

/**
 * clase para centralizar utilidades que se usaran en las complejidades.
*/
class UtilsComplejidad {
    /**
     * conocer si se deberia aplicar un recargo por Overhead
     * 
     * @param {number} cantSubTareas - cantidad de subtareas que posee una tarea
     * @returns {boolean} - True si se deberia aplicar cargos extras
    */
    static shouldOverhead(cantSubTareas) { return cantSubTareas > 3 }
}

/**
 * clase con la configuracion de las complejidades, por defecto el valor
 * del communValue es 10.
 * 
 * @default {number} #Communvalue = 10
*/
class ConfigComplejidad {
    static #communValue = 10;
    static getCommunValue() {
        return ConfigComplejidad.#communValue
    }
    static setCommunValue(val) {
        if (val < 0) return
        ConfigComplejidad.#communValue = val
    }
}

class ComplejidadMinima extends AbsComplejidad {
    calcCosto(tiempo, cantSubTareas) {
        let base = ConfigComplejidad.getCommunValue() * tiempo
        return UtilsComplejidad.shouldOverhead(cantSubTareas) ? base * 1.04 : base
    }
    getName() { return "minima" }
}

class ComplejidadMedia extends AbsComplejidad {
    calcCosto(tiempo, cantSubTareas) {
        let base = tiempo * ConfigComplejidad.getCommunValue() * 1.05
        return UtilsComplejidad.shouldOverhead(cantSubTareas) ? base * 1.04 : base
    }
    getName() { return "media" }
}

class ComplejidadMaxima extends AbsComplejidad {
    calcCosto(tiempo, cantSubTareas) {
        let base = tiempo * ConfigComplejidad.getCommunValue() * 1.07
        let total = tiempo <= 10 ? base : base + (tiempo - 10) * 1000

        return UtilsComplejidad.shouldOverhead(cantSubTareas) ? total * 1.04 : total
    }
    getName() { return "maxima" }
}

const COMPLEJIDAD = {
    "minima": new ComplejidadMinima(),
    "media": new ComplejidadMedia(),
    "maxima": new ComplejidadMaxima()
}


module.exports = { COMPLEJIDAD };