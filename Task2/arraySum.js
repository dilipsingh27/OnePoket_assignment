const arraySum = (arr) => {
  try {
    //checking if the input is an array or not
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array.");
    }
    //checking if the array elements are integers or not
    if (!arr.every(Number.isInteger)) {
      throw new Error("All elements of the array must be integers.");
    }

    return arr.reduce((acc,curr) => acc + curr, 0);
  } catch (error) {
    console.log(error.message);
  }
};

const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr));