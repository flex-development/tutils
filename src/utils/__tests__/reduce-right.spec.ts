/**
 * @file Unit Tests - reduceRight
 * @module tutils/utils/tests/unit/reduceRight
 */

import testSubject from '../reduce-right'

describe('unit:utils/reduceRight', () => {
  it('should return accumulated value', () => {
    expect(testSubject([1, 2, 3], (acc: number, n) => acc - n)).to.equal(-3)
  })
})
