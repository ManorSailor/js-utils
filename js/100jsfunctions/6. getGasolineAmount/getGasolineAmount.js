/**
 * Calculate Gasoline needed for a round trip per avg
 * @param {number} distance
 * @param {number} avgConsumption
 * @returns {number}
 * @example
 * ```js
 * getGasolineAmount(128, 6.4) // 16.384
 * ```
 */
function getGasolineAmount(distance, avgConsumption) {
  return (distance * 2 * avgConsumption) / 100;
}

export { getGasolineAmount };
