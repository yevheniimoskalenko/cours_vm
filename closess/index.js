// function createCalc(x) {
//   return function(y){
//   return x * y
//   }
// }

// const calc = createCalc(2)(3)


// function createIncrement(n){
//   return function (num){
//     return n + num
//   }
// }

// const inc = createIncrement(2)
// console.log(inc(3))
// console.log(inc(5))
// const addTen = createIncrement(10)

// console.log(addTen(3))
// console.log(addTen(5))


// function urlGenerator(domain){
// return function(url){
//   return `http://${url}.${domain}`
// }
// }
// const com = urlGenerator('com')
// com('git')
// com('inctagram')
// console.log(com('git'))

// function logPerson (){
//   return `Person: ${this.name}, ${this.age}, ${this.job}`
// }
// const person1 = {name: 'Yevhenii', age:23, job: 'front-end'}
// const person2 = {name: 'Viktoria', age:20, job:'best front-end'}

// function binds(context,fn){
//   return function (...args){
//     return fn.apply(context,[args])
//   }
// }
// console.log(binds(person1, logPerson)())
// console.log(binds(person2, logPerson)())
// function mult(n){
//   const seven = 7
//   return function (m){
//     return seven*(n+m)
//   }
// }
// const mul = mult(10)
// const muls = mult(10)

// console.log(mul(4))
// console.log(muls(10))

let names = ['viktoria', 'yevhenii', 'zorina', 'sany', 'tamila'] //масив із іменами
let humens = [] //масив у якому буде обєкт із даними


function Humen(name,age,height){ // створюємо клас із даними через конструктор
this.name = name,
this.age = age,
this.height = height
}


Humen.prototype.rand = function(n,m){ //створили метод класа Humen-с який буде відавати випадкове число в заданому діапазоні
  return Math.round(Math.random() * (n-m) + m) // формула випадкового числа
}
for(let key in names){ //заповнюємо даними масив
  humens[key] = new Humen(names[Humen.prototype.rand(0, names.length - 1)], Humen.prototype.rand(18, 45), Humen.prototype.rand(150, 200))
}
function mySort(prop){ //функція сортування
  return function(obj1, obj2){
    return obj1[prop] - obj2[prop]
  }
}
console.log(humens.sort(mySort('age')))
