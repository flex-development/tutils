/**
 * @file Type Tests - ExactOptionalKeys
 * @module tutils/types/tests/unit-d/ExactOptionalKeys
 */

import type Author from '#fixtures/interfaces/author'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../keys-optional-exact'
import type Optional from '../optional'

describe('unit-d:types/ExactOptionalKeys', () => {
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
    it('should construct union of exact optional keys', () => {
      // Arrange
      type T1 = Author
      type T2 = Partial<Vehicle>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<'email'>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<keyof Vehicle>()
    })

    it('should equal never if IsNever<keyof Objectify<T>> extends true', () => {
      expectTypeOf<TestSubject<{}>>().toBeNever()
      expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
    })
  })

  describe('T extends Primitive', () => {
    it('should equal never if IsNever<keyof Objectify<T>> extends true', () => {
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })

    describe('T extends bigint', () => {
      it('should construct union of exact optional keys', () => {
        // Arrange
        type T1 = bigint
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a'>()
      })
    })

    describe('T extends boolean', () => {
      it('should construct union of exact optional keys', () => {
        // Arrange
        type T1 = boolean
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a'>()
      })
    })

    describe('T extends number', () => {
      it('should construct union of exact optional keys', () => {
        // Arrange
        type T1 = number
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a'>()
      })
    })

    describe('T extends string', () => {
      it('should construct union of exact optional keys', () => {
        // Arrange
        type T1 = string
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a'>()
      })
    })

    describe('T extends symbol', () => {
      it('should construct union of exact optional keys', () => {
        // Arrange
        type T1 = symbol
        type T2 = T1 & { readonly a?: string; b?: string | undefined }

        // Expect
        expectTypeOf<TestSubject<T1>>().toBeNever()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a'>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct union of exact optional keys', () => {
      // Arrange
      type T1 = Fn
      type T2 = T1 & { readonly a?: string; b?: string | undefined }

      // Expect
      expectTypeOf<TestSubject<T1>>().toBeNever()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<'a'>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    it('should construct union of exact optional keys', () => {
      // Arrange
      type T1 = string[] | ['a'] | [Optional<'b'>]
      type T2 = ['a'?]
      type T3 = T1 & { readonly a?: string; b?: string | undefined }
      type T4 = Pick<T3, 'a' | 'b'> & T2

      // Expect
      expectTypeOf<TestSubject<T1>>().toBeNever()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Indices<T2>>()
      expectTypeOf<TestSubject<T3>>().toEqualTypeOf<'a'>()
      expectTypeOf<TestSubject<T4>>().toEqualTypeOf<Indices<T2> | 'a'>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Author | [Author?]
      type Expect = Indices<[Author?]> | 'email'

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
