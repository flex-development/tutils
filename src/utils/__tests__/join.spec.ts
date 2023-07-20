/**
 * @file Unit Tests - join
 * @module tutils/utils/tests/unit/join
 */

import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE from '#fixtures/vehicle'
import testSubject from '../join'

describe('unit:utils/join', () => {
  let vehicles: readonly [Vehicle, Vehicle]

  beforeAll(() => {
    vehicles = [
      VEHICLE,
      {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        vin: faker.vehicle.vin(),
        year: faker.date.past({ years: 3 }).getFullYear()
      }
    ]
  })

  it('should return array as string delimited by separator', () => {
    // Act
    const result = testSubject(vehicles, null, vehicle => vehicle.vin)

    // Expect
    expect(result).to.equal(`${vehicles[0].vin},${vehicles[1].vin}`)
  })
})
