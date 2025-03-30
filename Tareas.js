const { COMPLEJIDAD } = require("./Complejidad")

class Tarea {
  constructor({codigo,duracion,complejidad = COMPLEJIDAD.minima}) {
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

  getCosto(){
    return this.complejidad.calcCosto(this.duracion,0)
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - complejidad: ${this.complejidad.getName()} - Costo: ${this.getCosto()}`);
  }
}

class TareaCompuesta {
  constructor({codigo, duracion, tareas = [],complejidad = COMPLEJIDAD.minima}) {
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

  getCosto(){
    let base = this.complejidad.calcCosto(this.duracion, this.tareas.length)
    return this.tareas.reduce(
      (acum, t)=> acum + t.getCosto(),
      base);
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - complejidad: ${this.complejidad.getName()} - Costo: ${this.getCosto()}`)
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

/////////////////////////////////////////////////////////
// let tarea1 = new Tarea({
//   codigo: "1.2.12",
//   duracion: 10,
//   complejidad: COMPLEJIDAD.media
// })

// let tarea2 = new TareaCompuesta({
//   codigo: "1.3.4.5",
//   tareas: [tarea1,tarea1,tarea1],
//   duracion: 10,
//   complejidad: COMPLEJIDAD.maxima
// })

module.exports = { Tarea, TareaCompuesta, COMPLEJIDAD}