const Proyecto = require("./Proyecto");
const proyecto = require("./Proyecto");


const { Tarea, TareaCompuesta, COMPLEJIDAD } = require("./Tareas");

const t1 = new Tarea({codigo: "1",duracion: 3});
const t2 = new TareaCompuesta({codigo: "2",duracion: 5,
  tareas: [
    new Tarea({codigo: "2.1",duracion: 6}),
    new TareaCompuesta({codigo: "2.2",duracion: 8,
      tareas: [
        new Tarea({codigo: "2.2.1",duracion: 20}),
        new Tarea({codigo: "2.2.2",duracion: 4})
      ]
    })
  ]
});

const t3 = new TareaCompuesta({codigo: "3",duracion: 7,
  tareas: [
  new Tarea({codigo: "3.1",duracion: 6}),
  new Tarea({codigo: "3.2",duracion: 3})
]});

proyecto.agregarTarea(t1,t2,t3);
proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracionTotal()}, Costo Total: ${proyecto.getCostoTotal()}`);