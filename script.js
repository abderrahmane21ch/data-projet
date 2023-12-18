function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
    // hawlik exemple:
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbersArray);
  console.log(evenNumbers);
  function Person(age, name, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
  }
    // hawlik exemple:
  const peopleArray = [
    new Person("said", 26, "said@example.com"),
    new Person("Bob", 31, "bob@example.com"),
    new Person("jamal", 28, "jamal@example.com"),
    new Person("fawzi", 24, "fawzi@example.com")
  ];
  
  const peopleOver30 = filterPeopleOver30(peopleArray);
  console.log(peopleOver30);
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  // hawlik exemple:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); 
  console.log(stack.peek()); 
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // hawlik exemple:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue()); 
  console.log(queue.front()); 
 
  function removeVowels(inputString) {
    return inputString.replace(/[aeiouAEIOU]/g, '');
  }
  
  function mergeUniqueArrays(array1, array2) {
    const mergedArray = [...new Set([...array1, ...array2])];
    return mergedArray;
  }
  
  // hawlik exemple
  const array1 = [10, 20, 30];
  const array2 = [30, 40, 50];
  const uniqueMergedArray = mergeUniqueArrays(array1, array2);
  console.log(uniqueMergedArray);
  
  
  