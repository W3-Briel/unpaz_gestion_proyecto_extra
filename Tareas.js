const { mostrarTareas } = require("./Proyecto");

class Tarea {
  constructor({codigo,duracion,complejidad}) {
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

  getComplejidad(){
    return this.complejidad.calc(dias)
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - complejidad: ${this.complejidad}`);
  }
}

let tarea1 = new Tarea({codigo: "1.2.12",duracion: 10, complejidad: "locura"})

// class TareaCompuesta {
//   constructor(codigo, duracion, tareas = []) {
//     this.codigo = codigo;
//     this.duracion = duracion;
//     this.tareas = tareas;
//   }

//   getDuracion() {
//     return this.tareas.reduce(
//       (acum, tarea) => acum + tarea.getDuracion(),
//       this.duracion
//     );
//   }

//   getCodigo() {
//     return this.codigo;
//   }

//   mostrarTarea() {
//     console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
//     this.tareas.forEach((tarea) => tarea.mostrarTarea());
//   }
// }

// module.exports = { Tarea, TareaCompuesta };
