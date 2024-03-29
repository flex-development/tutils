/**
 * @file Type Tests - ReadonlyKeys
 * @module tutils/types/tests/unit-d/ReadonlyKeys
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../keys-readonly'
import type NIL from '../nil'
import type { tag as opaque } from '../opaque'

describe('unit-d:types/ReadonlyKeys', () => {
  it('should equal never if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNever()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal never if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toBeNever()
  })

  describe('T extends ObjectCurly', () => {
    it('should construct union of readonly keys', () => {
      // Arrange
      type T1 = Vehicle
      type T2 = T1 & { readonly [opaque]: 'vehicle'; readonly id?: string }
      type T3 = Readonly<T2>

      // Expect
      expectTypeOf<TestSubject<T1>>().toBeNever()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<typeof opaque | 'id'>()
      expectTypeOf<TestSubject<T3>>().toEqualTypeOf<keyof T3>()
    })

    it('should equal never if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
    })
  })

  describe('T extends Primitive', () => {
    it('should equal never if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<NIL>>().toBeNever()
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })

    describe('T extends bigint', () => {
      it('should construct union of readonly keys', () => {
        // Arrange
        type T = bigint & { readonly [opaque]: 'bigint'; readonly id?: string }
        type Expect = typeof opaque | typeof Symbol.toStringTag | 'id'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends boolean', () => {
      it('should construct union of readonly keys', () => {
        // Arrange
        type T = boolean & {
          readonly [opaque]: 'boolean'
          readonly id?: string
        }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<typeof opaque | 'id'>()
      })
    })

    describe('T extends number', () => {
      it('should construct union of readonly keys', () => {
        // Arrange
        type T = number & { readonly [opaque]: 'number'; readonly id?: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<typeof opaque | 'id'>()
      })
    })

    describe('T extends string', () => {
      it('should construct union of readonly keys', () => {
        // Arrange
        type T = string & { readonly [opaque]: 'string'; readonly id?: string }
        type Expect = typeof opaque | 'id' | 'length'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('T extends symbol', () => {
      it('should construct union of readonly keys', () => {
        //  Arrange
        type T = symbol
        type Expect = typeof Symbol.toStringTag | 'description'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct union of readonly keys', () => {
      // Arrange
      type T1 = Fn
      type T2 = Readonly<Fn>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<'length' | 'name'>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<keyof T2>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should construct union of readonly keys', () => {
        // Arrange
        type T = readonly [Vehicle['vin'], Vehicle]
        type Expect = Indices<T> | typeof Symbol.unscopables | 'length'

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should construct union of readonly keys', () => {
        // Arrange
        type Expect = number | typeof Symbol.unscopables | 'length'

        // Expect
        expectTypeOf<TestSubject<readonly Vehicle[]>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Readonly<Vehicle> | { readonly [opaque]: 'vehicle' }
      type Expect = keyof Vehicle | typeof opaque

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
