import animales from "../consulta.js";

// diagrama de clases

//clase padre

class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;
  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get img() {
    return this.#img;
  }

  get sonido() {
    return this.#sonido;
  }

  get comentarios() {
    return this.#comentarios;
  }

  set comentarios(data) {
    this.#comentarios = data;
  }

  set sonido(data) {
    this.#sonido = data;
  }
}

export default Animal;
