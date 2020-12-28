console.log('start'); // з початку програма біжить по рядкам коду і виконує
console.log('start 2'); // з початку програма біжить по рядкам коду і виконує

function timeout2() {
  // функція для setTimeout
  console.log('1 seconds');
}
function getInteger(a, b) {
  console.log(a + b);
}
getInteger(3, 4);

(function test() {
  return setTimeout(() => console.log('hi'), 0);
})();

window.setTimeout(timeout2, 1000); // виконує функцію через 2000 мс.
// коли інтерпритатор доходить до рядка із setTimeout то він закидає увесь setTimeout в стек виконання і разом із функцію. і потім він починає дивитися, що знаходиться в ньому в ньому, бачить що знаходиться setTimeout (це браузерний API) він викидає його із стека тобто setTimeout і тільки реєструє функцію в browser api, і потім він чикає коли виконає стороній API (brawser) setTimeout буде виконаний, то функція попадає в чергу, де знаходяться його друзі асінхрони) і виходить, що функція уже готова на виконання вона чикає своєї черги в callback queue(тобто в цикл), з друзями асінхронами і уже потім після виконання всих прочитаних рядків у програмі(в коді) і після цього вони її кладуть до call stack
setTimeout(() => {
  console.log(`insaide timeout, after 5000 seconds...`);
}, 5000);

window.setTimeout(() => console.log('2 sec'), 2000);

console.log('end');
