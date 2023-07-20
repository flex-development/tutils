/**
 * @file Unit Tests - define
 * @module tutils/utils/tests/unit/define
 */

import VEHICLE from '#fixtures/vehicle'
import type { PropertyDescriptor } from '#src/interfaces'
import testSubject from '../define'
import description from '../descriptor'

describe('unit:utils/define', () => {
  describe('add property', () => {
    let property: string
    let vrm: string

    beforeAll(() => {
      property = 'vrm'
      vrm = faker.vehicle.vrm()
    })

    it('should return obj with new property', () => {
      // Act
      const result = testSubject(VEHICLE, property, { value: vrm })

      // Expect
      expect(result).to.have.descriptor(property, {
        configurable: true,
        enumerable: true,
        value: vrm,
        writable: true
      })
    })
  })

  describe('modify property', () => {
    let property: string
    let vin: string

    beforeAll(() => {
      property = 'vin'
      vin = faker.vehicle.vin()
    })

    it('should return obj with modified property', () => {
      // Arrange
      const descriptor: PropertyDescriptor<typeof vin> = {
        enumerable: false,
        value: vin
      }

      // Act
      const result = testSubject(VEHICLE, property, descriptor)

      // Expect
      expect(result).to.have.descriptor(property, {
        ...description(VEHICLE, property),
        ...descriptor
      })
    })
  })
})
