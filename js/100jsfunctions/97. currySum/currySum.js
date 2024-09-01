/**
 * Function which performs Curried Sums
 * @param {number | undefined} num
 * @returns {(x: number | undefined) => ReturnType<currySum> | number}
 */
function currySum(num) {
  if (num == null) {
    return 0;
  }

  return (x) => (x != null ? currySum(num + x) : num);
}

export { currySum };
