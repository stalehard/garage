
import { Person } from "./Person"

const person = new Person("Ivan")

setInterval(() => {
    person.sayName()
}, 100)