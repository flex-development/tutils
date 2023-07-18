/**
 * @file Type Tests - Values
 * @module tutils/types/tests/unit-d/Values
 */

import type Book from '#fixtures/interfaces/book'
import type Publisher from '#fixtures/interfaces/publisher'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type NumberString from '../number-string'
import type TestSubject from '../values'

describe('unit-d:types/Values', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal T[] if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })

  it('should equal any[] if object extends T', () => {
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<any[]>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal T[Head<Stringify<Path<T, true>>, Dot>][]', () => {
      // Arrange
      type T = Book

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[keyof T][]>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal EmptyArray if EmptyObject extends T', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal T[Head<Stringify<Path<T, true>>, Dot>][]', () => {
      // Arrange
      type T = Readonly<Fn> & { data: number; id: string }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<NumberString[]>()
    })

    describe('Fn extends T', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<Readonly<Fn>>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal T', () => {
        // Arrange
        type T = readonly [Vehicle, Nullable<Vehicle>, Vehicle?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal T', () => {
        // Arrange
        type T = Nullable<Vehicle>[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Book | Publisher>
      type Expect = Book[keyof Book][] | Publisher[keyof Publisher][] | []

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
