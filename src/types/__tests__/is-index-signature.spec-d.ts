/**
 * @file Type Tests - IsIndexSignature
 * @module tutils/types/tests/unit-d/IsIndexSignature
 */

import type Fn from '../fn'
import type TestSubject from '../is-index-signature'
import type Nilable from '../nilable'
import type Numeric from '../numeric'
import type OneOrMany from '../one-or-many'

describe('unit-d:types/IsIndexSignature', () => {
  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<string, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<string[], never>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never, number>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown, number>>().toEqualTypeOf<false>()
  })

  describe('T extends ObjectCurly', () => {
    type T = {
      [x: Numeric]: string
      [x: number]: any
      [x: string]: any
      [x: symbol]: any
      hello: 'world'
      foo?: string
    }

    it('should equal false if K is not index signature key', () => {
      expectTypeOf<TestSubject<T, 'hello'>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<T, 'foo'>>().toEqualTypeOf<false>()
    })

    it('should equal true if K is index signature key', () => {
      expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends bigint', () => {
      type T = bigint & {
        [x: Numeric]: string
        [x: number]: any
        [x: string]: any
        [x: symbol]: any
      }

      it('should equal false if K is not index signature key', () => {
        expectTypeOf<TestSubject<T, keyof bigint>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is index signature key', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends boolean', () => {
      type T = boolean & {
        [x: Numeric]: string
        [x: number]: any
        [x: string]: any
        [x: symbol]: any
      }

      it('should equal false if K is not index signature key', () => {
        expectTypeOf<TestSubject<T, keyof boolean>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is index signature key', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends number', () => {
      type T = number & {
        [x: Numeric]: string
        [x: number]: any
        [x: string]: any
        [x: symbol]: any
      }

      it('should equal false if K is not index signature key', () => {
        expectTypeOf<TestSubject<T, keyof number>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is index signature key', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends string', () => {
      type T = string

      it('should equal false if K is not index signature key', () => {
        // Arrange
        type K = Exclude<keyof string, number>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is index signature key', () => {
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends symbol', () => {
      type T = symbol & {
        [x: Numeric]: string
        [x: number]: any
        [x: string]: any
        [x: symbol]: any
      }

      it('should equal false if K is not index signature key', () => {
        expectTypeOf<TestSubject<T, keyof symbol>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is index signature key', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    type T = Readonly<Fn> & {
      [x: Numeric]: string
      [x: number]: any
      [x: string]: any
      [x: symbol]: any
    }

    it('should equal false if K is not index signature key', () => {
      expectTypeOf<TestSubject<T, keyof Readonly<Fn>>>().toEqualTypeOf<false>()
    })

    it('should equal true if K is index signature key', () => {
      expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    type T = string[]

    it('should equal false if K is not index signature key', () => {
      // Arrange
      type K = Exclude<keyof string[], number>

      // Expect
      expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
    })

    it('should equal true if K is index signature key', () => {
      expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<OneOrMany<string> | { [x: Numeric]: number }>
      type K = Numeric | number

      expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<boolean>()
    })
  })
})
