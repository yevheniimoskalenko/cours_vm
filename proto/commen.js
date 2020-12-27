// const animal = {
//   eat: true
// }
// const rabbit = {
//   jump: true
// }
// rabbit.__proto__ = animal // переносимо обєкт animal в прото rabbit

// for(let key in rabbit){
//   console.log(key)
// }
// прототип це визначений яки присутній в батьківськом елементі. і за допомогою його ми можемо устпадковуваться від разних обектів і дає доступ до розширеним функціям
const person = {
  name: 'Yevhenii',
  age:23,
  greet: function(){
    console.log('greet!')
  }
}

Object.prototype.seyHello = function(){
  console.log('good!')
}
// прототип это определений обект который присутствует в обектов и он вызивается по цепочке сверху вниз, то есть если мы находим какие-то поля на верхнем уровне или функции


const viktoria = Object.create(person) // таким чином ми передали в обєкт viktoria прототип обєкта person і тепер їй доступні методи і властивості Person 



const yevhenii = new Number(1)

// прототип это некий обєкт с помощью которого мы расширяем свойства обектов или классов и с помощью него и с помощью него мы можем устраивать определеное наследование внутри js 
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
Array.prototype.MultyBy = function(n) {
  return this.map(el=> el*n)
}

Array.prototype.tets = ['test']

var rabbit = new Rabbit('te');
Rabbit.prototype = {};

const arr = []


// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

Number.prototype.plus = function(value){
  return this + value
}
Number.prototype.minus = function(value){
  return this - value
}
function getStr() {

	return [].slice.call(arguments, 1).join(arguments[0])
}