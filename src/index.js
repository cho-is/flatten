const flattenArray = ([first, ...remaining], accumulator) =>
  (first === undefined) ?
    accumulator :
    (Array.isArray(first)) ?
      flattenArray([...first, ...remaining], accumulator) :
      flattenArray(remaining, accumulator.concat(first));

export default (n) => flattenArray(n, []);
