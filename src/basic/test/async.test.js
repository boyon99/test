const fetchProduct = require('../async');


// done 함수를 사용하는 경우, 비동기 테스트가 완료될 때까지 기다려야 한다. 따라서 테스트가 느려질 수 있다.
describe('fetchProduct', () => {
  it('asyc-done', (done) => {
    fetchProduct().then((res) => {
      expect(res).toEqual({ item: 'Milk', price: 200 });
      done();
    })
  })

  it('asyc-return', () => {
    return fetchProduct().then((res) => {
      expect(res).toEqual({ item: 'Milk', price: 200 });
    })
  })

  it('async-await', async () => {
    const res = await fetchProduct();
    expect(res).toEqual({ item: 'Milk', price: 200 });
  })

  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  })

  // error case
  it('async-rejects', () => {
    return expect(fetchProduct('error')).rejects.toEqual('network error');
  })
})