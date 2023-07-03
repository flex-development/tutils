/**
 * @file Type Tests - Entries
 * @module tutils/types/tests/unit-d/Entries
 */

import type Book from '#fixtures/book.interface'
import type Vehicle from '#fixtures/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type TestSubject from '../entries'
import type Fn from '../fn'
import type Nullable from '../nullable'
import type Numeric from '../numeric'

describe('unit-d:types/Entries', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal [string, T[]][] if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<[string, T[]][]>()
  })

  it('should equal [string, any[]][] if object extends T', () => {
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<[string, any[]][]>()
  })

  describe('T extends ObjectCurly', () => {
    it('should construct array of enumerable string-keyed entries', () => {
      // Arrange
      type T = Book

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        (
          | ['authors', T['authors']]
          | ['isbn', T['isbn']]
          | ['publisher', T['publisher']]
          | ['readers', T['readers']]
          | ['title', T['title']]
        )[]
      >()
    })

    it('should equal EmptyArray if EmptyObject extends T', () => {
      expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct array of enumerable string-keyed entries', () => {
      // Arrange
      type T = Readonly<Fn> & { data: number; id: string }
      type Expect = (['data', T['data']] | ['id', T['id']])[]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
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
      it('should construct array of enumerable string-keyed entries', () => {
        // Arrange
        type T = readonly [Vehicle, Nullable<Vehicle>, Vehicle?]
        type Expect = readonly [['0', T[0]], ['1', T[1]], ['2', T[2]]?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should construct array of enumerable string-keyed entries', () => {
        // Arrange
        type T = Nullable<Vehicle>[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<[Numeric, T[0]][]>()
      })
    })
  })
})
