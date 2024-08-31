/**
 * Reduce right
 * @param {(acc: unknown, curVal: unknown, index: number) => unknown} callbackFn
 * @param {any} initialValue
 */
function reverseReduce(callbackFn, initialValue) {
  return initialValue !== undefined
    ? this.reduceRight(callbackFn, initialValue)
    : this.reduceRight(callbackFn);
}

export { reverseReduce };
