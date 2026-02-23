const saludar = require('./saludo');
/** 
test('saluda correctamente', () => {
  expect(saludar('Juan')).toBe('Hola Juan');
});*/

test('saluda invitado si no hay nombre', () => {
  expect(saludar()).toBe('Hola invitado');
});