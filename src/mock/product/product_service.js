// 의존성 역전 원칙을 적용한 ProductService
// 의존성 역전 원칙을 적용하면 테스트 코드에서는 ProductClient의 구현에 대해 알 필요가 없다.
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
