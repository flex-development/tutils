/**
 * @file Unit Tests - enumerable
 * @module tutils/utils/tests/unit/enumerable
 */

import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE from '#fixtures/vehicle'
import type { PropertyKey } from '#src/types'
import clone from '../clone'
import define from '../define'
import descriptor from '../descriptor'
import testSubject from '../enumerable'

describe('unit:utils/enumerable', () => {
  let value: Vehicle

  beforeAll(() => {
    value = define(clone(VEHICLE), 'vrm', {
      ...descriptor(VEHICLE, 'vin'),
      enumerable: false,
      value: faker.vehicle.vrm()
    })
  })

  it('should equal false if key is not enumerable own property', () => {
    // Arrange
    const cases: PropertyKey[] = ['drivers', 'vrm']

    // Act + Expect
    cases.forEach(key => expect(testSubject(value, key)).to.be.false)
  })

  it('should equal true if key is enumerable own property', () => {
    expect(testSubject(value, 'vin')).to.be.true
  })
})
