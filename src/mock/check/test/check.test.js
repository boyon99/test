// check 함수는 predicate 함수의 결과에 따라 onSuccess 또는 onFail 함수를 실행한다. 
const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;


  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  })

  it('calls onSuccess when true', () => {
    check(() => true, onSuccess, onFail);

    // 기대되는 결과가 true인 경우 onSuccess 함수가 실행되는지 확인한다. 1번 실행되어야 한다.
    // (비교코드) expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    //(비교코드) expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
    // onSuccess 함수가 실행될 때 인자로 'yes'가 전달되는지 확인한다.
    // (비교코드) expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes');
  })
});