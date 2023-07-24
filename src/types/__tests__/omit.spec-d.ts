/**
 * @file Type Tests - Omit
 * @module tutils/types/tests/unit-d/Omit
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type Indices from '../indices'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type Objectify from '../objectify'
import type TestSubject from '../omit'
import type OmitNative from '../omit-native'
import type { tag as opaque } from '../opaque'
import type Stringify from '../stringify'

describe('unit-d:types/Omit', () => {
  it('should equal Objectify<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T, keyof Vehicle>>().toEqualTypeOf<Objectify<T>>()
  })

  describe('Objectify<T> extends infer U', () => {
    it('should equal {} if K is any', () => {
      expectTypeOf<TestSubject<Vehicle, any>>().toEqualTypeOf<{}>()
    })

    it('should equal U if K is never', () => {
      // Arrange
      type T = Vehicle['vin']

      // Expect
      expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
    })

    describe('K extends Stringify<infer N extends UnwrapNumeric<K>>', () => {
      it('should equal OmitNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]
        type K = Stringify<Indices<T>>
        type Expect = OmitNative<Objectify<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal OmitNative<U, N> if N intersects keyof U', () => {
        // Arrange
        type T = { [x: number]: Vehicle; 0?: Vehicle }
        type K1 = Numeric
        type K2 = '0'
        type E1 = { 0?: Vehicle }
        type E2 = { [x: number]: Vehicle }

        // Expect
        expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<E2>()
      })

      it('should equal U if HasKey<U, K> extends false', () => {
        // Arrange
        type T = readonly [Vehicle]

        // Expect
        expectTypeOf<TestSubject<T, '-1'>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('K extends UnwrapNumeric<infer N extends Stringify<K>>', () => {
      it('should equal OmitNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type T = { [x: Numeric]: Vehicle; [x: number]: Vehicle; 0?: Vehicle }
        type K1 = number
        type K2 = 0
        type E1 = { [x: Numeric]: Vehicle; 0?: Vehicle }
        type E2 = { [x: Numeric]: Vehicle; [x: number]: Vehicle }

        // Expect
        expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<E2>()
      })

      it('should equal OmitNative<U, N> if N intersects keyof U', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]
        type K = Indices<T>
        type Expect = OmitNative<Objectify<T>, Stringify<K>>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal U if HasKey<U, K> extends false', () => {
        // Arrange
        type T = readonly [Vehicle]

        // Expect
        expectTypeOf<TestSubject<T, -1>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('K extends string', () => {
      type T = Vehicle
      type U = Objectify<T>

      it('should equal OmitNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type K = 'make' | 'model' | 'year'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<U, K>>()
      })

      it('should equal U if HasKey<U, K> extends false', () => {
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<U>()
      })
    })

    describe('K extends symbol', () => {
      type T = Readonly<Fn>
      type U = Objectify<T>

      it('should equal OmitNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type K = typeof Symbol.hasInstance

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<U, K>>()
      })

      it('should equal U if HasKey<U, K> extends false', () => {
        expectTypeOf<TestSubject<T, typeof opaque>>().toEqualTypeOf<U>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nullable<Person | Vehicle>
      type K = 'age' | 'friends' | 'make' | 'model' | 'year'
      type Expect = OmitNative<Person, K> | OmitNative<Vehicle, K> | {}

      // Expect
      expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
    })
  })
})
