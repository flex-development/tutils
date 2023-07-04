/**
 * @file Type Tests - Crush
 * @module tutils/types/tests/unit-d/Crush
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../crush'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Get from '../get'
import type Invert from '../invert'
import type Nilable from '../nilable'
import type Nullable from '../nullable'

describe('unit-d:types/Crush', () => {
  it('should equal Invert<T> if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Invert<T>>()
  })

  it('should equal Invert<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Invert<T>>()
  })

  describe('T extends NIL', () => {
    it('should equal {}', () => {
      expectTypeOf<TestSubject<null>>().toEqualTypeOf<{}>()
      expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<{}>()
    })
  })

  describe('T extends ObjectCurly', () => {
    it('should flatten object to single dimension', () => {
      // Arrange
      type T = Readonly<Vehicle> & {
        contact: [string, { email: Lowercase<string>; phone: number }]
        rides?: Set<Date>
        drivers: { email: Lowercase<string>; id: string; phone: number }[]
        location: { lat: number; long: number }
      }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
        [x: `drivers.${number}.email`]: Get<T, `drivers.${number}.email`>
        [x: `drivers.${number}.id`]: Get<T, `drivers.${number}.id`>
        [x: `drivers.${number}.phone`]: Get<T, `drivers.${number}.phone`>
        'contact.0': Get<T, 'contact.0'>
        'contact.1.email': Get<T, 'contact.1.email'>
        'contact.1.phone': Get<T, 'contact.1.phone'>
        'location.lat': Get<T, 'location.lat'>
        'location.long': Get<T, 'location.long'>
        make: Get<T, 'make'>
        model: Get<T, 'model'>
        rides: Get<T, 'rides'>
        vin: Get<T, 'vin'>
        year: Get<T, 'year'>
      }>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<{}>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should flatten function to single dimension', () => {
      // Arrange
      type T = Readonly<Fn> & { data: { readonly id: string } }
      type Expect = { 'data.id': T['data']['id'] }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })

    describe('Fn extends T', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<Readonly<Fn>>>().toEqualTypeOf<{}>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should flatten array to single dimension', () => {
        // Arrange
        type T = readonly [Vehicle, Nullable<Vehicle>?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
          '0.make': Get<T, '0.make'>
          '0.model': Get<T, '0.model'>
          '0.vin': Get<T, '0.vin'>
          '0.year': Get<T, '0.year'>
          '1.make': Get<T, '1.make'>
          '1.model': Get<T, '1.model'>
          '1.vin': Get<T, '1.vin'>
          '1.year': Get<T, '1.year'>
        }>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should flatten array to single dimension', () => {
        // Arrange
        type T = (Nilable<{ readonly id: string }> | Vehicle)[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
          [x: `${number}.id`]: Get<T, `${number}.id`>
          [x: `${number}.make`]: Get<T, `${number}.make`>
          [x: `${number}.model`]: Get<T, `${number}.model`>
          [x: `${number}.vin`]: Get<T, `${number}.vin`>
          [x: `${number}.year`]: Get<T, `${number}.year`>
        }>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Vehicle | Vehicle[]>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        | Vehicle
        | {
            [x: `${number}.make`]: Get<Vehicle[], `${number}.make`>
            [x: `${number}.model`]: Get<Vehicle[], `${number}.model`>
            [x: `${number}.vin`]: Get<Vehicle[], `${number}.vin`>
            [x: `${number}.year`]: Get<Vehicle[], `${number}.year`>
          }
        | {}
        | {}
      >()
    })
  })
})
