const { sum, multiply, fetchData } = require("./sample");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("multiplies 3 * 4 to equal 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("async test example", async () => {
  const result = await fetchData();
  expect(result).toEqual("data");
});
