const { sum, multiply, fetchData, findMin } = require("./sample");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -1 + 5 to equal 4", () => {
  expect(sum(-1, 5)).toBe(4);
});

test("multiplies 3 * 4 to equal 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("multiplies -2 * 6 to equal -12", () => {
  expect(multiply(-2, 6)).toBe(-12);
});

test("async test example", async () => {
  const result = await fetchData();
  expect(result).toEqual("data");
});

test("findMin test", () => {
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  expect(findMin([11, 13, 15, 17])).toBe(11);
  expect(findMin([2, 1])).toBe(1);
  expect(findMin([1])).toBe(1);
});

test("findMin test with negative numbers", () => {
  expect(findMin([-3, -4, -5, -1, -2])).toBe(-5);
  expect(findMin([-4, -5, -6, -7, 0, -1, -2])).toBe(-7);
  expect(findMin([-11, -13, -15, -17])).toBe(-17);
  expect(findMin([-2, -1])).toBe(-2);
  expect(findMin([-1])).toBe(-1);
});
