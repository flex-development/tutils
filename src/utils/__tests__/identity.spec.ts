/**
 * @file Unit Tests - identity
 * @module tutils/utils/tests/unit/identity
 */

import INTEGER from '#fixtures/integer'
import testSubject from '../identity'

describe('unit:utils/identity', () => {
  it('should return value', () => {
    expect(testSubject(INTEGER)).to.equal(INTEGER)
  })
})
