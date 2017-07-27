# flattenArray

Flatten an array of arbitrarily nested arrays of integers into a flat array of integers.

## Ussage

```
import flatten from 'flattenArray'

const flatArray = flatten([[1,[8,[[3]]]],9,[14,[[[6]]]]])

console.log(flatArray) // [1, 8, 3, 9, 14, 6]
```

## Development

```
npm install

npm run dev
```

## Testing

```
npm run test

npm run test:watch
```

## Production

```
npm run build
```