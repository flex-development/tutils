/**
 * @file Unit Tests - iterate
 * @module tutils/utils/tests/unit/iterate
 */

import testSubject from '../iterate'

describe('unit:utils/iterate', () => {
  it('should return accumulated value', () => {
    expect(testSubject(5, 0, (acc, i) => ++acc * ++i)).to.equal(325)
  })
})
