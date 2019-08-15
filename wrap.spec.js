const {expect} =require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Wrap should be a function', () => {
        expect(wrap).to.be.a('function');
    });
    it('Returns a string', () => {
        expect(wrap('cat', 4)).to.be.a('string');
    });
    it('Returns empty string if empty string was provided', () => {
      expect(wrap("", 10)).to.equal("");
    });
    it('Returns the same string if "line" is a one word string', () => {
      expect(wrap('cat', 4)).to.equal('cat');
      expect(wrap('cat', 2)).to.equal('cat');
    });
    it('inserts a new line at the closest index with a space', () => {
        expect(wrap('cat dog', 3)).to.equal('cat\ndog');
        expect(wrap('cat dog mouse', 9)).to.equal('cat dog\nmouse');  
    });
    it('Returns multiple new lines at the closest index with a space for each new line', () => {
        expect(wrap('I have a new cat named Simba. And he is a good cat', 13)).to.equal('I have a new\ncat named\nSimba. And he\nis a good cat');
    })
  });