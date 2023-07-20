/**
 * @file Unit Tests - count
 * @module tutils/utils/tests/unit/count
 */

import testSubject from '../count'

describe('unit:utils/count', () => {
  let arr: number[]

  beforeAll(() => {
    arr = [0, 1, 2, 3, 4]
  })

  it('should return arr.length if condition is omitted', () => {
    expect(testSubject(arr)).to.equal(arr.length)
  })

  it('should return number of items in arr that meet condition', () => {
    expect(testSubject(arr, (n: number) => n >= 3)).to.equal(2)
  })
})
