/**
 * Returns an array of only those elements which when processed by the processor return a unique value
 * @param {(elem: unknown) => unknown} processor
 * @returns {unknown[]}
 */
function uniqBy(processor) {
  const uniqKeys = new Set();

  return this.filter((elem) => {
    const curKey = processor(elem);

    if (uniqKeys.has(curKey)) {
      return false;
    }

    uniqKeys.add(curKey);
    return true;
  });
}

export { uniqBy };
