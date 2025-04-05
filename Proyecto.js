class Proyecto {
  tareas;
  constructor() {
    this.tareas = [];
  }

  agregarTarea(...tarea) {
    this.tareas.push(...tarea);
  }

  cleanTareas() {
    this.tareas = [];
  }

  getDuracionTotal() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }
  getCostoTotal() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getCosto(), 0);
  }

  mostrarTareas() {
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = new Proyecto();
