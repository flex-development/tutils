/**
 * @file Unit Tests - times
 * @module tutils/utils/tests/unit/times
 */

import testSubject from '../times'

describe('unit:utils/times', () => {
  it('should return array containing iteratee results', () => {
    expect(testSubject(5)).to.eql([0, 1, 2, 3, 4])
  })
})
