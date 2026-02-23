const saludar = require('./saludo');

test('saluda correctamente', () => {
  expect(saludar('Juan')).toBe('Hola Juan');
});