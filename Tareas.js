const { COMPLEJIDAD } = require("./Complejidad")

class Tarea {
  constructor({ codigo, duracion, complejidad = COMPLEJIDAD.minima }) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    return this.complejidad.calcCosto(this.duracion, 0)
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - complejidad: ${this.complejidad.getName()} - Costo: ${this.getCosto()}`);
  }

  /**
   * cambiar la complejidad de la tarea a minima
  */
  changeToMin() { this.complejidad = COMPLEJIDAD.minima }
  /**
   * cambiar la complejidad de la tarea a media
  */
  changeToMed() { this.complejidad = COMPLEJIDAD.media }
  /**
   * cambiar la complejidad de la tarea a maxima
  */
  changeToMax() { this.complejidad = COMPLEJIDAD.maxima }
}

class TareaCompuesta {
  constructor({ codigo, duracion, tareas = [], complejidad = COMPLEJIDAD.minima }) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad = complejidad
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    let base = this.complejidad.calcCosto(this.duracion, this.tareas.length)
    return this.tareas.reduce(
      (acum, t) => acum + t.getCosto(),
      base);
  }

  mostrarTarea() {
    console.group(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - complejidad: ${this.complejidad.getName()} - Costo-branch: ${this.getCosto()}`)
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
    console.groupEnd()
  }

  /**
   * cambiar la complejidad de la tarea a minima
   */
  changeToMin() { this.complejidad = COMPLEJIDAD.minima }
  /**
   * cambiar la complejidad de la tarea a media
  */
  changeToMed() { this.complejidad = COMPLEJIDAD.media }
  /**
   * cambiar la complejidad de la tarea a maxima
  */
  changeToMax() { this.complejidad = COMPLEJIDAD.maxima }
}

module.exports = { Tarea, TareaCompuesta, COMPLEJIDAD }