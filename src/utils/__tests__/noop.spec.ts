/**
 * @file Unit Tests - noop
 * @module tutils/utils/tests/unit/noop
 */

import testSubject from '../noop'

describe('unit:utils/noop', () => {
  it('should return undefined', () => {
    expect(void testSubject()).to.be.undefined
  })
})
