const Calculator = require('../calculator');

// describe는 테스트를 그룹화하는 역할을 한다.
describe('Calculator', () => {
  // 테스트 전에 공통적으로 실행되는 코드를 작성한다.
  let cal;
  beforeEach(() => {
    // test는 독립적으로 실행되어야 한다. 따라서 Calculator를 초기화하는 코드를 각 테스트마다 작성해야 한다.
    // 이를 해결하기 위해 beforeEach를 사용한다.
    // (비교코드) 이전에는 각각의 테스트에 const cal = new Calculator();를 작성했음.
    cal = new Calculator();
  })

  // it은 테스트를 수행하는 역할을 한다.
  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets value', () => {
    const cal = new Calculator();
    cal.set(10);
    expect(cal.value).toBe(10);
  });

  it('clears value', () => {
    cal.set(10);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds value', () => {
    cal.set(10);
    cal.add(5);
    expect(cal.value).toBe(15);
  });

  // 에러를 테스트하는 경우, toThrow를 사용한다. 해결하지 못할 경우 Uncovered line이 발생한다.
  it('add throws error when value is greater than 100', () => {
    cal.set(100);
    expect(() => cal.add(1)).toThrow();
  });

  // 나누기 테스트의 경우 0으로 나누는 경우를 테스트해야 한다.
  describe('divides value', () => {
    it('0/0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    })
    it('1/0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  })
});

// 문서화를 할 수 있다.
