/**
 * @file Unit Tests - reduce
 * @module tutils/utils/tests/unit/reduce
 */

import testSubject from '../reduce'

describe('unit:utils/reduce', () => {
  it('should return accumulated value', () => {
    expect(testSubject([0, 1, 2], (acc: number, n) => acc + n)).to.equal(3)
  })
})
