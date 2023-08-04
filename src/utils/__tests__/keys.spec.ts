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

  it('should return empty array if target is null', () => {
    expect(testSubject(null)).to.be.an('array').that.is.empty
  })

  it('should return empty array if target is undefined', () => {
    expect(testSubject(undefined)).to.be.an('array').that.is.empty
  })

  describe('deep', () => {
    let target: Vehicle & {
      driver: { nanoid: string }
      riders: (string | { uuid: string })[]
    }

    beforeAll(() => {
      target = {
        ...VEHICLE,
        driver: { nanoid: 'nanoid_0' },
        make: 'make',
        model: 'model',
        riders: ['uuid_0', { uuid: 'uuid_1' }],
        vin: 'vin'
      }
    })

    it('should return array containing enumerable paths', () => {
      expect(testSubject(target, { deep: true })).to.eql([
        'driver',
        'driver.nanoid',
        'driver.nanoid.0',
        'driver.nanoid.1',
        'driver.nanoid.2',
        'driver.nanoid.3',
        'driver.nanoid.4',
        'driver.nanoid.5',
        'driver.nanoid.6',
        'driver.nanoid.7',
        'make',
        'make.0',
        'make.1',
        'make.2',
        'make.3',
        'model',
        'model.0',
        'model.1',
        'model.2',
        'model.3',
        'model.4',
        'riders',
        'riders.0',
        'riders.0.0',
        'riders.0.1',
        'riders.0.2',
        'riders.0.3',
        'riders.0.4',
        'riders.0.5',
        'riders.1',
        'riders.1.uuid',
        'riders.1.uuid.0',
        'riders.1.uuid.1',
        'riders.1.uuid.2',
        'riders.1.uuid.3',
        'riders.1.uuid.4',
        'riders.1.uuid.5',
        'vin',
        'vin.0',
        'vin.1',
        'vin.2',
        'year'
      ])
    })
  })
})
