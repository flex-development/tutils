/**
 * @file Unit Tests - omit
 * @module tutils/utils/tests/unit/omit
 */

import VEHICLE, { VEHICLE_TAG } from '#fixtures/vehicle'
import testSubject from '../omit'

describe('unit:utils/omit', () => {
  it('should return new object with properties in keys removed', () => {
    // Act
    const result = testSubject(VEHICLE, [VEHICLE_TAG, 'make', 'model', 'year'])

    // Expect
    expect(result).to.eql({ vin: VEHICLE.vin }).but.not.equal(VEHICLE)
  })
})
