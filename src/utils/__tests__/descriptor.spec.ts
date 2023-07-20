/**
 * @file Unit Tests - descriptor
 * @module tutils/utils/tests/unit/descriptor
 */

import VEHICLE from '#fixtures/vehicle'
import type { PropertyDescriptor } from '#src/interfaces'
import type { PropertyKey } from '#src/types'
import testSubject from '../descriptor'

describe('unit:utils/descriptor', () => {
  it('should return PropertyDescriptor object', () => {
    // Arrange
    const cases: [PropertyKey, PropertyDescriptor][] = [
      ['driver', {}],
      [
        'vin',
        {
          configurable: true,
          enumerable: true,
          value: VEHICLE.vin,
          writable: true
        }
      ]
    ]

    // Act + Expect
    cases.forEach(([key, expected]) => {
      expect(testSubject(VEHICLE, key)).to.eql(expected)
    })
  })
})
