class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePriceByProductType(product) {
     const types = {
        'Mega Coverage': this.updateMegaCoverage,
        'Full Coverage': this.updateFullCoverage,
        'Special Full Coverage': this.updateSpecialFullCoverage,
        'Super Sale': this.updateSuperSale
     }

    return types[product.name] ? types[product.name](product) : this.normalUpdate(product);
  }

  updateMegaCoverage(product) {
    return product;
  }

  updateFullCoverage(product) {
    product.sellIn -= 1;

    if (product.price < 50)
      product.price += 1;

    return product;
  }

  updateSpecialFullCoverage(product) {
    product.sellIn -= 1;

    if (product.sellIn < 0) {
      product.price = 0;
      return product;
    }

    if (product.price < 50)
      product.price += 1;

    if (product.sellIn < 11 && product.price < 50)
        product.price += 1;

    if (product.sellIn < 6 && product.price < 50)
        product.price += 1;

    return product;
  }

  updateSuperSale(product) {
    product.sellIn -= 1;

    if (product.price > 0)
      product.price = Math.max(product.price - 2, 0);

    if (product.sellIn < 0 && product.price > 0)
      product.price = Math.max(product.price - 2, 0);

    return product;
  }

  normalUpdate(product) {
    product.sellIn -= 1;

    if (product.price > 0)
      product.price -= 1;

    if (product.sellIn < 0 && product.price > 0)
      product.price -= 1;

    return product;
  }

  updatePrice() {
    return this.products.map((product) => this.updatePriceByProductType(product));
  }

}

module.exports = CarInsurance;
