class Person {
    name: string 

    constructor(name: string) {
        this.name = name
    }

    sayName() {
       console.log(this.name)
    }
}


const person = new Person('Vasya')

setInterval(() => {
    person.sayName()
}, 100)