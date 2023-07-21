/**
 * @file Unit Tests - ksort
 * @module tutils/utils/tests/unit/ksort
 */

import type Vehicle from '#fixtures/types/vehicle'
import VEHICLE, { VEHICLE_TAG } from '#fixtures/vehicle'
import type { Opaque } from '#src/types'
import cast from '../cast'
import define from '../define'
import testSubject from '../ksort'

describe('unit:utils/ksort', () => {
  let vehicle: Opaque<Vehicle, 'vehicle'>

  beforeAll(() => {
    vehicle = cast({ year: 2023, vin: VEHICLE.vin, model: 'lc', make: 'lexus' })

    define(vehicle, VEHICLE_TAG, {
      configurable: false,
      enumerable: false,
      value: 'vehicle',
      writable: false
    })
  })

  it('should return obj if obj is not an array or plain object', () => {
    // Arrange
    const obj: Set<Vehicle> = new Set([vehicle])

    // Act + Expect
    expect(testSubject(obj)).to.equal(obj)
  })

  describe('arrays', () => {
    it('should return obj if item keys should not be sorted', () => {
      // Arrange
      const obj: [Vehicle] = [vehicle]

      // Act + Expect
      expect(testSubject(obj)).to.equal(obj)
    })

    describe('deep', () => {
      let obj: (Vehicle | Vehicle[])[]

      beforeAll(() => {
        obj = [vehicle]
        obj.push(cast(obj))
      })

      it('should return obj with item keys sorted deeply', () => {
        // Act
        const result = testSubject(obj, { deep: true })

        // Expect
        expect(result).to.eql(obj).and.equal(obj)
        expect(result).toMatchSnapshot()
      })
    })
  })

  describe('plain objects', () => {
    it('should return obj with top-level keys sorted', () => {
      // Act
      const result = testSubject(vehicle)

      // Expect
      expect(result).to.eql(vehicle).and.equal(vehicle)
      expect(result).toMatchSnapshot()
    })

    describe('deep', () => {
      let obj: Vehicle & {
        driver: { first_name: string; last_name: string; nanoid: string }
        riders: { first_name: string; last_name: string; uuid: string }[]
      }

      beforeAll(() => {
        obj = {
          ...vehicle,
          driver: {
            nanoid: 'mhR2OWSEhQFXkwU1NJY23',
            last_name: 'koelpin',
            first_name: 'tres'
          },
          riders: [
            {
              uuid: '19fd6413-7fc9-4e7f-a5b5-9a3689d25134',
              last_name: 'rodriguez',
              first_name: 'adrian'
            }
          ]
        }

        define(obj, 'circular', { value: obj })
      })

      it('should return obj with nested and top-level keys sorted', () => {
        // Act
        const result = testSubject(obj, { deep: true })

        // Expect
        expect(result).to.eql(obj).and.equal(obj)
        expect(result).toMatchSnapshot()
      })
    })
  })
})
