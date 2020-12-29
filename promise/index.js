// console.log('work');
// // Що таке promise - це call back функція яка повертає 2 нові функції resolve тобто (успіх), reject(помилка).
// // Проміс створений для асинхроних запитів(тобто там де потрібно чекати результату)
// const p = new Promise((resolve, reject) => {
//   // при створені promise він буде чикати викконаня і в then поверне результат виконання проміса
//   console.log('pending');
//   setTimeout(() => {
//     const response = { server: 'http://localhost', port: 3000 };
//     resolve(response);
//   }, 2000);
// });
// p.then((data) => {
//   // в then передали resolve а саме на даний момент response який ми може обробити.
//   //  на даний момент ми повертаємо новий promise, і змнінюємо
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modefined = true; // отриману data ми модифікували
//       resolve(data); // а потім відправили її назад
//     }, 1000); // через 1сек.
//   });
// });
// // тепер ми можемо знову отримати (then) з даними, або з помилкою (catch), finally буде виконаний в будь-якому випадку
// p.then((s) => console.log(s)) // закінчилося виконувати асинхрону задачу успішно і повернула результат
//   .catch((e) => console.log(e)) // закінчилося виконувати асинхрону задачу з помилкою і повернула результат
//   .finally(() => console.log('finally')); // буде виконаний в будь-якому випадку

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${ms} ms`), ms);
  });
};
// sleep(5000).then((s) => console.log(s));
// sleep(2000).then((s) => console.log(s));

// Promise.all його задача  полягає в тому що він чекає коли виконається всі задачі з асінхроним.  і поверне результат (then, catch, finally)
// Promise.all([sleep(2000), sleep(5000)]).then((res) => console.log(res));
// Promise.all його задача  полягає в тому що він чекає коли виконається переша задача з асінхроним.  і поверне результат (then, catch, finally)
// Promise.race([sleep(2000), sleep(5000)]).then((res) => console.log(res));

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// коли ми створюємо нову функцію вона повина повернути що не буть
// якщо ні то поверне результат undefined
// коли ми робемо return new promise нам стає доступний (then,catch,finally) в функції
// function getTodos(url) {
//   return new Promise((resolve) => {
//     fetch(url).then((res) => resolve(res.json()));
//   });
// }

// // getTodos(url).then((r) => console.log(r));
// (async function () {
//   try {
//     const data = await fetch(url).then((res) => res.json());
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// })().then((res) => console.log(res));
