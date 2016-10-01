# Singleton Class

Gears of Leo Singleton class to be extended from to create other singletons.

Only allows one instance of the singleton to be created

## Usage

* `npm install --save singleton-class`
* Extend the `Singleton` class with your own

```javascript
const Singleton = require('singleton-class');

class MyClass extends Singleton {
  constructor(name){
    super();
    this.name = name;
    // Do other things
  }
}

const item = new MyClass('bob');
console.log(item.name); // bob
```
