const expect = require('chai').expect;

const CarInsurance = require('../src/CarInsurance');
const Product = require('../src/Product');

describe("CarInsurance", function() {

  it("CarInsurance sin productos", function() {
    const carInsurance = new CarInsurance();
    const products = carInsurance.updatePrice();
    expect(products[0]).equal(undefined);
  });

});

describe("Full Coverage", function() {

  it("Full Coverage", function() {
    const carInsurance = new CarInsurance([ new Product('Full Coverage', 10, 20) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(21);
  });

  it("Full Coverage maximo precio", function() {
    const carInsurance = new CarInsurance([ new Product('Full Coverage', 10, 50) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(50);
  });

});

describe("Special Full Coverage", function() {

  it("Special Full Coverage", function() {
    const carInsurance = new CarInsurance([ new Product('Special Full Coverage', 30, 20) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(29);
    expect(products[0].price).equal(21);
  });

  it("Special Full Coverage maximo precio", function() {
    const carInsurance = new CarInsurance([ new Product('Special Full Coverage', 4, 50) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(3);
    expect(products[0].price).equal(50);
  });

  it("Special Full Coverage sellIn < 11", function() {
    const carInsurance = new CarInsurance([ new Product('Special Full Coverage', 8, 40) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(7);
    expect(products[0].price).equal(42);
  });

  it("Special Full Coverage sellIn < 6", function() {
    const carInsurance = new CarInsurance([ new Product('Special Full Coverage', 3, 40) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(43);
  });

  it("Special Full Coverage sellIn < 0", function() {
    const carInsurance = new CarInsurance([ new Product('Special Full Coverage', -1, 40) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(0);
  });

});

describe("Mega Coverage", function() {

  it("Mega Coverage", function() {
    const carInsurance = new CarInsurance([ new Product('Mega Coverage', 10, 80) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(80);
  });

  it("Mega Coverage sellIn < 0", function() {
    const carInsurance = new CarInsurance([ new Product('Mega Coverage', -1, 80) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(80);
  });


});

describe("Normal product", function() {

  it("Normal product", function() {
    const carInsurance = new CarInsurance([ new Product('Normal product', 10, 40) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Normal product");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(39);
  });

  it("Normal product minimo precio", function() {
    const carInsurance = new CarInsurance([ new Product('Normal product', 10, 0) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Normal product");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(0);
  });

  it("Normal product sellIn < 0", function() {
    const carInsurance = new CarInsurance([ new Product('Normal product', -1, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Normal product");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(8);
  });

});

describe("Super Sale", function() {

  it("Super Sale", function() {
    const carInsurance = new CarInsurance([ new Product('Super Sale', 10, 40) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(38);
  });

  it("Super Sale minimo precio", function() {
    const carInsurance = new CarInsurance([ new Product('Super Sale', 10, 0) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(0);
  });

  it("Super Sale sellIn < 0", function() {
    const carInsurance = new CarInsurance([ new Product('Super Sale', -1, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(6);
  });

});
