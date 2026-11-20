import { log } from "console"

const person = {
  id: 1,
  names: 'Sophia',
  age: 19
}

const fruits = ['banana', 'apple', 'mango', 'cashew nut']

const [fruit1, fruit2, fruit3, madman] = fruits
const {names, age} = person
console.log(names)
console.log(age)

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
console.log(madman)
