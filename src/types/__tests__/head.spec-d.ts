/**
 * @file Type Tests - Head
 * @module tutils/types/tests/unit-d/Head
 */

import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type TestSubject from '../head'
import type Nilable from '../nilable'
import type Optional from '../optional'

describe('unit-d:types/Head', () => {
  it('should equal never if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNever()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal never if T extends Readonly<EmptyArray>', () => {
      expectTypeOf<TestSubject<EmptyArray>>().toBeNever()
      expectTypeOf<TestSubject<Readonly<EmptyArray>>>().toBeNever()
    })

    describe('T extends readonly [(infer H)?, ...T[number][]]', () => {
      it('should equal Optional<T[0]>', () => {
        // Arrange
        type T = string[]
        type Expect = Optional<T[0]>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<Readonly<T>>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends readonly [infer H, ...T[number][]]', () => {
      it('should equal T[0]', () => {
        // Arrange
        type T = [1, 2, 3]
        type Expect = T[0]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<Readonly<T>>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends string', () => {
    it('should equal never if T extends EmptyString', () => {
      expectTypeOf<TestSubject<EmptyString>>().toBeNever()
    })

    describe('T extends `${infer H}${D}${string}`', () => {
      it('should equal H', () => {
        expectTypeOf<TestSubject<'abc'>>().toEqualTypeOf<'a'>()
        expectTypeOf<TestSubject<'a.b.c', Dot>>().toEqualTypeOf<'a'>()
      })
    })

    describe('string extends T', () => {
      it('should equal T', () => {
        // Arrange
        type T = string

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = number[] | 'data.message' | [null, number]
      type Expect = Nilable<number | 'data'>

      // Expect
      expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<Expect>()
    })
  })
})
