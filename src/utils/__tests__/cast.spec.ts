/**
 * @file Unit Tests - cast
 * @module tutils/utils/tests/unit/cast
 */

import FLOAT from '#fixtures/float'
import testSubject from '../cast'

describe('unit:utils/cast', () => {
  it('should return value', () => {
    expect(testSubject(FLOAT)).to.equal(FLOAT)
  })
})
