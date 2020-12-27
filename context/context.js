function hello(){
  console.log(this.name)
}
const viktoria = {
  name: 'viktoria',
  experiance: 20
}

const person = {
  name: 'John',
  age: 12,
  seyHello: hello,
  seyHi: hello.bind(viktoria),
  logInfo: function(job){
console.log(this.name)
console.log(job)
  }
}
// person.logInfo.bind(viktoria, 'front-end')()
// (person.logInfo) - забираемо функцію в обєкта, методом bind створюємо нову функцію і передаемо context обєкт вікторія, він таккож приймає аргументи для передачі
// person.logInfo.call(viktoria, 'front-end')
// person.logInfo.apply(viktoria, ['front-end'])

// hello.bind(viktoria)()


const obj = {
  name: 'yevheniimoskalenko',
  fullName: function(){
  
   return this
  }
}

const obk = obj.fullName.apply(viktoria, [])
console.log(obk)
const arr = [1,4,6,8,0,3]

Array.prototype.mulyBy = (n) =>{
  return this.map(el=> el* n)
}



function bonjur (){
console.log(this)
}


const french = {
  language: 'fr',
  name: 'Viktoria',
  hi: bonjur.bind(obj)
}


const Animal = function(options){
  this.name = options.name
}
Animal.prototype.voice = function() {
  console.log(this.name)
}

const dog =new Animal({name: 'Dog'})


const Cat = function(options){ 
  Animal.apply(this, arguments) // ми взяли класс Animal і передали в якості контексту наш конструктор
  this.hasTail = options.hasTail,
  this.age = options.age
  this.height = function(){
    console.log(this)
  }
}

Cat.prototype = Object.create(Animal.prototype)// увесь прототип який був у класі Animal добавили в прототип Cat
  Cat.prototype.constuctor = Cat

Cat.prototype.old = function(){
  return this.age * 5
}
const marfa = new Cat({name: 'Marfa', hasTail: true, age: 4})


