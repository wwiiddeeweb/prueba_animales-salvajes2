import Animal from "./animal.js";

// sub-clases

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.sonido = this.rugir;
  }

  rugir() {
    const player = document.querySelector("#player");
    player.setAttribute("src", "/assets/sounds/Rugido.mp3");
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
    player.setAttribute("src", "/assets/sounds/Aullido.mp3");
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
    player.setAttribute("src", "/assets/sounds/Gruñido.mp3");
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
    player.setAttribute("src", "/assets/sounds/Siseo.mp3");
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
    player.setAttribute("src", "/assets/sounds/Chillido.mp3");
    player.play();
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
