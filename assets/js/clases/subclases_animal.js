import Animal from "./animal.js";

// sub-clases

const baseGHPages = "/prueba_animales-salvajes2/";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.sonido = this.rugir;
  }

  rugir() {
    const player = document.querySelector("#player");
    player.setAttribute("src", `${baseGHPages}/assets/sounds/Rugido.mp3`);
    player.play();
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.sonido = this.aullar;
  }

  aullar() {
    const player = document.querySelector("#player");
    player.setAttribute("src", `${baseGHPages}/assets/sounds/Aullido.mp3`);
    player.play();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.sonido = this.grunir;
  }

  grunir() {
    const player = document.querySelector("#player");
    player.setAttribute("src", `${baseGHPages}/assets/sounds/Grunido.mp3`);
    player.play();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.sonido = this.sisear;
  }

  sisear() {
    const player = document.querySelector("#player");
    player.setAttribute("src", `${baseGHPages}/assets/sounds/Siseo.mp3`);
    player.play();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.sonido = this.chillar;
  }

  chillar() {
    const player = document.querySelector("#player");
    player.setAttribute("src", `${baseGHPages}/assets/sounds/Chillido.mp3`);
    player.play();
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
