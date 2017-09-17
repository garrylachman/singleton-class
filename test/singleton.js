'use strict';
const expect = require('expect');
const proxyquire = require('proxyquire').noPreserveCache();

describe('invoking leo-singleton-class', () => {
  let Singleton;

  after(() => {
    proxyquire.preserveCache();
  });

  beforeEach(() => {
    Singleton = proxyquire.noCallThru().load('../lib/index',{});
  });

  describe('base class', () => {
    it('should throw an error if creating the instance directly without enforcer', () => {
      expect(function () {
        const instance = new Singleton();
      }).toThrow(Error);
    });

    it('should return the created instance', () => {
      const item = Singleton.instance;
      expect(typeof item).toEqual('object');
    });

  });

  describe('extend', () => {
    it('should return an instance of the extended class', () => {
      class Mock extends Singleton {
        __initialize() {
          this.name = 'mock';
        }
      }

      const item = Mock.instance;
      expect(item instanceof Singleton).toEqual(true);
      expect(item.name).toEqual('mock');

      Mock.instance.name = 'mock2';
      expect(item.name).toEqual('mock2');
    });
  });
});
