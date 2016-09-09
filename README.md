# Singleton Class

Singleton class to be extended from to create other singletons

## Usage

* `npm install --save @leogears/leo-singleton-class`
* Extend the `Singleton` class with your own

```javascript
const Singleton = require('@leogears/leo-singleton-class');

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
