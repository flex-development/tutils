/**
 * @file Type Tests - Merge
 * @module tutils/types/tests/unit-d/Merge
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type Assign from '../assign'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type TestSubject from '../merge'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type { tag } from '../opaque'
import type PropertyKey from '../property-key'

describe('unit-d:types/Merge', () => {
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
    it('should equal T if HasKeys<U> extends false', () => {
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, {}>>().toEqualTypeOf<T>()
    })

    it('should merge T and U', () => {
      // Arrange
      type U = {
        readonly [tag]: 'book'
        authors: string[]
        readonly id?: string
        readonly publisher: string
      }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Assign<T, U>>()
    })

    it('should recursively merge nested pojos', () => {
      // Arrange
      type U = {
        readonly publisher?: Nullable<{
          display_name: { readonly [tag]: 'display_name' }
          phone: number
        }>
      }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        Omit<T, keyof U> & {
          readonly publisher?: Nullable<
            Assign<
              T['publisher'],
              {
                display_name: { readonly [tag]: 'display_name'; value: string }
                phone: number
              }
            >
          >
        }
      >()
    })

    it('should skip mutual properties in U that are undefined', () => {
      // Arrange
      type U = { readonly id: undefined; readonly isbn: undefined }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Omit<U, 'isbn'> & T>()
    })

    describe('M["concat"] extends true', () => {
      it('should concat arrays', () => {
        // Arrange
        type U = { authors: string[] }

        // Expect
        expectTypeOf<TestSubject<T, U, { concat: true }>>().toEqualTypeOf<
          Omit<T, 'authors'> & { authors: (Author | string)[] }
        >()
      })
    })

    describe('M["defaults"] extends true', () => {
      it('should merge U with optional properties of T', () => {
        // Arrange
        type T = Omit<Book, 'readers'> & { readers: Set<string> | undefined }
        type U = {
          readonly [tag]: 'book'
          isbn?: number
          publisher: NonNullable<T['publisher']>
          readers: Set<string>
        }

        // Expect
        expectTypeOf<TestSubject<T, U, { defaults: true }>>().toEqualTypeOf<
          Omit<T, 'publisher'> & Omit<U, 'isbn' | 'readers'>
        >()
      })
    })
  })

  describe('U extends readonly ObjectCurly[]', () => {
    it('should equal T if U extends Readonly<EmptyArray>', () => {
      expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
    })

    it('should equal T if U extends readonly EmptyObject[]', () => {
      expectTypeOf<TestSubject<T, EmptyObject[]>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, [EmptyObject]>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, readonly EmptyObject[]>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, readonly [EmptyObject]>>().toEqualTypeOf<T>()
    })

    describe('U extends readonly [(infer H)?, ...infer R]', () => {
      it('should merge T and H', () => {
        // Arrange
        type U1 = (Readonly<T> & { readonly [tag]: 'book' })[]
        type U2 = (Readonly<T> | { readonly [tag]: 'book' })[]

        // Expect
        expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<Assign<T, U1[0]>>()
        expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<Assign<T, U2[0]>>()
      })

      it('should recursively merge nested pojos', () => {
        // Arrange
        type U = {
          readonly publisher?: Nullable<{
            display_name: { readonly [tag]: 'display_name' }
            phone: number
          }>
        }[]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          Omit<T, keyof U[0]> & {
            readonly publisher?: Nullable<
              Assign<
                T['publisher'],
                {
                  display_name: {
                    readonly [tag]: 'display_name'
                    value: string
                  }
                  phone: number
                }
              >
            >
          }
        >()
      })

      it('should skip mutual properties in H that are undefined', () => {
        // Arrange
        type U = { readonly id: undefined; readonly isbn: undefined }[]
        type Expect = Omit<U[0], 'isbn'> & T

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
      })

      describe('M["concat"] extends true', () => {
        it('should concat arrays', () => {
          // Arrange
          type U = { authors: string[] }[]

          // Expect
          expectTypeOf<TestSubject<T, U, { concat: true }>>().toEqualTypeOf<
            Omit<T, 'authors'> & { authors: (Author | string)[] }
          >()
        })
      })

      describe('M["defaults"] extends true', () => {
        it('should merge H with optional properties of T', () => {
          // Arrange
          type T = Omit<Book, 'readers'> & { readers: Set<string> | undefined }
          type U = {
            readonly [tag]: 'book'
            isbn?: number
            publisher: NonNullable<T['publisher']>
            readers: Set<string>
          }[]

          // Expect
          expectTypeOf<TestSubject<T, U, { defaults: true }>>().toEqualTypeOf<
            Omit<T, 'publisher'> & Omit<U[0], 'isbn' | 'readers'>
          >()
        })
      })
    })

    describe('U extends readonly [infer H, ...infer R]', () => {
      it('should merge T and U[i]', () => {
        // Arrange
        type U = [EmptyObject, { owner?: string }, T, { readonly isbn: number }]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Assign<T, U>>()
      })

      it('should recursively merge nested pojos', () => {
        // Arrange
        type U = [
          { publisher: { display_name: { readonly [tag]: 'display_name' } } },
          { publisher: { phone: number } },
          any,
          never,
          { readonly publisher: { location: string } },
          { readonly publisher: Nullable<{}> }
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          Omit<T, keyof U[0]> & {
            [x: number]: any
            [x: string]: any
            [x: symbol]: any
            readonly publisher: Nullable<
              Assign<
                T['publisher'],
                {
                  display_name: {
                    readonly [tag]: 'display_name'
                    value: string
                  }
                  location: string
                  phone: number
                }
              >
            >
          }
        >()
      })

      it('should skip mutual properties in U[i] that are undefined', () => {
        // Arrange
        type U = [{ readonly id: undefined }, { readonly isbn: undefined }]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<T & U[0]>()
      })

      describe('M["concat"] extends true', () => {
        it('should concat arrays', () => {
          // Arrange
          type U = [{ authors: string[] }]

          // Expect
          expectTypeOf<TestSubject<T, U, { concat: true }>>().toEqualTypeOf<
            Omit<T, 'authors'> & { authors: (Author | string)[] }
          >()
        })
      })

      describe('M["defaults"] extends true', () => {
        it('should merge U[i] with optional properties of T', () => {
          // Arrange
          type T = Omit<Book, 'readers'> & { readers: Set<string> | undefined }
          type U = [
            { readonly [tag]: 'book' },
            { isbn?: number },
            { publisher: NonNullable<T['publisher']> },
            { readers: Set<string> }
          ]

          // Expect
          expectTypeOf<TestSubject<T, U, { defaults: true }>>().toEqualTypeOf<
            Omit<T, keyof U[2]> & U[0] & U[2]
          >()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Author | Book>
      type U =
        | ({ readonly [tag]: string } | { readonly id?: string })[]
        | EmptyObject
        | [{ readonly [tag]: string }, { readonly id?: string }]

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        | NonNullable<T>
        | (T & ({ readonly [tag]: string } & { readonly id?: string }))
        | (T & ({ readonly [tag]: string } | { readonly id?: string }))
      >()
    })
  })
})
