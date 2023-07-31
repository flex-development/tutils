/**
 * @file Type Tests - Indices
 * @module tutils/types/tests/unit-d/Indices
 */

import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type TestSubject from '../indices'
import type Length from '../length'
import type NaturalRange from '../range-natural'
import type Subtract from '../subtract'
import type UnwrapNumeric from '../unwrap-numeric'

describe('unit-d:types/Indices', () => {
  type IndicesRange<T extends string | readonly unknown[]> =
    Length<T> extends infer L extends number
      ? NaturalRange<L> extends infer R extends number
        ? {
            [K in R]:
              | K
              | UnwrapNumeric<
                  Exclude<`-${Subtract<Length<Required<T>>, K>}`, '-0'>
                >
          }[R]
        : never
      : never

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal number if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNumber()
  })

  describe('T extends string', () => {
    it('should equal never if T extends EmptyString', () => {
      expectTypeOf<TestSubject<EmptyString>>().toBeNever()
    })

    describe('Split<T> extends readonly [T[0], ...T[number][]]', () => {
      it('should construct union of negative and positive indices', () => {
        // Arrange
        type T = 'abc'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<IndicesRange<T>>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal number', () => {
        expectTypeOf<TestSubject<string>>().toEqualTypeOf<number>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal never if T extends Readonly<EmptyArray>', () => {
      expectTypeOf<TestSubject<EmptyArray>>().toBeNever()
      expectTypeOf<TestSubject<Readonly<EmptyArray>>>().toBeNever()
    })

    describe('T extends readonly [T[0], ...T[number][]]', () => {
      it('should construct union of negative and positive indices', () => {
        // Arrange
        type T = readonly ['a', 'b'?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<IndicesRange<T>>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal number', () => {
        expectTypeOf<TestSubject<readonly string[]>>().toEqualTypeOf<number>()
      })
    })
  })
})
