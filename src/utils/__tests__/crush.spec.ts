/**
 * @file Unit Tests - crush
 * @module tutils/utils/tests/unit/crush
 */

import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE from '#fixtures/vehicle'
import type { ObjectCurly } from '#src/types'
import testSubject from '../crush'
import isObjectPlain from '../is-object-plain'

describe('unit:utils/crush', () => {
  let array: [Vehicle]
  let pojo: Vehicle & { driver: { nanoid: string }; riders: { uuid: string }[] }

  beforeAll(() => {
    array = [VEHICLE]
    pojo = {
      ...VEHICLE,
      driver: { nanoid: faker.string.nanoid() },
      riders: [{ uuid: faker.string.uuid() }, { uuid: faker.string.uuid() }]
    }
  })

  it('should return one-dimensional plain object', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, ObjectCurly][] = [
      [null, {}],
      [undefined, {}],
      [
        array,
        {
          '0.make': array[0].make,
          '0.model': array[0].model,
          '0.vin': array[0].vin,
          '0.year': array[0].year
        }
      ],
      [
        pojo,
        {
          'driver.nanoid': pojo.driver.nanoid,
          make: pojo.make,
          model: pojo.model,
          'riders.0.uuid': pojo.riders[0]!.uuid,
          'riders.1.uuid': pojo.riders[1]!.uuid,
          vin: pojo.vin,
          year: pojo.year
        }
      ]
    ]

    // Act + Expect
    cases.forEach(([obj, expected]) => {
      expect(testSubject(obj)).to.eql(expected).and.satisfy(isObjectPlain)
    })
  })
})
