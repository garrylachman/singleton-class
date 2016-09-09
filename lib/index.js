'use strict';

const singleton = Symbol();

/**
 * Singleton class
 * @type {Singleton}
 */
class Singleton {
  constructor() {
    const Class = this.constructor;

    if (Class[singleton]) {
      throw new Error(`Can\'t create multiple instances of "${Class.name}", use \`instance\` getter`);
    } else {
      Class[singleton] = this;
    }

    return Class[singleton];
  }

  /**
   * Get the created singleton instance
   * @returns {Singleton}
   */
  static get instance() {
    if (!this[singleton]) {
      throw new Error(`No "${this.name}" instances created`);
    }

    return this[singleton];
  }
}

module.exports = Singleton;
