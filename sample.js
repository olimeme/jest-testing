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

module.exports = {
  sum,
  multiply,
  fetchData,
};
