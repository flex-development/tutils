/**
 * @file Type Tests - RequiredKeys
 * @module tutils/types/tests/unit-d/RequiredKeys
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../keys-required'
import type NIL from '../nil'
import type NumberLike from '../number-like'
import type { tag } from '../opaque'
import type Optional from '../optional'
import type Timestamp from '../timestamp'

describe('unit-d:types/RequiredKeys', () => {
  it('should equal never if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNever()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal never if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toBeNever()
  })

  describe('T extends ObjectCurly', () => {
    it('should construct union of required keys', () => {
      expectTypeOf<TestSubject<Vehicle>>().toEqualTypeOf<keyof Vehicle>()
    })

    it('should equal never if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
    })
  })

  describe('T extends Primitive', () => {
    it('should equal never if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<NIL>>().toBeNever()
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })

    describe('T extends bigint', () => {
      it('should construct union of required keys', () => {
        // Arrange
        type T1 = bigint
        type T2 = T1 & { readonly a: 1; b?: 1; c?: 1 | undefined }
        type E1 = keyof T1
        type E2 = keyof Omit<T2, 'b' | 'c'>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
      })
    })

    describe('T extends boolean', () => {
      it('should construct union of required keys', () => {
        // Arrange
        type T1 = boolean
        type T2 = T1 & { readonly a: 1; b?: 1; c?: 1 | undefined }
        type E1 = keyof T1
        type E2 = keyof Omit<T2, 'b' | 'c'>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
      })
    })

    describe('T extends number', () => {
      it('should construct union of required keys', () => {
        // Arrange
        type T1 = number
        type T2 = T1 & { readonly a: 1; b?: 1; c?: 1 | undefined }
        type T3 = Timestamp<'unix'>
        type E1 = keyof number
        type E2 = keyof Omit<T2, 'b' | 'c'>
        type E3 = E1 | typeof tag

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
        expectTypeOf<TestSubject<T3>>().toEqualTypeOf<E3>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should construct union of required keys', () => {
          // Arrange
          type T = 'abc'
          type Expect = Exclude<keyof string, number> | Indices<T>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends Indices<T>', () => {
        it('should construct union of required keys', () => {
          // Arrange
          type T1 = string
          type T2 = string & { readonly a: 1; b?: 1; c?: 1 | undefined }
          type E1 = keyof T1
          type E2 = Exclude<keyof T2, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
          expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should construct union of required keys', () => {
        // Arrange
        type T1 = symbol
        type T2 = T1 & { readonly a: 1; b?: 1; c?: 1 | undefined }
        type E1 = keyof T1
        type E2 = keyof Omit<T2, 'b' | 'c'>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct union of required keys', () => {
      // Arrange
      type T1 = Fn
      type T2 = T1 & { readonly a: 1; b?: 1; c?: 1 | undefined }
      type E1 = keyof T1
      type E2 = keyof Omit<T2, 'b' | 'c'>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should construct union of required keys', () => {
        // Arrange
        type T = readonly [Vehicle, Optional<Vehicle>, Vehicle?]
        type Expect = Exclude<keyof T, NumberLike> | -2 | -3 | 0 | 1

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('number extends Indices<T>', () => {
      it('should construct union of required keys', () => {
        // Arrange
        type T1 = Vehicle[] & { readonly a: 1; b?: 1; c?: 1 | undefined }
        type T2 = Partial<Vehicle[]>
        type E1 = Exclude<keyof T1, 'b' | 'c'>
        type E2 = keyof T2

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Vehicle | [Vehicle]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        Exclude<keyof unknown[], number> | Indices<[Vehicle]> | keyof Vehicle
      >()
    })
  })
})
