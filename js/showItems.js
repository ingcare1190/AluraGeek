import { conexionAPI } from "./conexionAPI.js";
import { formatPrice } from "./formatPrices.js";

const itemsContainer = document.querySelector("[data-list]");

function crearCard(name, price, url, id) {
  const card = document.createElement("div");
  card.classList.add("producto");

  const newPrice = formatPrice(price);

  card.innerHTML = `<img
    class="imagen"
    src="${url}"
  />

  <div class="producto_info">
    <p>${name}</p>
    <div class="producto_valor">
      <p>${newPrice}</p>
      <img class="icono_eliminar" src="./extras/trash.svg" data-remove="true" data-id="${id}"/>
    </div>
  </div>`;

  return card;
}

export default async function showItems() {
  try {
    itemsContainer.innerHTML = "";
    const itemAPI = await conexionAPI.itemsList();
    
    if (itemAPI.length === 0) {
      itemsContainer.innerHTML = `<h2 class="mensaje__titulo">No hay productos para mostrar.</h2>`;
    }

    itemAPI.forEach((item) => {
      itemsContainer.appendChild(
        crearCard(item.name, item.price, item.image_url, item.id)
      );
    });
  } catch (error) {
    itemsContainer.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
  }
}

showItems();