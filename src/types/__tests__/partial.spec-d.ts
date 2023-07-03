/**
 * @file Type Tests - Partial
 * @module tutils/types/tests/unit-d/Partial
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type Publisher from '#fixtures/publisher.interface'
import type Vehicle from '#fixtures/vehicle'
import type Fn from '../fn'
import type NIL from '../nil'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type { tag } from '../opaque'
import type Optional from '../optional'
import type TestSubject from '../partial'
import type PartialNative from '../partial-native'

describe('unit-d:types/Partial', () => {
  it('should equal PartialNative<T> if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
  })

  it('should equal PartialNative<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
  })

  it('should equal PartialNative<T> if T is unknown', () => {
    // Arrange
    type T = unknown

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
  })

  describe('T extends ObjectCurly', () => {
    it('should make nested and top-level properties optional', () => {
      // Arrange
      type T = Omit<Book, 'readers'> & { readers: Set<string> | undefined }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
        authors?: Optional<Author>[]
        isbn?: PartialNative<T['isbn']>
        publisher?: Nullable<{
          display_name?: PartialNative<Publisher['display_name']>
          email?: PartialNative<Publisher['email']>
          name?: PartialNative<Publisher['name']>
        }>
        readers?: PartialNative<T['readers']>
        title?: PartialNative<T['title']>
      }>()
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal PartialNative<T>', () => {
        // Arrange
        type T1 = NIL
        type T2 = null
        type T3 = undefined

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<PartialNative<T1>>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<PartialNative<T2>>()
        expectTypeOf<TestSubject<T3>>().toEqualTypeOf<PartialNative<T3>>()
      })
    })

    describe('T extends bigint', () => {
      it('should make nested and top-level properties optional', () => {
        // Arrange
        type T = bigint & { data: { readonly id: string } }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          PartialNative<
            PartialNative<Omit<T, 'data'>> & { data?: { readonly id?: string } }
          >
        >()
      })

      describe('bigint extends T', () => {
        it('should equal PartialNative<T>', () => {
          // Arrange
          type T = bigint

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
        })
      })
    })

    describe('T extends boolean', () => {
      it('should make nested and top-level properties optional', () => {
        // Arrange
        type T = boolean & { data: { readonly id: string } }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          PartialNative<
            PartialNative<Omit<T, 'data'>> & { data?: { readonly id?: string } }
          >
        >()
      })

      describe('boolean extends T', () => {
        it('should equal PartialNative<T>', () => {
          // Arrange
          type T = boolean

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
        })
      })
    })

    describe('T extends number', () => {
      it('should make nested and top-level properties optional', () => {
        // Arrange
        type T = number & { data: { readonly id: string } }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          PartialNative<
            PartialNative<Omit<T, 'data'>> & { data?: { readonly id?: string } }
          >
        >()
      })

      describe('number extends T', () => {
        it('should equal PartialNative<T>', () => {
          // Arrange
          type T = number

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
        })
      })
    })

    describe('T extends string', () => {
      it('should make nested and top-level properties optional', () => {
        // Arrange
        type T = string & { data: { readonly id: string } }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          PartialNative<
            PartialNative<Omit<T, 'data'>> & { data?: { readonly id?: string } }
          >
        >()
      })

      describe('string extends T', () => {
        it('should equal PartialNative<T>', () => {
          // Arrange
          type T = string

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should make nested and top-level properties optional', () => {
        // Arrange
        type T = symbol & { data: { readonly id: string } }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          PartialNative<
            PartialNative<Omit<T, 'data'>> & { data?: { readonly id?: string } }
          >
        >()
      })

      describe('symbol extends T', () => {
        it('should equal PartialNative<T>', () => {
          // Arrange
          type T = symbol

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should make nested and top-level properties optional', () => {
      // Arrange
      type T = Readonly<Fn> & { data: { readonly id: string } }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        PartialNative<
          PartialNative<Omit<T, 'data'>> & { data?: { readonly id?: string } }
        >
      >()
    })

    describe('Fn extends T', () => {
      it('should equal PartialNative<T>', () => {
        // Arrange
        type T = Readonly<Fn>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal PartialNative<T>', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
      })

      describe('R["arrays"] extends true', () => {
        it('should recurse into arrays', () => {
          // Arrange
          type T = readonly [Vehicle, Nilable<Vehicle>]

          // Expect
          expectTypeOf<TestSubject<T, { arrays: true }>>().toEqualTypeOf<
            readonly [PartialNative<Vehicle>?, Nilable<PartialNative<Vehicle>>?]
          >()
        })
      })

      describe('T is intersection', () => {
        it('should make nested and top-level properties optional', () => {
          // Arrange
          type T = readonly [Vehicle] & { x: { readonly id: string } }

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<
            PartialNative<
              PartialNative<Omit<T, 'x'>> & { x?: { readonly id?: string } }
            >
          >()
        })
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal PartialNative<T>', () => {
        // Arrange
        type T = Vehicle[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
      })

      describe('R["arrays"] extends true', () => {
        it('should recurse into arrays', () => {
          // Arrange
          type T = Vehicle[]
          type R = { arrays: true }
          type Expect = Optional<PartialNative<Vehicle>>[]

          // Expect
          expectTypeOf<TestSubject<T, R>>().toEqualTypeOf<Expect>()
        })
      })

      describe('T is intersection', () => {
        it('should make nested and top-level properties optional', () => {
          // Arrange
          type T = readonly Vehicle[] & { x: { readonly id: string } }

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<
            PartialNative<
              PartialNative<Omit<T, 'x'>> & { x?: { readonly id?: string } }
            >
          >()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Vehicle | Vehicle['vin'] | typeof tag>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<PartialNative<T>>()
    })
  })
})
