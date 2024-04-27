// STEP 1
//named declaration
class Cat {
    constructor(name) {
        this.name = name 
        console.log(`${name} is the cat.`)
    }
}
//anonymous declaration.
let Dog = class {
    constructor(name) {
        this.name = name
        console.log(`${name} is the dog`)
    }
}


//STEP 2
    let myCat = new Cat("Cindy")
    let myDog = new Dog("Tommy")

// STEP 3
// class Animal {
//     constructor() {
//       console.log("The Animal has been created")
//     }
//   }
  

// STEP 4
// class Animal {
//     constructor(msg) {
//       console.log(msg)
//     }
//   }
//   let animal1 = new Animal("The Animal has been created")

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type
//       this.breed = breed
//       this.color = color
//       this.height = height
//       this.length = length
//     }
// }
// let myAnimal = new Animal("Cat", "Siamese", "Brown", "25cm", "50cm")

// STEP 6
// for (const property in myAnimal) {
//         console.log(`${property}: ${myAnimal[property]}`)
//   }

// STEP 7
/* class Animal {
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height = height
      this.length = length
    }
    speak() {
        if (this.type === "dog") {
            console.log(`The ${this.color} dog is barking!`)
          } else if (this.type === "cat") {
            console.log(`The ${this.color} cat is meowing!`)
          } else {
            console.log("Unknown animal type")
          }
    }   
}
let cat = new Animal("cat", "Siamese", "white", "25cm", "50cm")
let dog = new Animal("dog", "Golden Retriever", "brown", "25cm", "50cm")
cat.speak()
dog.speak() */


// STEP 8
/* class Animal {
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height = height
      this.length = length
    }
    speak() {
        if (this.type === "dog") {
            console.log(`The ${this.color} dog is barking!`)
          } else if (this.type === "cat") {
            console.log(`The ${this.color} cat is meowing!`)
          } else {
            console.log("Unknown animal type")
          }
    }   
}
let cat = new Animal("cat", "Siamese", "white", "25cm", "50cm")
let dog = new Animal("dog", "Golden Retriever", "brown", "25cm", "50cm")
cat.speak()
dog.speak()
 */
// STEP 9
/* String.prototype.findWords = function(word) {
    const matches = this.match(new RegExp(word, 'gi'))
    console.log(matches)
    let count;
    if (matches) {
    count = matches.length;
    } else {
    count = 0;
    }
    console.log('count: ' + count)
    // alert(`The word "${word}" was found ${count} time(s) in the paragraph.`)
    console.log(`The word "${word}" was found ${count} time(s) in the paragraph.`)

  }
  const text = "This is an example paragraph. The word 'example' appears multiple times in this example."
  text.findWords("example") */