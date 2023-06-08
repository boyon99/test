const fn = require('./fn');

test('1은 1이야', () => {
  expect(1).toBe(1); // expect(검증할 값).toBe(기대하는 값)
})

test('2더하기 3은 5야', () => {
  expect(fn.add(2, 3)).toEqual(5);
})

test('3더하기 3은 5가 아니야', () => {
  expect(fn.add(3, 3)).not.toBe(5);
})


test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    // 객체나 배열인 경우 toEqual을 사용한다.
    // 엄격하게 비교하려면 toStrictEqual을 사용한다.
    name: 'Mike',
    age: 30
  })
})

test("null은 null이다.", () => {
  expect(null).toBeNull();
})

test("0은 false다", () => {
  expect(fn.add(1, 3)).toBeTruthy();
  expect(fn.add(1, -1)).toBeFalsy();
})

