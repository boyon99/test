const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;


// 리팩토링 후
// 의존성 역전 원칙을 적용하여 ProductService 클래스의 의존성을 역전시킨다.
