const chai = require('chai');
const calculations = require('../calculation');

chai.should();

describe('Menghitung diskon dalam desimal', () => {
    it('Diskon 20% (0.2)', () => {
      const total = calculations.Percent(20);
      total.should.equal(0.2);
    });
    it('Equals -4', () => {
      const total = calculations.Percent(-8, 4);
      total.should.equal(-4);
    });
  });
  
  describe('Menghitung nominal diskon', () => {
    it('Sama dengan 2000', () => {
      const total = calculations.Discount(0.2, 10000);
      total.should.equal(2000);
    });
    it('Equals 0', () => {
      const total = calculations.Discount(0, 0);
      total.should.equal(0);
    });
  });
  
  describe('Menghitung harga setelah diskon', () => {
    it('Sama dengan 8000', () => {
      const total = calculations.PriceAfterDiscount(2000, 10000);
      total.should.equal(8000);
    });
    it('Equals 0', () => {
      const total = calculations.PriceAfterDiscount(10, 0);
      total.should.not.equal(0);
    });
  });
  