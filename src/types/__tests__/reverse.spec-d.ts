/**
 * @file Type Tests - Reverse
 * @module tutils/types/tests/unit-d/Reverse
 */

import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type TestSubject from '../reverse'

describe('unit-d:types/Reverse', () => {
  it('should equal any[] if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<any[]>()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal T if Length<Required<T>> extends 0', () => {
        // Arrange
        type T1 = EmptyArray
        type T2 = Readonly<EmptyArray>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<T1>()
        expectTypeOf<T2>().toEqualTypeOf<T2>()
      })

      it('should equal T if Length<Required<T>> extends 1', () => {
        // Arrange
        type T1 = ['a']
        type T2 = readonly ['z'?]

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<T1>()
        expectTypeOf<T2>().toEqualTypeOf<T2>()
      })

      it('should reverse T', () => {
        // Arrange
        type T1 = readonly ['a', 'b', 'c', 'd', 'e']
        type T2 = readonly ['a'?, 'b'?, 'c'?, 'd'?, 'e'?]
        // prettier-ignore
        type T3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'?]
        type E1 = ['e', 'd', 'c', 'b', 'a']
        type E2 = ['e'?, 'd'?, 'c'?, 'b'?, 'a'?]
        // prettier-ignore
        type E3 = ['z' | undefined, 'y', 'x', 'w', 'v', 'u', 't', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', 'z', 'y', 'x', 'w', 'v', 'u', 't', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', 'z', 'y', 'x', 'w', 'v', 'u', 't', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<E2>()
        expectTypeOf<TestSubject<T3>>().toEqualTypeOf<E3>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal T', () => {
        // Arrange
        type T1 = string[]
        type T2 = readonly string[]

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<T1>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<T2>()
      })
    })
  })

  describe('T extends string', () => {
    describe('IsLiteral<Length<T>> extends true', () => {
      it('should equal T if Length<T> extends 0', () => {
        expectTypeOf<TestSubject<EmptyString>>().toEqualTypeOf<EmptyString>()
      })

      it('should equal T if Length<T> extends 1', () => {
        // Arrange
        type T = 'z'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })

      it('should reverse T', () => {
        // Arrange
        type T = 'abcdefghijklmnopqrstuvwxyz'
        type Expect = 'zyxwvutsrqponmlkjihgfedcba'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal T', () => {
        expectTypeOf<TestSubject<string>>().toBeString()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      // prettier-ignore
      type T = readonly ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'?] | 'abcdefghijklmnopqrstuvwxyz'
      // prettier-ignore
      type Expect = 'zyxwvutsrqponmlkjihgfedcba' | ['z' | undefined, 'y', 'x', 'w', 'v', 'u', 't', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
