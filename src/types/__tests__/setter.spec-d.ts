/**
 * @file Type Tests - Setter
 * @module tutils/types/tests/unit-d/Setter
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type Assign from '../assign'
import type Construct from '../construct'
import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type Fn from '../fn'
import type Merge from '../merge'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type { tag as opaque } from '../opaque'
import type TestSubject from '../setter'

describe('unit-d:types/Setter', () => {
  it('should equal T if T is never', () => {
    // Arrange
    type T = never
    type K = 'metadata.vrm' | 'vin'

    // Expect
    expectTypeOf<TestSubject<T, K, string>>().toEqualTypeOf<T>()
  })

  describe('IsAny<T> extends true', () => {
    type T = any

    describe('K extends number', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = number
        type V = number
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })
    })

    describe('K extends string', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = string
        type V = string
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should set nested property value', () => {
          // Arrange
          type K = 'res.data.msg'
          type V = Nullable<string>
          type Expect = Assign<T, Construct<Record<K, V>>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('K extends symbol', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = symbol
        type V = typeof opaque
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends ObjectCurly', () => {
    describe('K extends number', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type T = { 0: undefined }
        type K = 0 | 1
        type V = number
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })
    })

    describe('K extends string', () => {
      type T = Person
      type V = string

      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = 'email' | 'name'
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should set nested property value', () => {
          // Arrange
          type K = 'metadata.birthday' | 'name.middle' | 'name.parts.0'
          type U = Construct<Record<'metadata.birthday' | 'name.middle', V>>
          type Expect = Merge<T, Merge<U, { name: { parts: V[] } }>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('K extends symbol', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type T = Vehicle
        type K = typeof opaque
        type V = 'vehicle'
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    type T = Readonly<Fn>

    describe('K extends number', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = number
        type V = number
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })
    })

    describe('K extends string', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = 'arguments' | 'data'
        type V = string[]
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should set nested property value', () => {
          // Arrange
          type K = 'data.msg'
          type V = string
          type Expect = Merge<T, Construct<Record<K, V>>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('K extends symbol', () => {
      it('should equal Assign<T, Record<K, V>>', () => {
        // Arrange
        type K = typeof opaque
        type V = string
        type Expect = Assign<T, Record<K, V>>

        // Expect
        expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]

      describe('K extends number', () => {
        it('should equal Assign<T, Record<K, V>>', () => {
          // Arrange
          type T = Readonly<EmptyArray>
          type K = 0
          type V = Vehicle
          type Expect = Assign<T, Record<K, V>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })

      describe('K extends string', () => {
        type V = string

        it('should equal Assign<T, Record<K, V>>', () => {
          // Arrange
          type K = 'id'
          type Expect = Assign<T, Record<K, V>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })

        describe('K extends `${infer H}.${infer R}`', () => {
          it('should equal Assign<T, Construct<Record<K, V>>>', () => {
            // Arrange
            type K = `${0 | 1 | 2}${Dot}vrm`
            type U = Assign<Vehicle, Record<'vrm', V>>
            type Expect = readonly [U, Nilable<U>, Nullable<U>?]

            // Expect
            expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends symbol', () => {
        it('should equal Assign<T, Record<K, V>>', () => {
          // Arrange
          type K = typeof opaque
          type V = 'vehicles'
          type Expect = Assign<T, Record<K, V>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('number extends Length<T>', () => {
      type T = Vehicle[]

      describe('K extends number', () => {
        it('should equal Assign<T, Record<K, V>>', () => {
          // Arrange
          type T = undefined[]
          type K = 0
          type V = Vehicle
          type Expect = Assign<T, Record<K, V>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })

      describe('K extends string', () => {
        type V = string

        it('should equal Assign<T, Record<K, V>>', () => {
          // Arrange
          type K = 'id'
          type Expect = Assign<T, Record<K, V>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })

        describe('K extends `${infer H}.${infer R}`', () => {
          it('should set nested property value', () => {
            // Arrange
            type K = `${Numeric}${Dot}vrm`
            type Expect = Assign<Vehicle, Record<'vrm', V>>[]

            // Expect
            expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends symbol', () => {
        it('should equal Assign<T, Record<K, V>>', () => {
          // Arrange
          type K = typeof opaque
          type V = 'vehicles'
          type Expect = Assign<T, Record<K, V>>

          // Expect
          expectTypeOf<TestSubject<T, K, V>>().toEqualTypeOf<Expect>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type K = 'vrm'
      type V = string
      type Expect = Assign<Vehicle, { [H in K]: V }> | { [H in K]: V }

      // Expect
      expectTypeOf<TestSubject<Vehicle | {}, K, V>>().toEqualTypeOf<Expect>()
    })
  })
})
