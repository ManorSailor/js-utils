/**
 * Calculate distance which can be traveled given a budget.
 * @param {number} budget - total budget
 * @param {number} weight - weight of cargo
 * @param {number} cost - cost of transporting 10 kg cargo for 100 km
 * @returns {number} - total distance which can be covered within the given budget
 * @example
 * ```js
 * getMaxMovingDistance(700, 440, 50) // 31.81
 * ```
 */
function getMaxMovingDistance(budget, weight, cost) {
  const ratePerKgKm = (cost * 10) / 100;
  const costPer1km = (cost * weight) / 100;
  return budget / costPer1km;
}

export { getMaxMovingDistance };
