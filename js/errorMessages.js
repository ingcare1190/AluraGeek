export const typeError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "stepMismatch",
  'rangeUnderflow'
];

export const messages = {
  nombre: {
    valueMissing: "Porfavor ingrese un nombre",
    tooShort: "Porfavor ingrese al menos de 3 caracteres al nombre",
  },
  precio: {
    valueMissing: "Porfavor ingrese un precio",
    stepMismatch: "Porfavor ingrese unicamente numeros enteros",
    rangeUnderflow: "El precio no puede ser 0"
  },
  url_imagen: {
    valueMissing: "Porfavor Ingrese una url",
    patternMismatch: "Por favor, ingresa una URL valida deun formato de imagen valido (jpg, png, webp o jpeg)",
  },
};
