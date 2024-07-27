/**
 * Deterministically returns a resolved Promise depending on the provided number
 * @param {number} number
 */
function createPromise(number) {
    return number > 0
      ? Promise.resolve("It's positive!")
      : Promise.resolve("It's negative!");
  }
  
  export { createPromise };
  