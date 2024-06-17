/**
 * Returns a new string by removing the first & last occurrence of target from the source string
 * @param {string} source
 * @param {string} target
 * @returns {string}
 * @example Case sensitive
 * ```js
 * removeFirstAndLast("HeLlo lovely world", "l") // "HeLo lovely word"
 * ```
 * @example Target may have more than one character
 * ```js
 * removeFirstAndLast("HeLLo lovely world", "o ") // "HeLLlovely world"
 * ```
 */
function removeFirstAndLast(source, target) {
  const firstOccurrence = source.indexOf(target);
  const lastOccurrence = source.lastIndexOf(target);

  if (firstOccurrence === -1) {
    return source;
  }

  return (
    source.slice(0, firstOccurrence) +
    source.slice(firstOccurrence + target.length, lastOccurrence) +
    source.slice(lastOccurrence + target.length)
  );
}

// function firstAndLastIndex(source, target) {
//   let firstIdx = -1;
//   let lastIdx = -1;

//   for (let i = 0; i < source.length; i++) {
//     if (source[i] === target[0]) {
//       let isBreak = false;

//       for (let j = 0; j < target.length; j++) {
//         if (source[i + j] !== target[j]) {
//           isBreak = true;
//           break;
//         }
//       }

//       if (!isBreak && firstIdx === -1) {
//         firstIdx = i;
//         lastIdx = i;
//       } else if (!isBreak && firstIdx !== -1) {
//         lastIdx = i;
//       }
//     }
//   }

//   return [firstIdx, lastIdx];
// }

export { removeFirstAndLast };
