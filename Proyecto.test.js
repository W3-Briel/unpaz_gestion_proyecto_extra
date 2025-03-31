const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta, COMPLEJIDAD } = require("./Tareas");

describe("Duracion Proyecto", () => {
  let t1;
  let t2;
  let t3;

  beforeEach(() => {
    t1 = new Tarea({codigo:"1",duracion: 3});
    t2 = new TareaCompuesta({codigo:"2",duracion: 5,
      tareas: [
        new Tarea({codigo: "2.1", duracion: 6}),
        new TareaCompuesta({codigo: "2.2", duracion: 8,
          tareas: [
            new Tarea({codigo: "2.2.1", duracion: 3}),
            new Tarea({codigo: "2.2.2", duracion: 4})
          ]
        })
      ]
    });

    t3 = new TareaCompuesta({codigo: "3", duracion: 7,
      tareas: [
        new Tarea({codigo: "3.1", duracion: 6}),
        new Tarea({codigo: "3.2", duracion: 3})
      ]
    });


    proyecto.agregarTarea(t1);
    proyecto.agregarTarea(t2);
    proyecto.agregarTarea(t3);
  });

  afterEach(() => {
    proyecto.cleanTareas();
  });

  test("La duración total de la tarea 1 debería ser 3", () => {
    expect(t1.getDuracion()).toBe(3);
  });

  test("La duración total de la tarea 2 debería ser 26", () => {
    expect(t2.getDuracion()).toBe(26);
  });

  test("La duración total de la tarea 3 debería ser 16", () => {
    expect(t3.getDuracion()).toBe(16);
  });

  test("La duración total del proyecto debería ser 45", () => {
    expect(proyecto.getDuracionTotal()).toBe(45);
  });
});
