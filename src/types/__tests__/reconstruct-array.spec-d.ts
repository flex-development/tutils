/**
 * @file Type Tests - ReconstructArray
 * @module tutils/types/tests/unit-d/ReconstructArray
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Objectify from '../objectify'
import type TestSubject from '../reconstruct-array'

describe('unit-d:types/ReconstructArray', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal T[] if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })

  it('should equal T if T does not extend readonly unknown[]', () => {
    // Arrange
    type T = Objectify<Vehicle['vin']>

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      type U = readonly [Vehicle, Nullable<Vehicle>?] & { id: string }

      it('should equal T if T is not objectified array', () => {
        expectTypeOf<TestSubject<U>>().toEqualTypeOf<U>()
      })

      it('should reconstruct objectified array', () => {
        expectTypeOf<TestSubject<Objectify<U>>>().toEqualTypeOf<U>()
      })
    })

    describe('number extends Length<T>', () => {
      type U = readonly Vehicle[] & { id: string }

      it('should equal T if T is not objectified array', () => {
        expectTypeOf<TestSubject<U>>().toEqualTypeOf<U>()
      })

      it('should reconstruct objectified array', () => {
        expectTypeOf<TestSubject<Objectify<U>>>().toEqualTypeOf<U>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Vehicle[] | [Vehicle]
      type T = Nilable<Objectify<U>>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Nilable<U>>()
    })
  })
})
