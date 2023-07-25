/**
 * @file Unit Tests - construct
 * @module tutils/utils/tests/unit/construct
 */

import type Vehicle from '#fixtures/types/vehicle'
import testSubject from '../construct'

describe('unit:utils/construct', () => {
  let obj: Vehicle & { 'driver.nanoid': string }

  beforeAll(() => {
    obj = {
      'driver.nanoid': faker.string.nanoid(),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      vin: faker.vehicle.vin(),
      year: faker.date.past({ years: 3 }).getFullYear()
    }
  })

  it('should return reconstructed object', () => {
    expect(testSubject(obj)).to.deep.equal({
      driver: { nanoid: obj['driver.nanoid'] },
      make: obj.make,
      model: obj.model,
      vin: obj.vin,
      year: obj.year
    })
  })
})
