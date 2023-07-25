/**
 * @file Unit Tests - set
 * @module tutils/utils/tests/unit/set
 */

import { VEHICLE_TAG } from '#fixtures/vehicle'
import type { EmptyString } from '#src/types'
import cast from '../cast'
import get from '../get'
import isArray from '../is-array'
import isString from '../is-string'
import testSubject from '../set'

describe('unit:utils/set', () => {
  describe('nested properties', () => {
    describe('add property', () => {
      it('should return obj with new nested property', () => {
        // Arrange
        const cases: Parameters<typeof testSubject>[] = [
          [{}, 'res.vehicle', { vin: faker.vehicle.vin() }],
          [{}, 'res.vehicle.vin', faker.vehicle.vin()],
          [{}, 'res.vehicles.0.vin', faker.vehicle.vin()],
          [{}, 'res.vehicles[0].vin', faker.vehicle.vin()]
        ]

        // Act + Expect
        cases.forEach(([obj, path, value, descriptor]) => {
          const result = testSubject(obj, path, value, descriptor)

          expect(result).to.equal(obj)
          expect(result).to.have.deep.nested.property(cast(path), value)
          expect(result).to.satisfy((): boolean => {
            return isString(path) && /\d+/.test(path)
              ? isArray(get(result, path.replace(/[.[](\d+)]?\..+/, '')))
              : true
          })
        })
      })
    })

    describe('modify property', () => {
      let obj: { res: { driver: { nanoid: EmptyString }; vin: string } }

      beforeAll(() => {
        obj = { res: { driver: { nanoid: '' }, vin: faker.vehicle.vin() } }
      })

      it('should return obj with modified nested property', () => {
        // Arrange
        const path = 'res.driver.nanoid' as const
        const value: string = faker.string.nanoid()

        // Act
        const result = testSubject(obj, path, value)

        // Expect
        expect(result).to.equal(obj).and.have.nested.property(path, value)
      })
    })
  })

  describe('top level properties', () => {
    describe('add property', () => {
      let obj: { vin: string }

      beforeAll(() => {
        obj = { vin: faker.vehicle.vin() }
      })

      describe('string-keyed', () => {
        it('should return obj with new string-keyed property', () => {
          // Arrange
          const path: string = 'vrm'
          const value: string = faker.vehicle.vrm()

          // Act
          const result = testSubject(obj, path, value)

          // Expect
          expect(result).to.equal(obj).and.have.descriptor(path, {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          })
        })
      })

      describe('symbol-keyed', () => {
        it('should return obj with new symbol-keyed property', () => {
          // Arrange
          const value: string = 'vehicle'

          // Act
          const result = testSubject(obj, VEHICLE_TAG, value)

          // Expect
          expect(result).to.equal(obj).and.have.descriptor(VEHICLE_TAG, {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          })
        })
      })
    })

    describe('modify property', () => {
      let enumerable: false
      let obj: { [x: symbol]: string; vrm: string }

      beforeAll(() => {
        enumerable = false
        obj = { [VEHICLE_TAG]: '', vrm: '' }
      })

      describe('string-keyed', () => {
        it('should return obj with modified string-keyed property', () => {
          // Arrange
          const path: string = 'vrm'
          const value: string = faker.vehicle.vrm()

          // Act
          const result = testSubject(obj, path, value, { enumerable })

          // Expect
          expect(result).to.equal(obj).and.have.descriptor(path, {
            configurable: true,
            enumerable,
            value,
            writable: true
          })
        })
      })

      describe('symbol-keyed', () => {
        it('should return obj with modified symbol-keyed property', () => {
          // Arrange
          const path: symbol = VEHICLE_TAG
          const value: string = 'vehicle'

          // Act
          const result = testSubject(obj, path, value, { enumerable })

          // Expect
          expect(result).to.equal(obj).and.have.descriptor(path, {
            configurable: true,
            enumerable,
            value,
            writable: true
          })
        })
      })
    })
  })
})
