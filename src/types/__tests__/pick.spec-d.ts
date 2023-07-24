/**
 * @file Type Tests - Pick
 * @module tutils/types/tests/unit-d/Pick
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type { tag as empty } from '../empty-object'
import type Fn from '../fn'
import type Indices from '../indices'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type { tag as opaque } from '../opaque'
import type Partial from '../partial'
import type TestSubject from '../pick'
import type PickNative from '../pick-native'
import type Remap from '../remap'
import type Stringify from '../stringify'
import type UnwrapNumeric from '../unwrap-numeric'

describe('unit-d:types/Pick', () => {
  it('should equal PickNative<T, K> if T is any', () => {
    // Arrange
    type T = any
    type K = keyof Vehicle

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<PickNative<T, K>>()
  })

  it('should equal Remap<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T, keyof Vehicle>>().toEqualTypeOf<Remap<T>>()
  })

  describe('Remap<T> extends infer U', () => {
    it('should equal {} if K cannot index U', () => {
      expectTypeOf<TestSubject<EmptyObject, typeof empty>>().toEqualTypeOf<{}>()
      expectTypeOf<TestSubject<null, 'make'>>().toEqualTypeOf<{}>()
      expectTypeOf<TestSubject<undefined, 'model'>>().toEqualTypeOf<{}>()
      expectTypeOf<TestSubject<unknown, 'vin'>>().toEqualTypeOf<{}>()
    })

    it('should equal {} if K is never', () => {
      // Arrange
      type T = Vehicle

      // Expect
      expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<{}>()
    })

    it('should equal U if K is any', () => {
      // Arrange
      type T = readonly [Vehicle, Vehicle]

      // Expect
      expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<Remap<T>>()
    })

    describe('K extends Stringify<infer N extends UnwrapNumeric<K>>', () => {
      it('should equal {} if K cannot index U', () => {
        expectTypeOf<TestSubject<Vehicle, '3'>>().toEqualTypeOf<{}>()
      })

      it('should equal PickNative<U, K> if K extends keyof U', () => {
        // Arrange
        type T = { readonly [x: Numeric]: Vehicle }
        type K = '0'
        type Expect = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal PickNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type T = { readonly '0': Vehicle }
        type K = '0'
        type Expect = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal PickNative<U, N> if N extends keyof U', () => {
        // Arrange
        type T = { [x: number]: Vehicle }
        type K = '0'
        type Expect = PickNative<Remap<T>, UnwrapNumeric<K>>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal PickNative<U, N> if N intersects keyof U', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]
        type K = Stringify<Indices<T>>
        type Expect = PickNative<Remap<T>, UnwrapNumeric<K>>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })
    })

    describe('K extends UnwrapNumeric<infer N extends Stringify<K>>', () => {
      it('should equal {} if K cannot index U', () => {
        // Arrange
        type T = { [x: Numeric]: string }

        // Expect
        expectTypeOf<TestSubject<T, 2>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<{}>()
      })

      it('should equal PickNative<U, K> if K extends keyof U', () => {
        // Arrange
        type T = { [x: number]: string }
        type K = 2
        type Expect = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal PickNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]
        type K1 = number
        type K2 = Indices<T>
        type Expect<K extends keyof Remap<T>> = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<Expect<K1>>()
        expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<Expect<K2>>()
      })

      it('should equal PickNative<U, N> if N intersects keyof U', () => {
        // Arrange
        type T = { readonly '0'?: Vehicle; readonly '1'?: Vehicle }
        type K = 0
        type Expect = PickNative<Remap<T>, Stringify<K>>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })
    })

    describe('K extends string', () => {
      it('should equal {} if K cannot index U', () => {
        expectTypeOf<TestSubject<Vehicle, 'vrm'>>().toEqualTypeOf<{}>()
      })

      it('should equal PickNative<U, K> if K extends keyof U', () => {
        // Arrange
        type T = { [x: string]: string }
        type K = 'vrm'
        type Expect = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal PickNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type T = Partial<Readonly<Vehicle>>
        type K = 'vin'
        type Expect = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })
    })

    describe('K extends symbol', () => {
      it('should equal {} if K cannot index U', () => {
        expectTypeOf<TestSubject<Fn, typeof opaque>>().toEqualTypeOf<{}>()
      })

      it('should equal PickNative<U, K> if K extends keyof U', () => {
        // Arrange
        type T = { [x: symbol]: string }
        type K = typeof opaque
        type Expect = PickNative<Remap<T>, K>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
      })

      it('should equal PickNative<U, K> if K intersects keyof U', () => {
        // Arrange
        type T = Readonly<Fn>
        type K = typeof Symbol.hasInstance

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<PickNative<T, K>>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Vehicle | readonly [Vehicle, Vehicle['vin']]
      type K = '1' | 'vin'
      type Expect = { readonly 1: Vehicle['vin'] } | { vin: Vehicle['vin'] }

      // Expect
      expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
    })
  })
})
