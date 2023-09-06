// mock을 사용하지 않고 stub을 사용하여 ProductService 클래스의 fetchAvailableItems 메서드를 테스트하는 것이 좋다.
// mock은 테스트 대상이 아닌 객체를 모킹하는 것이고, stub은 테스트 대상이 아닌 객체를 대체하는 것이다.

const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// ProductService 클래스의 fetchAvailableItems 메서드를 테스트할 때 ProductClient 클래스의 fetchItems 메서드를 호출하면 실제로 네트워크 통신이 일어나기 때문에 테스트가 어렵다. 이를 해결하기 위해 ProductClient 클래스를 모킹한다.
jest.mock('../product_client.js');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [{ available: true }, { available: false }]);

  // mockImplementation 메서드를 사용하여 ProductClient 클래스의 fetchItems 메서드를 모킹한다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  })

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  })

  it('should return available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toHaveLength(1);
    expect(items).toEqual([{ available: true }]);
  })
})