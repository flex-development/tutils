/**
 * @file Unit Tests - clamp
 * @module tutils/utils/tests/unit/clamp
 */

import INTEGER from '#fixtures/integer'
import testSubject from '../clamp'

describe('unit:utils/clamp', () => {
  let max: number
  let min: number

  beforeAll(() => {
    max = INTEGER
    min = INTEGER * -1
  })

  it('should return max if num is greater than max', () => {
    expect(testSubject(max * 2, min, max)).to.equal(max)
  })

  it('should return min if num is less than min', () => {
    expect(testSubject(min * 2, min, max)).to.equal(min)
  })

  it('should return num if num is in the range [min,max]', () => {
    // Arrange
    const num: number = INTEGER - 10

    // Act + Expect
    expect(testSubject(num, min, max)).to.equal(num)
  })
})
