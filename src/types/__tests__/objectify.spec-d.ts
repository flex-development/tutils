/**
 * @file Type Tests - Objectify
 * @module tutils/types/tests/unit-d/Objectify
 */

import type Vehicle from '#fixtures/vehicle'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Nullable from '../nullable'
import type TestSubject from '../objectify'
import type { tag as opaque } from '../opaque'
import type PropertyKey from '../property-key'

describe('unit-d:types/Objectify', () => {
  it('should equal {} if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<{}>()
  })

  it('should equal Record<PropertyKey, T> if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Record<PropertyKey, T>>()
  })

  it('should equal Record<T, T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Record<T, T>>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal T', () => {
      // Arrange
      type T = Readonly<Vehicle> & {
        [x: `riders.${number}.name`]: string
        [x: `riders.${number}.uuid`]: number
        'driver.data.nanoid': string
      }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<{}>()
      })
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal {}', () => {
        // Arrange
        type T1 = null
        type T2 = undefined

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<{}>()
      })
    })

    describe('T extends bigint', () => {
      it('should equal { [K in keyof T]: T[K] }', () => {
        // Arrange
        type T = 0n
        type Expect = { [K in keyof T]: T[K] }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends boolean', () => {
      it('should equal { [K in keyof T]: T[K] }', () => {
        // Arrange
        type T = false
        type Expect = { [K in keyof T]: T[K] }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends number', () => {
      it('should equal { [K in keyof T]: T[K] }', () => {
        // Arrange
        type T = 0
        type Expect = { [K in keyof T]: T[K] }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends string', () => {
      it('should equal { [K in keyof T]: T[K] }', () => {
        // Arrange
        type T = 'vehicle'
        type Expect = { [K in keyof T]: T[K] }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends symbol', () => {
      it('should equal { [K in keyof T]: T[K] }', () => {
        // Arrange
        type T = typeof opaque
        type Expect = { [K in keyof T]: T[K] }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal { [K in keyof T]: T[K] }', () => {
      // Arrange
      type T = Readonly<Fn>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ [K in keyof T]: T[K] }>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal { [K in keyof T]: T[K] }', () => {
      // Arrange
      type T = readonly [Vehicle, Nullable<Vehicle>, Vehicle?]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ [K in keyof T]: T[K] }>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nullable<Vehicle | 'vehicle'>>>().toEqualTypeOf<
        Vehicle | { [K in keyof string]: string[K] } | {}
      >()
    })
  })
})
