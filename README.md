# Singleton Class Extended

Based on [singleton-class](https://github.com/LeoGears/singleton-class).
The main change is remove the class initialize (new MyClass). The instance created on first \`instance\` getter call.
The constructor logic moved to `__initialize` method.

Only allows one instance of the singleton to be created

## Usage

* `npm install --save singleton-class-extended`
* Extend the `Singleton` class with your own

```javascript
const Singleton = require('singleton-class-extended');

class MyClass extends Singleton {
  __initialize(){
    // Use this method as constructor
    this.name = 'bob';
    // Do other things
  }
}

console.log(MyClass.instance.name);
```
