class Person {
    name: string 

    constructor(name: string) {
        this.name = name
    }

    sayName() {
       console.log(this.name)
    }
}

export { Person }