/**
 * Given a string of in the format of rgb color, return a new string in hexcolor format
 * @param {string} rgbColor
 * @returns {string}
 * @example
 * ```js
 * rgbToHex("rgb(8, 51, 68)") // "#083344"
 * ```
 */
function rgbToHex(rgbColor) {
  const colors = rgbColor.slice(4, rgbColor.length - 1).split(',');

  return (
    '#' +
    colors.map((color) => Number(color).toString(16).padStart(2, '0')).join('')
  );
}

export { rgbToHex };
