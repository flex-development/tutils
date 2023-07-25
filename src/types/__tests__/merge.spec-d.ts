/**
 * @file Type Tests - Merge
 * @module tutils/types/tests/unit-d/Merge
 */

import type Book from '#fixtures/interfaces/book'
import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type Assign from '../assign'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type TestSubject from '../merge'
import type Nullable from '../nullable'
import type Objectify from '../objectify'
import type Omit from '../omit'
import type { tag } from '../opaque'
import type Partial from '../partial'

describe('unit-d:types/Merge', () => {
  it('should equal Objectify<U> & T if U is any', () => {
    // Arrange
    type T = Book
    type U = any

    // Expect
    expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Objectify<U> & T>()
  })

  it('should equal T if U is never', () => {
    // Arrange
    type T = Book

    // Expect
    expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<T>()
  })

  describe('U extends ObjectCurly', () => {
    it('should equal T if EmptyObject extends U', () => {
      // Arrange
      type T = Vehicle

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, {}>>().toEqualTypeOf<T>()
    })

    it('should merge T and U', () => {
      // Arrange
      type T = Partial<Vehicle>
      type U = { readonly vin: Vehicle['vin']; readonly vrm: string }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Assign<T, U>>()
    })

    it('should recursively merge nested pojos', () => {
      // Arrange
      type T = Book
      type U = { readonly publisher?: Nullable<{ phone: number }> }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        Omit<T, keyof U> & {
          readonly publisher?: Nullable<
            | Assign<NonNullable<T['publisher']>, NonNullable<U['publisher']>>
            | NonNullable<U['publisher']>
          >
        }
      >()
    })

    describe('M["concat"] extends true', () => {
      it('should concat arrays', () => {
        // Arrange
        type T = Book
        type U = { authors: string[] }

        // Expect
        expectTypeOf<TestSubject<T, U, { concat: true }>>().toEqualTypeOf<
          Omit<T, 'authors'> & { authors: [...T['authors'], ...U['authors']] }
        >()
      })
    })
  })

  describe('U extends readonly ObjectCurly[]', () => {
    it('should equal T if U extends Readonly<EmptyArray>', () => {
      // Arrange
      type T = Vehicle

      // Expect
      expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
    })

    it('should equal T if U extends readonly EmptyObject[]', () => {
      // Arrange
      type T = Book

      // Expect
      expectTypeOf<TestSubject<T, EmptyObject[]>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, [EmptyObject]>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, readonly EmptyObject[]>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, readonly [EmptyObject]>>().toEqualTypeOf<T>()
    })

    describe('U extends readonly [(infer H)?, ...infer R]', () => {
      it('should merge T and H', () => {
        // Arrange
        type T = Vehicle
        type U1 = (Readonly<T> & { readonly [tag]: 'vehicle' })[]
        type U2 = (Readonly<T> | { readonly [tag]: 'vehicle' })[]

        // Expect
        expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<Assign<T, U1[0]>>()
        expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<Assign<T, U2[0]>>()
      })

      it('should recursively merge nested pojos', () => {
        // Arrange
        type T = { res?: { data: object } }
        type U = { res: string | { readonly msg?: string } }[]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<{
          res: string | { data: object; readonly msg?: string }
        }>()
      })

      describe('M["concat"] extends true', () => {
        it('should concat arrays', () => {
          // Arrange
          type T = Book
          type U = { authors: string[] }[]

          // Expect
          expectTypeOf<TestSubject<T, U, { concat: true }>>().toEqualTypeOf<
            Omit<T, 'authors'> & {
              authors: [...T['authors'], ...U[0]['authors']]
            }
          >()
        })
      })
    })

    describe('U extends readonly [infer H, ...infer R]', () => {
      it('should merge T and U[i]', () => {
        // Arrange
        type T = Partial<Vehicle>
        type U = [
          { drivers?: string[] },
          { location?: string },
          { readonly vrm: string },
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
          { readonly l: string },
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
          { readonly z: string },
          { readonly 0: number },
          { readonly 1: number },
          { readonly 2: number },
          { readonly 3: number },
          { readonly 4: number },
          { readonly 5: number },
          { readonly 6: number },
          { readonly 7: number },
          { readonly 8: number },
          { readonly 9: number }
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          T &
            U[0] &
            U[1] &
            U[2] & {
              readonly 0: number
              readonly 1: number
              readonly 2: number
              readonly 3: number
              readonly 4: number
              readonly 5: number
              readonly 6: number
              readonly 7: number
              readonly 8: number
              readonly 9: number
              readonly a: string
              readonly b: string
              readonly c: string
              readonly d: string
              readonly e: string
              readonly f: string
              readonly g: string
              readonly h: string
              readonly i: string
              readonly j: string
              readonly k: string
              readonly l: string
              readonly m: string
              readonly n: string
              readonly o: string
              readonly p: string
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

      it('should recursively merge nested pojos', () => {
        // Arrange
        type T = Vehicle & { metadata: {} }
        type U = [
          { metadata: { drivers: string[] } },
          { metadata: { location: string } },
          { metadata: { vrm: string } },
          any,
          never,
          { metadata: { a: string } },
          { metadata: { b: string } },
          { metadata: { c: string } },
          { metadata: { d: string } },
          { metadata: { e: string } },
          { metadata: { f: string } },
          { metadata: { g: string } },
          { metadata: { h: string } },
          { metadata: { i: string } },
          { metadata: { j: string } },
          { metadata: { k: string } },
          { metadata: { l: string } },
          { metadata: { m: string } },
          { metadata: { n: string } },
          { metadata: { o: string } },
          { metadata: { p: string } },
          { metadata: { q: string } },
          { metadata: { r: string } },
          { metadata: { s: string } },
          { metadata: { t: string } },
          { metadata: { u: string } },
          { metadata: { v: string } },
          { metadata: { w: string } },
          { metadata: { x: string } },
          { metadata: { y: string } },
          { metadata: { z: string } },
          { metadata: { 0: number } },
          { metadata: { 1: number } },
          { metadata: { 2: number } },
          { metadata: { 3: number } },
          { metadata: { 4: number } },
          { metadata: { 5: number } },
          { metadata: { 6: number } },
          { metadata: { 7: number } },
          { readonly metadata: { 8: number } }
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          Objectify<any> &
            Omit<T, keyof U[0]> & {
              readonly metadata: {
                0: number
                1: number
                2: number
                3: number
                4: number
                5: number
                6: number
                7: number
                8: number
                a: string
                b: string
                c: string
                d: string
                drivers: string[]
                e: string
                f: string
                g: string
                h: string
                i: string
                j: string
                k: string
                location: string
                l: string
                m: string
                n: string
                o: string
                p: string
                q: string
                r: string
                s: string
                t: string
                u: string
                v: string
                vrm: string
                w: string
                x: string
                y: string
                z: string
              }
            }
        >()
      })

      describe('M["concat"] extends true', () => {
        it('should concat arrays', () => {
          // Arrange
          type T = Book
          type U = [{ authors: string[] }]

          // Expect
          expectTypeOf<TestSubject<T, U, { concat: true }>>().toEqualTypeOf<
            Omit<T, 'authors'> & {
              authors: [...T['authors'], ...U[0]['authors']]
            }
          >()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Person | Vehicle
      type U =
        | ({ readonly [tag]: string } | { readonly id: string })[]
        | EmptyObject
        | [{ readonly [tag]: string }, { readonly id: string }]

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        | T
        | (T & ({ readonly [tag]: string } & { readonly id: string }))
        | (T & ({ readonly [tag]: string } | { readonly id: string }))
      >()
    })
  })
})
