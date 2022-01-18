import animales from "./consulta.js";

// formulario
const selector = document.querySelector("#animal");

// cambiar img al seleccionar animal
selector.addEventListener("change", async (e) => {
  const promesaAnimales = await animales.getData();
  const arrAnimales = promesaAnimales["animales"];
  const selectedAnimal = e.target.value;
  const setImg = () => {
    const img = arrAnimales.find((e) => e.name === selectedAnimal).imagen;
    const div = document.querySelector("#preview");
    div.style.backgroundImage = `url('./assets/imgs/${img}')`;
  };
  setImg();
});
