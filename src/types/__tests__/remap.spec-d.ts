/**
 * @file Type Tests - Remap
 * @module tutils/types/tests/unit-d/Remap
 */

import type Vehicle from '#fixtures/vehicle'
import type At from '../at'
import type Fn from '../fn'
import type IfNumeric from '../if-numeric'
import type Nullable from '../nullable'
import type Objectify from '../objectify'
import type { tag } from '../opaque'
import type Partial from '../partial'
import type TestSubject from '../remap'

describe('unit-d:types/Remap', () => {
  it('should equal Objectify<T> if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  it('should equal Objectify<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  it('should equal Objectify<T> if T is unknown', () => {
    // Arrange
    type T = unknown

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal Objectify<T>', () => {
      // Arrange
      type T = Vehicle

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T1 = null
        type T2 = undefined

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Objectify<T1>>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Objectify<T2>>()
      })
    })

    describe('T extends bigint', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T = 1n

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('T extends boolean', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T = false

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('T extends number', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T = 1

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should construct object representation of T', () => {
          // Arrange
          type T = 'vin'

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<
            {
              [x: number]: At<T, number>
              0: At<T, 0>
              1: At<T, 1>
              2: At<T, 2>
              [-1]: At<T, -1>
              [-2]: At<T, -2>
              [-3]: At<T, -3>
            } & { [K in keyof T as number extends K ? never : K]: T[K] }
          >()
        })
      })

      describe('number extends Indices<T>', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = string

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T = typeof tag

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal Objectify<T>', () => {
      // Arrange
      type T = Readonly<Fn>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should construct object representation of T', () => {
        // Arrange
        type T = readonly [Vehicle, Vehicle, Nullable<Vehicle>?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          {
            readonly 0: At<T, 0>
            readonly 1: At<T, 1>
            readonly 2?: At<T, 2, never>
            readonly [-1]?: At<T, -1, never>
            readonly [-2]: At<T, -2>
            readonly [-3]: At<T, -3>
          } & { [K in keyof T as IfNumeric<K, never, K>]: T[K] }
        >()
      })
    })

    describe('number extends Indices<T>', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T = Partial<(Vehicle | Vehicle['vin'])[]>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nullable<Vehicle | Vehicle['vin']>
      type Expect = Objectify<null> | Objectify<string> | Objectify<Vehicle>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
