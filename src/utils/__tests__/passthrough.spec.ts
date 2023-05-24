/**
 * @file Unit Tests - passthrough
 * @module tutils/utils/tests/unit/passthrough
 */

import INTEGER from '#fixtures/integer'
import testSubject from '../passthrough'

describe('unit:utils/passthrough', () => {
  it('should return value', () => {
    expect(testSubject(INTEGER)).to.equal(INTEGER)
  })
})
