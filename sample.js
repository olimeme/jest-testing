// Function to calculate the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Function to calculate the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Async function to fetch data (example)
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
}

function findMin(nums) {
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    let mid = ~~((right + left) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else if (nums[mid] < nums[right]) right = mid;
    else right--;
  }
  return nums[left];
}

module.exports = {
  sum,
  multiply,
  fetchData,
  // positiveOrNegative,
  findMin,
};
