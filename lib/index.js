'use strict';

const singleton = Symbol('Singleton marker');
const singletonEnforcer = Symbol('singletonEnforcer');

/**
 * Singleton class
 * @type {Singleton}
 */
class Singleton {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error(`Singleton, direct create instance of "${this.constructor}" forbidden. please use \`instance\` getter`);
    }
    this.__initialize();
  }

  /**
   * Create & get the created singleton instance
   * @returns {Singleton}
   */
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new this(singletonEnforcer);
    }

    return this[singleton];
  }

  /**
  * This method is called when instance is created.
  * Override to use as constructor method.
  */
  __initialize() {}
}

module.exports = Singleton;
