/* global describe, it, before */

import chai from 'chai';
import {secp256k1} from '../dist/etherniti.min.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my secp256k1 library', () => {
  before(() => {
    lib = new secp256k1();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('secp256k1');
    });
  });
  describe('when I run the example', () => {
    it('it should be executed successfully', () => {
      let result = lib.example()
      expect(result).to.be.equal(true);
    });
  });
  describe('when I run the webassembly verify', () => {
    it('it should be executed successfully', () => {
      let result = lib.webassembly()
      expect(result).to.be.equal(true);
    });
  });
});
