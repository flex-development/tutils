/**
 * @file Type Tests - Defaults
 * @module tutils/types/tests/unit-d/Defaults
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../defaults'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type Numeric from '../numeric'
import type Objectify from '../objectify'
import type Omit from '../omit'
import type { tag as opaque } from '../opaque'
import type Optional from '../optional'
import type Partial from '../partial'

describe('unit-d:types/Defaults', () => {
  it('should equal Objectify<U> & T if U is any', () => {
    // Arrange
    type T = Partial<Person>
    type U = any

    // Expect
    expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Objectify<U> & T>()
  })

  it('should equal T if U is never', () => {
    // Arrange
    type T = Partial<Vehicle>

    // Expect
    expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<T>()
  })

  describe('U extends ObjectCurly', () => {
    type T = {
      make?: string
      model?: string
      vin: Optional<string>
      year: Optional<number>
    }

    it('should assign defaults from U to T', () => {
      // Arrange
      type Year = `${Numeric}${Numeric}${Numeric}${Numeric}`
      type U = Readonly<Omit<Vehicle, 'year'> & { year: Year }>
      type Expect = Omit<U, 'year'> & Readonly<{ year: Year | number }>

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
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
    describe('IsTuple<U> extends true', () => {
      type T = Partial<Vehicle>

      it('should assign defaults from U[i] to T', () => {
        // Arrange
        type U = [
          { readonly [opaque]: 'vehicle' },
          { readonly vrm: string },
          { readonly year: Numeric },
          Readonly<Vehicle>,
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
          Partial<Vehicle>
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          Objectify<any> &
            Readonly<Omit<Required<T>, 'year'> & { year: Numeric | number }> &
            U[0] &
            U[1] & {
              readonly 0: number
              readonly 1: number
              readonly 2: number
              readonly 3: number
              readonly 4: number
              readonly 5: number
              readonly 6: number
              readonly 7: number
              readonly 8: number
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

      it('should equal T if U extends Readonly<EmptyArray>', () => {
        expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
      })

      it('should equal T if U extends readonly EmptyObject[]', () => {
        // Arrange
        type U1 = [EmptyObject, EmptyObject, EmptyObject]
        type U2 = Readonly<U1>

        // Expect
        expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<T>()
      })
    })

    describe('number extends Length<U>', () => {
      type T = readonly [Optional<Vehicle>]

      it('should assign defaults from U[0] to T', () => {
        // Arrange
        type U = readonly { 0: Vehicle['vin']; readonly id: string }[]
        type Expect = readonly [Vehicle | string] & { readonly id: string }

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
      })

      it('should equal T if U extends never[]', () => {
        // Arrange
        type U1 = never[]
        type U2 = Readonly<U1>

        // Expect
        expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<T>()
      })

      it('should equal T if U extends readonly EmptyObject[]', () => {
        // Arrange
        type U1 = EmptyObject[]
        type U2 = Readonly<U1>

        // Expect
        expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<T>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = EmptyObject | Readonly<EmptyArray>
      type U = { 0: Vehicle } | { 0: Vehicle['vin'] }
      type Expect = Readonly<[Vehicle['vin']] | [Vehicle]> | U

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
    })
  })
})
