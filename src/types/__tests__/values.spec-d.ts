/**
 * @file Type Tests - Values
 * @module tutils/types/tests/unit-d/Values
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Get from '../get'
import type Nullable from '../nullable'
import type OmitNative from '../omit-native'
import type Opaque from '../opaque'
import type { tag as opaque } from '../opaque'
import type Partial from '../partial'
import type Spread from '../spread'
import type TestSubject from '../values'

describe('unit-d:types/Values', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal EmptyArray if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal T[] if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })

  it('should equal any[] if IsEqual<T, object> extends true', () => {
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<any[]>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal Get<OmitNative<Spread<T>, symbol>, any>[]', () => {
      // Arrange
      type T = Opaque<Partial<Vehicle>>
      type Expect = Get<OmitNative<Spread<T>, symbol>, any>[]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<null>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends bigint', () => {
      it('should equal EmptyArray if IsLiteral<T> extends true', () => {
        expectTypeOf<TestSubject<0n>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<bigint & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if bigint extends T', () => {
        expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends boolean', () => {
      it('should equal EmptyArray if IsLiteral<T> extends true', () => {
        expectTypeOf<TestSubject<false>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<true & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if boolean extends T', () => {
        expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends number', () => {
      it('should equal EmptyArray if IsLiteral<T> extends true', () => {
        expectTypeOf<TestSubject<0>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<number & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if number extends T', () => {
        expectTypeOf<TestSubject<number>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal Get<OmitNative<Spread<T>, symbol>, any>[]', () => {
          // Arrange
          type T = 'vin'
          type Expect = Get<OmitNative<Spread<T>, symbol>, any>[]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends Length<T>', () => {
        it('should equal Get<OmitNative<Spread<T>, symbol>, any>[]', () => {
          // Arrange
          type T = Opaque<Vehicle['vin'] & { id: number }>
          type Expect = Get<OmitNative<Spread<T>, symbol>, any>[]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should equal EmptyArray if IsUniqueSymbol<T> extends true', () => {
        expectTypeOf<TestSubject<typeof opaque>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<symbol & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if symbol extends T', () => {
        expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal Get<OmitNative<Spread<T>, symbol>, any>[]', () => {
      // Arrange
      type T = Opaque<Readonly<Fn & { id: string }>>
      type Expect = Get<OmitNative<Spread<T>, symbol>, any>[]

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
        type T = readonly Nullable<Vehicle>[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Person | Vehicle
      type Expect = Person[keyof Person][] | Vehicle[keyof Vehicle][]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
