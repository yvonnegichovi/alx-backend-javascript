function cleanSet(set, startString) {
  let result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return result;
}
export default cleanSet;
