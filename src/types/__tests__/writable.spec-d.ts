/**
 * @file Type Tests - Writable
 * @module tutils/types/tests/unit-d/Writable
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type ReadonlyKeys from '../keys-readonly'
import type Nilable from '../nilable'
import type { tag as opaque } from '../opaque'
import type TestSubject from '../writable'

describe('unit-d:types/Writable', () => {
  describe('T extends ObjectCurly', () => {
    it('should equal T if IsNever<ReadonlyKeys<T>> extends true', () => {
      // Arrange
      type T = Vehicle

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
    })

    it('should make all properties of T writable', () => {
      // Arrange
      type T = Readonly<Vehicle>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Vehicle>()
      expectTypeOf<ReadonlyKeys<TestSubject<T>>>().toBeNever()
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal T', () => {
        expectTypeOf<TestSubject<null>>().toEqualTypeOf<null>()
        expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<undefined>()
      })
    })

    describe('T extends bigint', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal T', () => {
          // Arrange
          type T = 0n

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })

      describe('T extends object', () => {
        it('should make all properties of T writable', () => {
          // Arrange
          type T = bigint & { readonly [opaque]: 'bigint' }

          // Expect
          expectTypeOf<ReadonlyKeys<TestSubject<T>>>().toBeNever()
        })
      })

      describe('bigint extends T', () => {
        it('should equal T', () => {
          // Arrange
          type T = bigint

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })
    })

    describe('T extends boolean', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal T', () => {
          // Arrange
          type T = false

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })

      describe('T extends object', () => {
        it('should make all properties of T writable', () => {
          // Arrange
          type T = boolean & { readonly [opaque]: 'boolean' }

          // Expect
          expectTypeOf<ReadonlyKeys<TestSubject<T>>>().toBeNever()
        })
      })

      describe('boolean extends T', () => {
        it('should equal T', () => {
          // Arrange
          type T = boolean

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })
    })

    describe('T extends number', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal T', () => {
          // Arrange
          type T = 0

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })

      describe('T extends object', () => {
        it('should make all properties of T writable', () => {
          // Arrange
          type T = number & { readonly [opaque]: 'number' }

          // Expect
          expectTypeOf<ReadonlyKeys<TestSubject<T>>>().toBeNever()
        })
      })

      describe('number extends T', () => {
        it('should equal T', () => {
          // Arrange
          type T = number

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal T', () => {
          // Arrange
          type T = 'vehicle'

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })

      describe('T extends object', () => {
        it('should make all properties of T writable', () => {
          // Arrange
          type T = string & { readonly [opaque]: 'string' }

          // Expect
          expectTypeOf<ReadonlyKeys<TestSubject<T>>>().toBeNever()
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

    describe('T extends symbol', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal T', () => {
          // Arrange
          type T = typeof opaque

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })

      describe('T extends object', () => {
        it('should make all properties of T writable', () => {
          // Arrange
          type T = symbol & { readonly [opaque]: 'symbol' }

          // Expect
          expectTypeOf<ReadonlyKeys<TestSubject<T>>>().toBeNever()
        })
      })

      describe('symbol extends T', () => {
        it('should equal T', () => {
          // Arrange
          type T = symbol

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should make all properties of T writable', () => {
      expectTypeOf<ReadonlyKeys<TestSubject<Fn>>>().toBeNever()
      expectTypeOf<ReadonlyKeys<TestSubject<Readonly<Fn>>>>().toBeNever()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should make indices of T writable', () => {
        // Arrange
        type T = readonly [Vehicle?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<[Vehicle?]>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should make indices of T writable', () => {
        // Arrange
        type T = readonly Vehicle[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Vehicle[]>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Readonly<Vehicle> | readonly [Vehicle]>
      type Expect = Nilable<Vehicle | [Vehicle]>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
