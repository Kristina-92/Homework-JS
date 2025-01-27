class Animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }

  animalName() {
    console.log(`This animal is a ${this.name}`);
  }

  animalEat() {
    console.log(`${this.name} eats ${this.food}`);
  }
}

class Dog extends Animal {
  constructor(name, food, noise) {
    super(name, food);
    this.noise = noise;
  }

  bark() {
    console.log(`${this.name} ${this.noise}`);
  }
}

const dog = new Dog("Dog", "meat", "bark");
const animal = new Animal("Cat", "fish");

dog.animalName();
dog.animalEat();
dog.bark();

animal.animalEat();
animal.animalName();
