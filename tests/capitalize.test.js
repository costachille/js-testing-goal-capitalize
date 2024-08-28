// Ручные утверждения

// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

/* import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!'); */

// Модуль assets

import { strict as assert } from 'assert';

assert.strictEqual('hello', 'hello');

assert.strictEqual({}, {}); // ошибка
assert.deepStrictEqual({}, {});

assert.deepStrictEqual({ key: 'value' }, { key: 'value' });
assert.deepEqual({ key: 'value' }, { key: 'value' });
assert.deepEqual({ key: 'value' }, { key: 'another value' }); // ошибка

assert.notStrictEqual('hello', 'world');
assert.notDeepStrictEqual({ a: 1 }, { a: '1' });

console.log('Все тесты пройдены!');
