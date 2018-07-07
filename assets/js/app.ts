console.log('connected!!')

// Test Code.
class Human {
  protected gender: string
  protected age: number
  constructor(gender: string, age: number) {
    this.gender = gender
    this.age = age
  }
  showDetail() {
    let ary: string[] = []
    console.log(`You're ${this.age} years old ${this.gender}`)
  }
}

class Person extends Human {
  name: string
  constructor(name: string, gender: string, age: number) {
    super(gender, age)
    this.name = name
  }
  sayHallo() {
    console.log(`Hello!! ${this.name}.`)
    this.showDetail()
  }
}

const bob = new Person('Bob', 'man', 28)
bob.sayHallo()
