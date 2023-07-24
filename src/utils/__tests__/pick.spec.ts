/**
 * @file Unit Tests - pick
 * @module tutils/utils/tests/unit/pick
 */

import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE from '#fixtures/vehicle'
import type { Objectify, PropertyKey, Values } from '#src/types'
import testSubject from '../pick'

describe('unit:utils/pick', () => {
  let keys: PropertyKey[]
  let proxy: Vehicle

  beforeAll(() => {
    keys = ['vin', 'vrm']
    proxy = new Proxy<Vehicle>(VEHICLE, {
      get(target: Vehicle, key: keyof Vehicle): Values<Vehicle>[number] {
        return target[key]
      }
    })
  })

  it('should return new object with properties in keys selected', () => {
    // Arrange
    const cases: Objectify<any>[] = [VEHICLE, proxy]

    // Act + Expect
    cases.forEach(target => {
      expect(testSubject(target, keys))
        .to.eql({ vin: target.vin })
        .but.not.equal(target)
    })
  })
})
