/**
 * @file Type Tests - Omit
 * @module tutils/types/tests/unit-d/Omit
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type Objectify from '../objectify'
import type TestSubject from '../omit'
import type OmitNative from '../omit-native'
import type { tag as opaque } from '../opaque'
import type PropertyKey from '../property-key'

describe('unit-d:types/Omit', () => {
  it('should equal Objectify<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T, keyof Vehicle>>().toEqualTypeOf<Objectify<T>>()
  })

  it('should equal Objectify<T> if T is unknown', () => {
    // Arrange
    type T = unknown

    // Expect
    expectTypeOf<TestSubject<T, keyof Vehicle>>().toEqualTypeOf<Objectify<T>>()
  })

  describe('IsAny<T> extends true', () => {
    type T = any

    it('should equal {} if K is any', () => {
      expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
    })

    it('should equal Objectify<T> if K is never', () => {
      expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
    })

    describe('HasKey<T, K> extends false', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type K = keyof Vehicle

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('HasKey<T, K> extends true', () => {
      it('should equal OmitNative<T, K>', () => {
        // Arrange
        type K = symbol

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
      })
    })
  })

  describe('T extends ObjectCurly', () => {
    type T = Vehicle

    it('should equal {} if K is any', () => {
      expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
    })

    it('should equal Objectify<T> if K is never', () => {
      expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
    })

    describe('HasKey<T, K> extends false', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type K = PropertyKey

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('HasKey<T, K> extends true', () => {
      it('should equal OmitNative<T, K>', () => {
        // Arrange
        type K = 'make' | 'model' | 'year'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
      })
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type T1 = null
        type T2 = undefined
        type K = keyof Vehicle

        // Expect
        expectTypeOf<TestSubject<T1, K>>().toEqualTypeOf<Objectify<T1>>()
        expectTypeOf<TestSubject<T2, K>>().toEqualTypeOf<Objectify<T2>>()
      })
    })

    describe('T extends bigint', () => {
      type T = 0n

      it('should equal {} if K is any', () => {
        expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
      })

      it('should equal Objectify<T> if K is never', () => {
        expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
      })

      describe('HasKey<T, K> extends false', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type K = PropertyKey

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('HasKey<T, K> extends true', () => {
        it('should equal OmitNative<T, K>', () => {
          // Arrange
          type K = typeof Symbol.toStringTag | 'toLocaleString'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
        })
      })
    })

    describe('T extends boolean', () => {
      type T = false

      it('should equal {} if K is any', () => {
        expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
      })

      it('should equal Objectify<T> if K is never', () => {
        expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
      })

      describe('HasKey<T, K> extends false', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type K = PropertyKey

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('HasKey<T, K> extends true', () => {
        it('should equal OmitNative<T, K>', () => {
          // Arrange
          type K = 'valueOf'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
        })
      })
    })

    describe('T extends number', () => {
      type T = 0

      it('should equal {} if K is any', () => {
        expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
      })

      it('should equal Objectify<T> if K is never', () => {
        expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
      })

      describe('HasKey<T, K> extends false', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type K = PropertyKey

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('HasKey<T, K> extends true', () => {
        it('should equal OmitNative<T, K>', () => {
          // Arrange
          type K = 'toLocaleString' | 'valueOf'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
        })
      })
    })

    describe('T extends string', () => {
      type T = 'vehicle'

      it('should equal {} if K is any', () => {
        expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
      })

      it('should equal Objectify<T> if K is never', () => {
        expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
      })

      describe('HasKey<T, K> extends false', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type K = string | symbol

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('HasKey<T, K> extends true', () => {
        it('should equal OmitNative<Objectify<T>, K>', () => {
          // Arrange
          type K = Exclude<keyof T, number | 'at' | 'length'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
        })
      })
    })

    describe('T extends symbol', () => {
      type T = typeof opaque

      it('should equal {} if K is any', () => {
        expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
      })

      it('should equal Objectify<T> if K is never', () => {
        expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
      })

      describe('HasKey<T, K> extends false', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type K = PropertyKey

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('HasKey<T, K> extends true', () => {
        it('should equal OmitNative<T, K>', () => {
          // Arrange
          type K = typeof Symbol.toStringTag | 'toString' | 'valueOf'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    type T = Readonly<Fn>

    it('should equal {} if K is any', () => {
      expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
    })

    it('should equal Objectify<T> if K is never', () => {
      expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
    })

    describe('HasKey<T, K> extends false', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type K = PropertyKey

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('HasKey<T, K> extends true', () => {
      it('should equal OmitNative<T, K>', () => {
        // Arrange
        type K = typeof Symbol.hasInstance | 'arguments' | 'prototype'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    type T = readonly [Vehicle, Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]

    it('should equal {} if K is any', () => {
      expectTypeOf<TestSubject<T, any>>().toEqualTypeOf<{}>()
    })

    it('should equal Objectify<T> if K is never', () => {
      expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<Objectify<T>>()
    })

    describe('HasKey<T, K> extends false', () => {
      it('should equal Objectify<T>', () => {
        // Arrange
        type K = string | symbol

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Objectify<T>>()
      })
    })

    describe('HasKey<T, K> extends true', () => {
      it('should equal OmitNative<Objectify<T>, K>', () => {
        // Arrange
        type K = Exclude<keyof T, Numeric | 'length'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nullable<Person | Vehicle>
      type K = 'age' | 'friends' | 'make' | 'model' | 'year'
      type Expect = OmitNative<Person, K> | OmitNative<Vehicle, K> | {}

      // Expect
      expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expect>()
    })
  })
})
