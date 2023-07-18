/**
 * @file Type Tests - OptionalKeys
 * @module tutils/types/tests/unit-d/OptionalKeys
 */

import type Author from '#fixtures/interfaces/author'
import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../keys-optional'
import type NIL from '../nil'
import type Optional from '../optional'

describe('unit-d:types/OptionalKeys', () => {
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
    it('should construct union of optional keys', () => {
      // Arrange
      type T1 = Author
      type T2 = Partial<Vehicle>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<'display_name' | 'email'>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<keyof Vehicle>()
    })

    it('should equal never if keyof T is never', () => {
      expectTypeOf<TestSubject<{}>>().toBeNever()
    })
  })

  describe('T extends Primitive', () => {
    it('should equal never if keyof T is never', () => {
      expectTypeOf<TestSubject<NIL>>().toBeNever()
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })

    describe('T extends bigint', () => {
      it('should construct union of optional keys', () => {
        // Arrange
        type T1 = bigint
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
      })
    })

    describe('T extends boolean', () => {
      it('should construct union of optional keys', () => {
        // Arrange
        type T1 = boolean
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
      })
    })

    describe('T extends number', () => {
      it('should construct union of optional keys', () => {
        // Arrange
        type T1 = number
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should construct union of optional keys', () => {
          expectTypeOf<TestSubject<'xyz'>>().toBeNever()
        })
      })

      describe('number extends Length<T>', () => {
        it('should construct union of optional keys', () => {
          // Arrange
          type T1 = string
          type T2 = T1 & { readonly a?: string; b?: string | undefined }

          // Expect
          expectTypeOf<TestSubject<T1>>().toBeNever()
          expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should construct union of optional keys', () => {
        // Arrange
        type T1 = symbol
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct union of optional keys', () => {
      // Arrange
      type T1 = Fn
      type T2 = T1 & { readonly a?: string; b?: string | undefined }

      // Expect
      expectTypeOf<TestSubject<T1>>().toBeNever()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should construct union of optional keys', () => {
        // Arrange
        type T1 = readonly [Vehicle, Optional<Vehicle>]
        type T2 = readonly [...T1, Vehicle?]
        type T3 = T2 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<-1 | 2>()
        expectTypeOf<TestSubject<T3>>().toEqualTypeOf<-1 | 'a' | 'b' | 2>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should construct union of optional keys', () => {
        // Arrange
        type T1 = Vehicle[]
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a' | 'b'>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Author | [Author?]
      type Expect = Indices<[Author?]> | 'display_name' | 'email'

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
