import {
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila,
} from "./clases/subclases_animal.js";

const enviarForm = document.querySelector("#btnRegistrar");

let listaAnimales = [];

enviarForm.addEventListener("click", (e) => {
  e.preventDefault();
  const nombreAnimal = document.querySelector("#animal").value;
  const aniosEdadAnimal = document.querySelector("#edad").value;
  const comentariosAnimal = document.querySelector("#comentarios").value;
  const imgAnimalbg = document.querySelector("#preview").style.backgroundImage;
  const imgAnimal = imgAnimalbg.slice(5, imgAnimalbg.length - 2);

  let nuevoAnimal;

  if (nombreAnimal === "Leon") {
    nuevoAnimal = new Leon(
      nombreAnimal,
      aniosEdadAnimal,
      imgAnimal,
      comentariosAnimal
    );
  } else if (nombreAnimal === "Lobo") {
    nuevoAnimal = new Lobo(
      nombreAnimal,
      aniosEdadAnimal,
      imgAnimal,
      comentariosAnimal
    );
  } else if (nombreAnimal === "Oso") {
    nuevoAnimal = new Oso(
      nombreAnimal,
      aniosEdadAnimal,
      imgAnimal,
      comentariosAnimal
    );
  } else if (nombreAnimal === "Serpiente") {
    nuevoAnimal = new Serpiente(
      nombreAnimal,
      aniosEdadAnimal,
      imgAnimal,
      comentariosAnimal
    );
  } else if (nombreAnimal === "Aguila") {
    nuevoAnimal = new Aguila(
      nombreAnimal,
      aniosEdadAnimal,
      imgAnimal,
      comentariosAnimal
    );
  }

  if (nombreAnimal && aniosEdadAnimal && imgAnimal && comentariosAnimal) {
    listaAnimales.push(nuevoAnimal);
    animalTable();
    resetForm();
  } else {
    document.querySelector(
      "#Animales"
    ).innerHTML = `<b><font style="color: white; font-size: 24px;">Faltan datos en el registro!</font></b>`;
  }
});

const animalTable = () => {
  const cardTemplate = document.querySelector("#Animales");
  cardTemplate.innerHTML = "";
  listaAnimales.forEach((e, i) => {
    cardTemplate.innerHTML += `
          <div class="card mx-2 my-1" style="width: 12rem;">
          <!-- MODAL TRIGGER --> 
          <a href="#modalAnimal-${i}" class="btn btn-light" 
              data-toggle="modal" data-target="#modalAnimal-${i}">
          <img src="${e.img}" class="card-img-top" alt="${e.nombre}"></a>
            <div class="card-body">
           
              <p class="card-text py-0 my-0">
              <button onclick="sonidoAnimal('${i}')" class="btn btn-dark w-100 my-0 py-1"> 
              <img height="20" src="assets/imgs/audio.svg" /> </button>
              </p>

            
          <!-- MODAL INTERIOR -->
    <div class="modal fade" id="modalAnimal-${i}">
    <div class="modal-dialog modal-dialog-centered w-25" role="document">
      <div class="modal-content bg-dark text-light">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${e.nombre}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <img src="${e.img}" class="img-fluid" alt="${e.nombre}">
        <br /> <br />
        <p><b>Edad:</b> ${e.edad}</p>
        <p><b>Comentarios:</b> ${e.comentarios}</p>
        </div>
      </div>
    </div>
  </div>
            
                    
    `;
  });
};

const resetForm = () => {
  const nombreAnimal = document.querySelector("#animal");
  const aniosEdadAnimal = document.querySelector("#edad");
  const comentariosAnimal = document.querySelector("#comentarios");
  const imgAnimalbg = document.querySelector("#preview");

  nombreAnimal.selectedIndex = 0;
  aniosEdadAnimal.selectedIndex = 0;
  comentariosAnimal.value = "";
  imgAnimalbg.style.backgroundImage = "url(/assets/imgs/lion.svg)";
};

window.sonidoAnimal = (i) => {
  const animal = listaAnimales[i];
  if (animal.nombre === "Leon") {
    animal.rugir();
  } else if (animal.nombre === "Lobo") {
    animal.aullar();
  } else if (animal.nombre === "Oso") {
    animal.grunir();
  } else if (animal.nombre === "Serpiente") {
    animal.sisear();
  } else if (animal.nombre === "Aguila") {
    animal.chillar();
  }
};
