import checkAllFields from "./displayError.js";

const inputs = [...document.querySelectorAll('input')]

export default function cleanInputs() {
  let resetForm = inputs.map(reset => reset.value = '')

  checkAllFields()
}

document.querySelector('.boton_limpiar').addEventListener('click', cleanInputs)