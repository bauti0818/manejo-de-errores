const convertirUnidades = require('../ejercicio.js');

/* Tests */

describe('convertirUnidades', () => {
  // Casos de prueba exitosos
  test('10 centimetros a pulgadas', () => {
    expect(convertirUnidades(10, 'centimetros', 'pulgadas')).toBeCloseTo(3.94, 2); // 10 cm = 3.94 pulgadas
  });

  test('5 pulgadas a centimetros', () => {
    expect(convertirUnidades(5, 'pulgadas', 'centimetros')).toBeCloseTo(12.7, 2); // 5 pulgadas = 12.7 cm
  });

  // Casos de prueba con unidades inválidas o iguales
  test('unidades no válidas', () => {
    expect(() => convertirUnidades(10, 'metros', 'pulgadas')).toThrowError();
  });

  test('unidades iguales', () => {
    expect(() => convertirUnidades(5, 'pulgadas', 'pulgadas')).toThrowError();
  });

  // Casos de prueba con cantidad negativa o no numérica
  test('cantidad negativa', () => {
    expect(() => convertirUnidades(-5, 'centimetros', 'pulgadas')).toThrowError();
  });

  test('cantidad no numérica', () => {
    expect(() => convertirUnidades('abc', 'centimetros', 'pulgadas')).toThrowError();
  });
});
