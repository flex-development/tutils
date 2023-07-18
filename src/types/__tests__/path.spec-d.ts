/**
 * @file Type Tests - Path
 * @module tutils/types/tests/unit-d/Path
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type Publisher from '#fixtures/interfaces/publisher'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Indices from '../indices'
import type Keyof from '../keyof'
import type NIL from '../nil'
import type Nilable from '../nilable'
import type NumberLike from '../number-like'
import type NumberString from '../number-string'
import type { tag } from '../opaque'
import type TestSubject from '../path'
import type Stringify from '../stringify'

describe('unit-d:types/Path', () => {
  type IndicesAll<T extends string | readonly unknown[]> =
    Indices<T> extends infer I ? I | Stringify<I> : never

  it('should equal NumberString if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<NumberString>()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal never if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toBeNever()
  })

  describe('T extends ObjectCurly', () => {
    it('should construct union of property paths', () => {
      // Arrange
      type T = Publisher & { readonly id: 'publisher' }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<
        | keyof T
        | `display_name.${keyof T['display_name']}`
        | `display_name.value.${Stringify<keyof string>}`
        | `display_name.value.length.${keyof number}`
        | `email.${Stringify<keyof string>}`
        | `email.length.${keyof number}`
        | `id.${Exclude<Stringify<keyof string>, NumberLike>}`
        | `id.${Indices<T['id']>}`
        | `id.length.${keyof number}`
        | `name.${Stringify<keyof string>}`
        | `name.length.${keyof number}`
      >()
    })

    it('should equal never if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<{}>>().toBeNever()
      expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
    })

    describe('E extends true', () => {
      type E = true

      it('should construct union of enumerable property paths', () => {
        // Arrange
        type T = Book & { readonly id: 'book' }

        // Expect
        expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<
          | keyof T
          | `authors.${Indices<T['authors']>}.${keyof T['authors'][0]}`
          | `authors.${Indices<T['authors']>}.display_name.${Indices<string>}`
          | `authors.${Indices<T['authors']>}.email.${Indices<string>}`
          | `authors.${Indices<T['authors']>}.first_name.${Indices<string>}`
          | `authors.${Indices<T['authors']>}.last_name.${Indices<string>}`
          | `authors.${Indices<T['authors']>}`
          | `id.${Indices<T['id']>}`
          | `publisher.${keyof Publisher}`
          | `publisher.display_name.${keyof Publisher['display_name']}`
          | `publisher.display_name.value.${Indices<string>}`
          | `publisher.email.${Indices<Publisher['email']>}`
          | `publisher.name.${Indices<Publisher['name']>}`
          | `title.${Indices<T['title']>}`
        >()
      })

      it('should equal never if Keyof<T> is never', () => {
        expectTypeOf<TestSubject<{}, E>>().toBeNever()
        expectTypeOf<TestSubject<EmptyObject, E>>().toBeNever()
      })
    })
  })

  describe('T extends Primitive', () => {
    it('should equal never if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<NIL>>().toBeNever()
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })

    describe('T extends bigint', () => {
      it('should construct union of property paths', () => {
        // Arrange
        type Expect = 'toLocaleString' | 'toString' | 'valueOf'

        // Expect
        expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<Expect>()
      })

      describe('E extends true', () => {
        it('should construct union of enumerable property paths', () => {
          // Arrange
          type T = bigint & { [tag]: 'bigint'; readonly id: 'bigint' }

          // Expect
          expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<
            'id' | `id.${Indices<T['id']>}`
          >()
        })
      })
    })

    describe('T extends boolean', () => {
      it('should construct union of property paths', () => {
        // Arrange
        type T = boolean

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
      })

      describe('E extends true', () => {
        it('should construct union of enumerable property paths', () => {
          // Arrange
          type T = boolean & { [tag]: 'boolean'; readonly id: 'boolean' }
          type Expect = 'id' | `id.${Indices<T['id']>}`

          // Expect
          expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends number', () => {
      it('should construct union of property paths', () => {
        // Arrange
        type T = number

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<keyof T>()
      })

      describe('E extends true', () => {
        it('should construct union of enumerable property paths', () => {
          // Arrange
          type T = number & { [tag]: 'number'; readonly id: 'number' }
          type Expect = 'id' | `id.${Indices<T['id']>}`

          // Expect
          expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<Indices<T>> extends true', () => {
        it('should construct union of property paths', () => {
          // Arrange
          type T = 'book'

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<
            | IndicesAll<T>
            | Stringify<Exclude<keyof T, NumberLike>>
            | `length.${keyof number}`
          >()
        })

        describe('E extends true', () => {
          type E = true

          it('should equal Indices<T>', () => {
            // Arrange
            type T1 = EmptyString
            type T2 = 'book'

            // Expect
            expectTypeOf<TestSubject<T1, E>>().toEqualTypeOf<IndicesAll<T1>>()
            expectTypeOf<TestSubject<T2, E>>().toEqualTypeOf<IndicesAll<T2>>()
          })
        })
      })

      describe('number extends Indices<T>', () => {
        it('should construct union of property paths', () => {
          // Arrange
          type T = string

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<
            | IndicesAll<T>
            | Stringify<Exclude<keyof T, NumberLike>>
            | `length.${keyof number}`
          >()
        })

        describe('E extends true', () => {
          type E = true

          it('should construct union of enumerable property paths', () => {
            // Arrange
            type T = string & { [tag]: 'string'; readonly id: 'string' }
            type Expect = IndicesAll<T> | 'id' | `id.${Indices<T['id']>}`

            // Expect
            expectTypeOf<TestSubject<T, E>>().toEqualTypeOf<Expect>()
          })
        })
      })
    })

    describe('T extends symbol', () => {
      it('should construct union of property paths', () => {
        expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<
          | 'description'
          | 'toString'
          | 'valueOf'
          | `description.${Stringify<keyof string>}`
          | `description.length.${keyof number}`
        >()
      })

      describe('E extends true', () => {
        it('should construct union of enumerable property paths', () => {
          // Arrange
          type T = symbol & { [tag]: 'symbol'; readonly id: 'symbol' }
          type Expect = 'id' | `id.${Indices<T['id']>}`

          // Expect
          expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<Expect>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct union of property paths', () => {
      expectTypeOf<TestSubject<Readonly<Fn>>>().toEqualTypeOf<
        | 'apply'
        | 'arguments'
        | 'bind'
        | 'call'
        | 'caller'
        | 'length'
        | 'name'
        | 'prototype'
        | 'toString'
        | `length.${keyof number}`
        | `name.${Stringify<keyof string>}`
        | `name.length.${keyof number}`
      >()
    })

    describe('E extends true', () => {
      it('should construct union of enumerable property paths', () => {
        // Arrange
        type T = Readonly<Fn> & { [tag]: 'fn'; readonly id: 'fn' }
        type Expect = 'id' | `id.${Indices<T['id']>}`

        // Expect
        expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsLiteral<Indices<T>> extends true', () => {
      it('should construct union of property paths', () => {
        // Arrange
        type T = [Author, Author?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          | IndicesAll<T>
          | Stringify<Exclude<keyof T, number>>
          | `${Indices<T>}.${keyof T[0]}`
          | `${Indices<T>}.display_name.${Stringify<keyof string>}`
          | `${Indices<T>}.display_name.length.${keyof number}`
          | `${Indices<T>}.email.${Stringify<keyof string>}`
          | `${Indices<T>}.email.length.${keyof number}`
          | `${Indices<T>}.first_name.${Stringify<keyof string>}`
          | `${Indices<T>}.first_name.length.${keyof number}`
          | `${Indices<T>}.last_name.${Stringify<keyof string>}`
          | `${Indices<T>}.last_name.length.${keyof number}`
          | `length.${keyof number}`
        >()
      })

      describe('E extends true', () => {
        type E = true

        it('should construct union of enumerable property paths', () => {
          // Arrange
          type T = ['author', Author]

          // Expect
          expectTypeOf<TestSubject<T, E>>().toEqualTypeOf<
            | IndicesAll<T>
            | `${-1 | 1}.display_name.${Indices<string>}`
            | `${-1 | 1}.display_name`
            | `${-1 | 1}.email.${Indices<string>}`
            | `${-1 | 1}.email`
            | `${-1 | 1}.first_name.${Indices<string>}`
            | `${-1 | 1}.first_name`
            | `${-1 | 1}.last_name.${Indices<string>}`
            | `${-1 | 1}.last_name`
            | `${-2 | 0}.${Indices<T[0]>}`
          >()
        })

        it('should equal never if T extends Readonly<EmptyArray>', () => {
          expectTypeOf<TestSubject<EmptyArray, E>>().toBeNever()
          expectTypeOf<TestSubject<Readonly<EmptyArray>, E>>().toBeNever()
        })
      })
    })

    describe('number extends Indices<T>', () => {
      it('should construct union of property paths', () => {
        // Arrange
        type T = Author[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<
          | IndicesAll<T>
          | Stringify<Exclude<keyof T, number>>
          | `${Indices<T>}.${keyof T[0]}`
          | `${Indices<T>}.display_name.${Stringify<keyof string>}`
          | `${Indices<T>}.display_name.length.${keyof number}`
          | `${Indices<T>}.email.${Stringify<keyof string>}`
          | `${Indices<T>}.email.length.${keyof number}`
          | `${Indices<T>}.first_name.${Stringify<keyof string>}`
          | `${Indices<T>}.first_name.length.${keyof number}`
          | `${Indices<T>}.last_name.${Stringify<keyof string>}`
          | `${Indices<T>}.last_name.length.${keyof number}`
          | `length.${keyof number}`
        >()
      })

      describe('E extends true', () => {
        it('should construct union of enumerable property paths', () => {
          // Arrange
          type T = Author[] & { [tag]: 'Author[]'; readonly id: 'Author[]' }

          // Expect
          expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<
            | IndicesAll<T>
            | 'id'
            | `${Indices<T>}.${keyof T[0]}`
            | `${Indices<T>}.display_name.${Indices<string>}`
            | `${Indices<T>}.email.${Indices<string>}`
            | `${Indices<T>}.first_name.${Indices<string>}`
            | `${Indices<T>}.last_name.${Indices<string>}`
            | `id.${Indices<T['id']>}`
          >()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Author | Vehicle>

      // Expect
      expectTypeOf<TestSubject<T, true>>().toEqualTypeOf<
        | Keyof<T>
        | `${keyof Author}.${Indices<string>}`
        | `${keyof Omit<Vehicle, 'year'>}.${Indices<string>}`
      >()
    })
  })
})
