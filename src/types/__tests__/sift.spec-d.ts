/**
 * @file Type Tests - Sift
 * @module tutils/types/tests/unit-d/Sift
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type Falsy from '../falsy'
import type NIL from '../nil'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type TestSubject from '../sift'
import type Times from '../times'
import type Writable from '../writable'

describe('unit-d:types/Sift', () => {
  it('should equal EmptyArray if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  describe('T extends NIL', () => {
    it('should equal EmptyArray', () => {
      expectTypeOf<TestSubject<null>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<EmptyArray>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal Writable<T> if T[number] does not extend Falsy', () => {
        // Arrange
        type T = readonly ['a', 'b', 'c']

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Writable<T>>()
      })

      it('should equal Writable<T> if T extends Readonly<EmptyArray>', () => {
        // Arrange
        type T1 = EmptyArray
        type T2 = Readonly<EmptyArray>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Writable<T1>>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Writable<T2>>()
      })

      it('should reconstruct T without Falsy values', () => {
        // Arrange
        type T = readonly [NIL, EmptyString, 0, 0n, false, Vehicle['vin']?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Times<1, Vehicle['vin']>>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal Writable<T> if T[number] does not extend Falsy', () => {
        // Arrange
        type T = readonly Vehicle[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Writable<T>>()
      })

      it('should exclude Falsy from T[number]', () => {
        // Arrange
        type T = readonly (Falsy | Nilable<Vehicle>)[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Vehicle[]>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]>
      type Expect = EmptyArray | Times<3, Vehicle>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
