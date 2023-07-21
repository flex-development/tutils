/**
 * @file Type Tests - Overwrite
 * @module tutils/types/tests/unit-d/Overwrite
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type Assign from '../assign'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type Omit from '../omit'
import type OneOrMany from '../one-or-many'
import type TestSubject from '../overwrite'
import type Partial from '../partial'

describe('unit-d:types/Overwrite', () => {
  it('should equal T if U is any', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<T>()
  })

  it('should equal T if U is never', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<T>()
  })

  describe('U extends ObjectCurly', () => {
    type T = Partial<Vehicle>

    it('should assign mutual properties of U to T', () => {
      // Arrange
      type U = { readonly vin: string; vrm: string }
      type Expect = Assign<T, Omit<U, 'vrm'>>

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
    })

    it('should equal T if EmptyObject extends U', () => {
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, {}>>().toEqualTypeOf<T>()
    })
  })

  describe('U extends readonly ObjectCurly[]', () => {
    type T = Partial<Vehicle>

    it('should equal T if U extends readonly EmptyObject[]', () => {
      // Arrange
      type U1 = (EmptyObject | {})[]
      type U2 = [EmptyObject, EmptyObject, {}, {}]
      type U3 = Readonly<U1>
      type U4 = Readonly<U2>

      // Expect
      expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U3>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U4>>().toEqualTypeOf<T>()
    })

    describe('U extends readonly [infer H, ...infer R]', () => {
      it('should assign mutual properties of U[i] to T', () => {
        // Arrange
        type U = [
          { readonly make?: Vehicle['make'] },
          { readonly model?: Vehicle['model'] },
          { readonly vin?: Vehicle['vin'] },
          { readonly vrm: string },
          { readonly year?: Vehicle['year'] },
          any,
          never,
          { readonly make: Vehicle['make'] },
          { readonly model: Vehicle['model'] },
          { readonly vin: Vehicle['vin'] },
          { readonly year: Vehicle['year'] }
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Readonly<Vehicle>>()
      })

      it('should equal T if U extends Readonly<EmptyArray>', () => {
        expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
      })
    })

    describe('number extends Length<U>', () => {
      it('should assign mutual properties of U[0] to T', () => {
        // Arrange
        type U = { readonly vin: string; vrm: string }[]
        type Expect = Assign<T, Omit<U[0], 'vrm'>>

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Partial<Person | Vehicle>
      type U = OneOrMany<Person | Vehicle>

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Person | T | Vehicle>()
    })
  })
})
