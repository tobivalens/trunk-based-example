

function saludar(nombre) {
  if (!nombre) return "Hola invitado";
  return `Hola ${nombre}`;
}

module.exports = saludar;