const { sum, multiply, fetchData, findMin } = require("./sample");
const assert = require("assert");

describe("sample", () => {
  it("should add 1 + 2 to equal 3", () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it("should add -1 + 5 to equal 4", () => {
    assert.strictEqual(sum(-1, 5), 4);
  });

  it("should multiply 3 * 4 to equal 12", () => {
    assert.strictEqual(multiply(3, 4), 12);
  });

  it("should multiply -2 * 6 to equal -12", () => {
    assert.strictEqual(multiply(-2, 6), -12);
  });

  it('should resolve with "data" for async test example', async () => {
    const result = await fetchData();
    assert.strictEqual(result, "data");
  });

  it("should find the minimum value in an array", () => {
    assert.strictEqual(findMin([3, 4, 5, 1, 2]), 1);
    assert.strictEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
    assert.strictEqual(findMin([11, 13, 15, 17]), 11);
    assert.strictEqual(findMin([2, 1]), 1);
    assert.strictEqual(findMin([1]), 1);
  });

  it("should find the minimum value in an array with negative numbers", () => {
    assert.strictEqual(findMin([-3, -4, -5, -1, -2]), -5);
    assert.strictEqual(findMin([-4, -5, -6, -7, 0, -1, -2]), -7);
    assert.strictEqual(findMin([-11, -13, -15, -17]), -17);
    assert.strictEqual(findMin([-2, -1]), -2);
    assert.strictEqual(findMin([-1]), -1);
  });
});
