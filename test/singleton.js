'use strict';
const expect = require('expect');
const proxyquire = require('proxyquire').noPreserveCache();

describe('invoking leo-singleton-class', () => {
  var Singleton;

  after(() => {
    proxyquire.preserveCache();
  });

  beforeEach(() => {
    Singleton = proxyquire.noCallThru().load('../lib/index',{});
  });

  describe('base class', () => {
    it('should throw an error if no instances have been created', () => {
      expect(function () {
        const item = Singleton.instance;
      }).toThrow(Error);
    });

    it('should return the created instance after creating a new one', () => {
      const mock = new Singleton();
      const item = Singleton.instance;
      expect(typeof item).toEqual('object');
    });

    it('should throw an error if constructor is called a second time', () => {
      const mock = new Singleton();
      expect(function () {
        const item = new Singleton();
      }).toThrow(Error);
    });
  });

  describe('extend', () => {
    it('should return an instance of the extended class', () => {
      class Mock extends Singleton {
        constructor(name) {
          super();
          this.name = name;
        }
      }

      const item = new Mock('mock');
      expect(item instanceof Singleton).toEqual(true);
      expect(item.name).toEqual('mock');
    });
  });
});
