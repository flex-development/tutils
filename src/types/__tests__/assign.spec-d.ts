/**
 * @file Type Tests - Assign
 * @module tutils/types/tests/unit-d/Assign
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type TestSubject from '../assign'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type Nilable from '../nilable'
import type { tag } from '../opaque'
import type PropertyKey from '../property-key'

describe('unit-d:types/Assign', () => {
  type T = Book

  it('should equal Record<PropertyKey, any> & T if U is any', () => {
    // Arrange
    type Expect = Record<PropertyKey, any> & T

    // Expect
    expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<Expect>()
  })

  it('should equal T if U is never', () => {
    expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<T>()
  })

  describe('U extends ObjectCurly', () => {
    it('should assign properties of U to T', () => {
      // Arrange
      type U = {
        [x: string]: any
        readonly [tag]: 'book'
        readonly id?: string
        readonly publisher: string
      }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        Omit<T, 'publisher'> & U
      >()
    })

    it('should equal T if Keyof<U> is never', () => {
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
    })
  })

  describe('U extends readonly ObjectCurly[]', () => {
    it('should equal T if U extends readonly EmptyObject[]', () => {
      // Arrange
      type U1 = EmptyObject[]
      type U2 = [EmptyObject, EmptyObject, EmptyObject]
      type U3 = readonly EmptyObject[]
      type U4 = readonly [EmptyObject, EmptyObject, EmptyObject]

      // Expect
      expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U3>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U4>>().toEqualTypeOf<T>()
    })

    describe('IsLiteral<Length<U>> extends true', () => {
      it('should equal T if U extends Readonly<EmptyArray>', () => {
        expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
      })

      it('should assign properties of U[i] to T', () => {
        // Arrange
        type U = [
          { readonly [tag]: 'book' },
          { readonly id: string },
          { readonly publisher?: string },
          any,
          never,
          { readonly a: string },
          { readonly b: string },
          { readonly c: string },
          { readonly d: string },
          { readonly e: string },
          { readonly f: string },
          { readonly g: string },
          { readonly h: string },
          { readonly i: string },
          { readonly j: string },
          { readonly k: string },
          { readonly m: string },
          { readonly n: string },
          { readonly o: string },
          { readonly p: string },
          { readonly q: string },
          { readonly r: string },
          { readonly s: string },
          { readonly t: string },
          { readonly u: string },
          { readonly v: string },
          { readonly w: string },
          { readonly x: string },
          { readonly y: string },
          { readonly z: string }
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          Omit<T, 'publisher'> & {
            [x: string]: any
            [x: number]: any
            [x: symbol]: any
            readonly [tag]: 'book'
            readonly a: string
            readonly b: string
            readonly c: string
            readonly d: string
            readonly e: string
            readonly f: string
            readonly g: string
            readonly h: string
            readonly i: string
            readonly id: string
            readonly j: string
            readonly k: string
            readonly m: string
            readonly n: string
            readonly o: string
            readonly p: string
            readonly publisher?: string
            readonly q: string
            readonly r: string
            readonly s: string
            readonly t: string
            readonly u: string
            readonly v: string
            readonly w: string
            readonly x: string
            readonly y: string
            readonly z: string
          }
        >()
      })
    })

    describe('number extends Length<U>', () => {
      it('should assign properties of U[0] to T', () => {
        // Arrange
        type U = { readonly [tag]: 'book'; readonly id?: string }[]
        type Expect = Omit<T, keyof U[0]> & U[0]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Author | Book>
      type U = { readonly [tag]: string } | { readonly id: string }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        (T & { readonly [tag]: string }) | (T & { readonly id: string })
      >()
    })
  })
})
