/**
 * @file Unit Tests - define
 * @module tutils/utils/tests/unit/define
 */

import VEHICLE from '#fixtures/vehicle'
import type { PropertyDescriptor } from '#src/interfaces'
import type { Assign, EmptyArray, Fn } from '#src/types'
import clone from '../clone'
import constant from '../constant'
import testSubject from '../define'
import description from '../descriptor'
import omit from '../omit'

describe('unit:utils/define', () => {
  describe('add property', () => {
    let property: string
    let vrm: string

    beforeAll(() => {
      property = 'vrm'
      vrm = faker.vehicle.vrm()
    })

    describe('accessor descriptor', () => {
      let vehicle: typeof VEHICLE

      beforeAll(() => {
        vehicle = clone(VEHICLE)
      })

      it('should return obj with new accessor descriptor', () => {
        // Arrange
        const get: Fn<EmptyArray, typeof vrm> = constant(vrm)

        // Act
        const result = testSubject(vehicle, property, { get })

        // Expect
        expect(result).to.have.descriptor(property, {
          configurable: true,
          enumerable: true,
          get,
          set: undefined
        })
      })
    })

    describe('data descriptor', () => {
      let vehicle: typeof VEHICLE

      beforeAll(() => {
        vehicle = clone(VEHICLE)
      })

      it('should return obj with new data descriptor', () => {
        // Act
        const result = testSubject(vehicle, property, { value: vrm })

        // Expect
        expect(result).to.have.descriptor(property, {
          configurable: true,
          enumerable: true,
          value: vrm,
          writable: true
        })
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

    describe('accessor descriptor', () => {
      let vehicle: Assign<typeof VEHICLE, { vin?: string }>

      beforeAll(() => {
        vehicle = Object.defineProperty(omit(clone(VEHICLE), ['vin']), 'vin', {
          configurable: true,
          get: constant(VEHICLE.vin)
        })
      })

      it('should return obj with modified accessor descriptor', () => {
        // Arrange
        const get: Fn<EmptyArray, typeof vin> = constant(vin)

        // Act
        const result = testSubject(vehicle, property, { get })

        // Expect
        expect(result).to.have.descriptor(property, {
          ...description(vehicle, property),
          get
        })
      })
    })

    describe('data descriptor', () => {
      let vehicle: typeof VEHICLE

      beforeAll(() => {
        vehicle = clone(VEHICLE)
      })

      it('should return obj with modified data descriptor', () => {
        // Arrange
        const descriptor: PropertyDescriptor<typeof vin> = {
          enumerable: false,
          value: vin
        }

        // Act
        const result = testSubject(vehicle, property, descriptor)

        // Expect
        expect(result).to.have.descriptor(property, {
          ...description(vehicle, property),
          ...descriptor
        })
      })
    })
  })
})
