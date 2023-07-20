/**
 * @file Unit Tests - keys
 * @module tutils/utils/tests/unit/keys
 */

import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE from '#fixtures/vehicle'
import testSubject from '../keys'

describe('unit:utils/keys', () => {
  it('should return array containing enumerable string keys', () => {
    expect(testSubject(VEHICLE)).to.eql(['make', 'model', 'vin', 'year'])
  })

  it('should return empty array if obj is null', () => {
    expect(testSubject(null)).to.be.an('array').that.is.empty
  })

  it('should return empty array if obj is undefined', () => {
    expect(testSubject(undefined)).to.be.an('array').that.is.empty
  })

  describe('deep', () => {
    let obj: Vehicle & {
      driver: { nanoid: string }
      riders: (string | { uuid: string })[]
    }

    beforeAll(() => {
      obj = {
        ...VEHICLE,
        driver: { nanoid: faker.string.nanoid() },
        riders: [faker.string.uuid(), { uuid: faker.string.uuid() }]
      }
    })

    it('should return array containing enumerable paths', () => {
      expect(testSubject(obj, { deep: true })).to.eql([
        'driver',
        'driver.nanoid',
        'make',
        'model',
        'riders',
        'riders.0',
        'riders.1',
        'riders.1.uuid',
        'vin',
        'year'
      ])
    })
  })
})
