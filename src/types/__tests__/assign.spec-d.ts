/**
 * @file Type Tests - Assign
 * @module tutils/types/tests/unit-d/Assign
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../assign'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type NumberString from '../number-string'
import type Numeric from '../numeric'
import type Objectify from '../objectify'
import type Omit from '../omit'
import type { tag as opaque } from '../opaque'

describe('unit-d:types/Assign', () => {
  type T = Vehicle

  it('should equal Objectify<U> & T if U is any', () => {
    // Arrange
    type U = any

    // Expect
    expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Objectify<U> & T>()
  })

  it('should equal T if U is never', () => {
    expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<T>()
  })

  describe('U extends ObjectCurly', () => {
    it('should assign properties of U to T', () => {
      // Arrange
      type U = {
        [x: string]: NumberString
        readonly [opaque]: 'vehicle'
        vrm?: string
        year: `${Numeric}${Numeric}${Numeric}${Numeric}`
      }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Omit<T, 'year'> & U>()
    })

    it('should equal T if EmptyObject extends U', () => {
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, {}>>().toEqualTypeOf<T>()
    })

    it('should equal U if EmptyObject extends T', () => {
      // Arrange
      type U = Readonly<Vehicle>

      // Expect
      expectTypeOf<TestSubject<{}, U>>().toEqualTypeOf<U>()
      expectTypeOf<TestSubject<EmptyObject, U>>().toEqualTypeOf<U>()
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

    describe('IsTuple<U> extends true', () => {
      it('should equal T if U extends Readonly<EmptyArray>', () => {
        expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
      })

      it('should assign properties of U[i] to T', () => {
        // Arrange
        type U = [
          { readonly [opaque]: 'vehicle' },
          { vrm?: string },
          { year: `${Numeric}${Numeric}${Numeric}${Numeric}` },
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
          Omit<T, 'year'> &
            U[0] &
            U[1] &
            U[2] & {
              [x: number]: any
              [x: string]: any
              [x: symbol]: any
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
    })

    describe('number extends Length<U>', () => {
      it('should assign properties of U[0] to T', () => {
        // Arrange
        type U = { vrm?: string; year: `${Numeric}${Numeric}` }[]
        type Expect = Omit<T, 'year'> & U[0]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = EmptyObject | Vehicle
      type U = { readonly vin: string } | { readonly vrm: string }

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
        | { readonly vin: string }
        | { readonly vrm: string }
        | (Omit<Vehicle, 'vin'> & { readonly vin: string })
        | (Vehicle & { readonly vrm: string })
      >()
    })
  })
})
