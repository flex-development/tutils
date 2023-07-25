/**
 * @file Type Tests - Keyof
 * @module tutils/types/tests/unit-d/Keyof
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../keyof'
import type Nilable from '../nilable'
import type NumberLike from '../number-like'
import type { tag as opaque } from '../opaque'

describe('unit-d:types/Keyof', () => {
  it('should equal keyof T if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal never if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toBeNever()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal keyof T', () => {
      // Arrange
      type T1 = { [x: number]: never; [x: string]: never; [x: symbol]: never }
      type T2 = Vehicle

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<keyof T1>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<keyof T2>()
    })

    it('should equal never if EmptyObjectTag extends T', () => {
      expectTypeOf<TestSubject<{}>>().toBeNever()
      expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
    })

    it('should extract F from keyof T', () => {
      // Arrange
      type T = Vehicle & { readonly [opaque]: 'vehicle' }
      type F = symbol

      // Expect
      expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<typeof opaque>()
    })
  })

  describe('T extends Primitive', () => {
    it('should equal never if IsNever<keyof Remap<T>> extends true', () => {
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })

    describe('T extends bigint', () => {
      it('should equal keyof T', () => {
        // Arrange
        type T = bigint

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
      })

      it('should extract F from keyof T', () => {
        // Arrange
        type T = bigint & { readonly [opaque]: 'bigint' }
        type F = symbol
        type Expect = typeof opaque | typeof Symbol.toStringTag

        // Expect
        expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends boolean', () => {
      it('should equal keyof T', () => {
        // Arrange
        type T = boolean

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
      })

      it('should extract F from keyof T', () => {
        // Arrange
        type T = boolean & { readonly [opaque]: 'boolean' }
        type F = symbol

        // Expect
        expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<typeof opaque>()
      })
    })

    describe('T extends number', () => {
      it('should equal keyof T', () => {
        // Arrange
        type T = number

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
      })

      it('should extract F from keyof T', () => {
        // Arrange
        type T = number & { readonly [opaque]: 'number' }
        type F = symbol

        // Expect
        expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<typeof opaque>()
      })
    })

    describe('T extends string', () => {
      it('should equal Exclude<keyof T, NumberLike> | Indices<T>', () => {
        // Arrange
        type T1 = 'xyz'
        type T2 = string
        type Expect<T extends string> =
          | Exclude<keyof T, NumberLike>
          | Indices<T>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Expect<T1>>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Expect<T2>>()
      })

      it('should extract F from keyof T', () => {
        // Arrange
        type T = 'abc'

        // Expect
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<Indices<T>>()
      })
    })

    describe('T extends symbol', () => {
      it('should equal keyof T', () => {
        // Arrange
        type T = symbol

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
      })

      it('should extract F from keyof T', () => {
        // Arrange
        type T = symbol
        type F = symbol
        type Expect = typeof Symbol.toPrimitive | typeof Symbol.toStringTag

        // Expect
        expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal keyof T', () => {
      // Arrange
      type T1 = Fn
      type T2 = Readonly<T1>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<keyof T1>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<keyof T2>()
    })

    it('should extract F from keyof T', () => {
      // Arrange
      type T = Readonly<Fn>
      type F = symbol
      type Expect = typeof Symbol.hasInstance

      // Expect
      expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<Expect>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal Exclude<keyof T, NumberLike> | Indices<T>', () => {
      // Arrange
      type T1 = ['x', 'y', 'z'?]
      type T2 = string[]
      type Expect<T extends readonly unknown[]> =
        | Exclude<keyof T, NumberLike>
        | Indices<T>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Expect<T1>>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Expect<T2>>()
    })

    it('should extract F from keyof T', () => {
      // Arrange
      type T = ['a', 'b', 'c'?]

      // Expect
      expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<Indices<T>>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Vehicle | Vehicle['vin']>
      type Expect = keyof Vehicle | keyof Vehicle['vin']

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
