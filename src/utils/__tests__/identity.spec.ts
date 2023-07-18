/**
 * @file Unit Tests - identity
 * @module tutils/utils/tests/unit/identity
 */

import VEHICLE from '#fixtures/vehicle'
import testSubject from '../identity'

describe('unit:utils/identity', () => {
  it('should return value', () => {
    expect(testSubject(VEHICLE)).to.eql(VEHICLE).and.equal(VEHICLE)
  })
})
