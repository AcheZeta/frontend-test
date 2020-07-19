/* eslint-disable no-undef */
const text = 'Hola Mundo';
const fruits = ['banana', 'manzana', 'melon'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
});

test('Mayor qué', () => {
  expect(10).toBeGreaterThan(9);
});

test('Es Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (string, callback) => {
  callback(string.split('').reverse().join(''));
};

test('Probar un CallBack', () => {
  reverseString('Hola', (string) => {
    expect(string).toBe('aloH');
  });
});

const reverseString2 = (str) => new Promise((resolve, reject) => {
  if (!str) {
    reject(Error('Error'));
  }
  resolve(str.split('').reverse().join(''));
});

test('Probar una promesa', () => reverseString2('Hola')
  .then((string) => {
    expect(string).toBe('aloH');
  }));

test('Async & Await', async () => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
});

afterEach(() => console.log('Despues de Cada Prueba'));
afterAll(() => console.log('Despues de Todas'));
beforeEach(() => console.log('Antes de cada una'));
beforeAll(() => console.log('Antes de todas'));
