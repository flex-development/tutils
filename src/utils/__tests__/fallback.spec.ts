/**
 * @file Unit Tests - fallback
 * @module tutils/utils/tests/unit/fallback
 */

import TODAY from '#fixtures/today'
import VEHICLE from '#fixtures/vehicle'
import testSubject from '../fallback'
import isNIL from '../is-nil'

describe('unit:utils/fallback', () => {
  it('should return fallback if target meets condition', () => {
    expect(testSubject(null, TODAY, isNIL)).to.eql(TODAY)
  })

  it('should return target if target does not meet condition', () => {
    expect(testSubject(VEHICLE, null, isNIL)).to.eql(VEHICLE)
  })
})
