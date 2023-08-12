/**
 * @file Type Tests - HasKey
 * @module tutils/types/tests/unit-d/HasKey
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type { tag as empty } from '../empty-object'
import type Fn from '../fn'
import type TestSubject from '../has-key'
import type Indices from '../indices'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type NegativeNumeric from '../numeric-negative'
import type { tag as opaque } from '../opaque'
import type PropertyKey from '../property-key'
import type OwnPropertyKey from '../property-key-own'
import type Stringify from '../stringify'

describe('unit-d:types/HasKey', () => {
  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<Vehicle, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<Vehicle, never>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is unknown', () => {
    expectTypeOf<TestSubject<Vehicle, unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never, keyof Vehicle>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown, keyof Vehicle>>().toEqualTypeOf<false>()
  })

  describe('IsAny<T> extends true', () => {
    type T = any

    describe('K extends number', () => {
      it('should equal false if number does not extend K', () => {
        expectTypeOf<TestSubject<T, 1>>().toEqualTypeOf<false>()
      })

      it('should equal true if number extends K', () => {
        expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends string', () => {
      it('should equal false if string does not extend K', () => {
        expectTypeOf<TestSubject<T, keyof Vehicle>>().toEqualTypeOf<false>()
      })

      it('should equal true if Numeric extends K', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
      })

      it('should equal true if string extends K', () => {
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends symbol', () => {
      it('should equal false if symbol does not extend K', () => {
        expectTypeOf<TestSubject<T, typeof opaque>>().toEqualTypeOf<false>()
      })

      it('should equal true if symbol extends K', () => {
        expectTypeOf<TestSubject<T, symbol>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends ObjectCurly', () => {
    type T = Vehicle

    it('should equal false if K cannot index T', () => {
      expectTypeOf<TestSubject<T, 'vrm'>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<T, PropertyKey>>().toEqualTypeOf<false>()
    })

    it('should equal false if keyof Remap<T> is never', () => {
      // Arrange
      type K = typeof empty | 'vin'

      // Expect
      expectTypeOf<TestSubject<{}, K>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<EmptyObject, K>>().toEqualTypeOf<false>()
    })

    it('should equal true if K is explicitly defined on T', () => {
      expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal false if keyof Remap<T> is never', () => {
        expectTypeOf<TestSubject<null, 'make'>>().toEqualTypeOf<false>()
        expectTypeOf<TestSubject<undefined, 'vin'>>().toEqualTypeOf<false>()
      })
    })

    describe('T extends bigint', () => {
      type T = 0n

      it('should equal false if K cannot index T', () => {
        expectTypeOf<TestSubject<T, PropertyKey>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is explicitly defined on T', () => {
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends boolean', () => {
      type T = false

      it('should equal false if K cannot index T', () => {
        expectTypeOf<TestSubject<T, PropertyKey>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is explicitly defined on T', () => {
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends number', () => {
      type T = 0

      it('should equal false if K cannot index T', () => {
        expectTypeOf<TestSubject<T, PropertyKey>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is explicitly defined on T', () => {
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        type T = 'xyz'

        it('should equal false if K cannot index T', () => {
          expectTypeOf<TestSubject<T, NegativeNumeric>>().toEqualTypeOf<false>()
        })

        it('should equal true if K extends Indices<T>', () => {
          expectTypeOf<TestSubject<T, Indices<T>>>().toEqualTypeOf<true>()
        })

        it('should equal true if K extends Stringify<Indices<T>>', () => {
          // Arrange
          type K = Stringify<Indices<T>>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })

        it('should equal true if K is explicitly defined on T', () => {
          expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
        })

        it('should equal true if Numeric extends K', () => {
          expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
        })
      })

      describe('number extends Indices<T>', () => {
        type T = string

        it('should equal false if K cannot index T', () => {
          expectTypeOf<TestSubject<T, OwnPropertyKey>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is explicitly defined on T', () => {
          expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
        })

        it('should equal true if Numeric extends K', () => {
          expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends symbol', () => {
      type T = typeof opaque

      it('should equal false if K cannot index T', () => {
        expectTypeOf<TestSubject<T, PropertyKey>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is explicitly defined on T', () => {
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    type T = Readonly<Fn>

    it('should equal false if K cannot index T', () => {
      expectTypeOf<TestSubject<T, PropertyKey>>().toEqualTypeOf<false>()
    })

    it('should equal true if K is explicitly defined on T', () => {
      expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      type T = readonly [Vehicle, Nullable<Vehicle>, Vehicle?]

      it('should equal false if K cannot index T', () => {
        expectTypeOf<TestSubject<T, NegativeNumeric>>().toEqualTypeOf<false>()
      })

      it('should equal true if K extends Indices<T>', () => {
        expectTypeOf<TestSubject<T, Indices<T>>>().toEqualTypeOf<true>()
      })

      it('should equal true if K extends Stringify<Indices<T>>', () => {
        // Arrange
        type K = Stringify<Indices<T>>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
      })

      it('should equal true if K is explicitly defined on T', () => {
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })

      it('should equal true if Numeric extends K', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
      })
    })

    describe('number extends Indices<T>', () => {
      type T = Vehicle[]

      it('should equal false if K cannot index T', () => {
        expectTypeOf<TestSubject<T, OwnPropertyKey>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is explicitly defined on T', () => {
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })

      it('should equal true if Numeric extends K', () => {
        expectTypeOf<TestSubject<T, Numeric>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Person | Vehicle

      // Expect
      expectTypeOf<TestSubject<T, 'name' | 'vin'>>().toEqualTypeOf<boolean>()
    })
  })
})
