export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += `${item} | `;
  }
  // Remove the trailing ' | ' from the result
  return result.slice(0, -3);
}
