/* global describe, it, before */
import chai from 'chai'
import flatten from '../lib/flattenArray.js'

chai.expect()
const expect = chai.expect


describe('Given an array of arbitrarily nested arrays of integers', () => {
  describe('when passing the array', () => {
    const arr = [[1,[8,[[3]]]],9,[14,[[[6]]]]]
    const flattened = flatten(arr)
    it('should return an array', () => {
      expect(flattened).to.be.a('array')
    })
    it('should return a flat array with the ordered integers', () => {
      expect(flattened).to.have.same.ordered.members([1, 8, 3, 9, 14, 6]);
    })
  })
})
