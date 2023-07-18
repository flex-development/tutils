/**
 * @file Type Tests - IsExactOptionalKey
 * @module tutils/types/tests/unit-d/IsExactOptionalKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../is-key-optional-exact'
import type Numeric from '../numeric'
import type PropertyKey from '../property-key'
import type Stringify from '../stringify'

describe('unit-d:types/IsExactOptionalKey', () => {
  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<Author, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<Author, never>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any, 'display_name'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never, 'display_name'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown, 'display_name'>>().toEqualTypeOf<false>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal false if keyof T is never', () => {
      expectTypeOf<TestSubject<{}, PropertyKey>>().toEqualTypeOf<false>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      type T = Book

      it('should equal false if K is not nested exact optional key', () => {
        // Arrange
        type K = 'publisher.display_name.value'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested exact optional key', () => {
        // Arrange
        type K = `authors.${Numeric}.email`

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      type T = Author

      it('should equal false if K is not exact optional key', () => {
        // Arrange
        type K = Exclude<keyof T, 'email'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is exact optional key', () => {
        expectTypeOf<TestSubject<T, 'email'>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends Primitive', () => {
    it('should equal false if keyof T is never', () => {
      expectTypeOf<TestSubject<null, 'toString'>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<undefined, 'valueOf'>>().toEqualTypeOf<false>()
    })

    describe('T extends bigint', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0n & { x: { a: string; b?: string; c?: string | undefined } }

        it('should equal false if K is not nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.a' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1n & { b?: string; c?: string | undefined }

        it('should equal false if K is not exact optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends boolean', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = false & {
          x: { a: string; b?: string; c?: string | undefined }
        }

        it('should equal false if K is not nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.a' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = true & { b?: string; c?: string | undefined }

        it('should equal false if K is not exact optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends number', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0 & { x: { a: string; b?: string; c?: string | undefined } }

        it('should equal false if K is not nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.a' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1 & { b?: string; c?: string | undefined }

        it('should equal false if K is not exact optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal false given any K', () => {
          // Arrange
          type T = 'xyz'

          // Expect
          expectTypeOf<TestSubject<T, Indices<T>>>().toEqualTypeOf<false>()
          expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<false>()
        })
      })

      describe('number extends Indices<T>', () => {
        describe('K extends `${infer H}.${infer R}`', () => {
          type T = string & {
            x: { a: string; b?: string; c?: string | undefined }
          }

          it('should equal false if K is not nested exact optional key', () => {
            expectTypeOf<TestSubject<T, 'x.a' | 'x.c'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is nested exact optional key', () => {
            expectTypeOf<TestSubject<T, 'x.b'>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          type T = string & { b?: string; c?: string | undefined }

          it('should equal false if K is not exact optional key', () => {
            // Arrange
            type K = Exclude<keyof T, 'b'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is exact optional key', () => {
            expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
          })
        })
      })
    })

    describe('T extends symbol', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = symbol & { x: { b?: string; c?: string | undefined } }

        it('should equal false if K is not nested exact optional key', () => {
          // Arrange
          type K = 'description.length' | 'x.c'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested exact optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = symbol & { b?: string; c?: string | undefined }

        it('should equal false if K is not exact optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    describe('K extends `${infer H}.${infer R}`', () => {
      type T = Readonly<Fn> & { x: { b?: string; c?: string | undefined } }

      it('should equal false if K is not nested exact optional key', () => {
        // Arrange
        type K = 'length.toFixed' | 'x.c'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested exact optional key', () => {
        expectTypeOf<TestSubject<T, 'x.b'>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      type T = Readonly<Fn> & { b?: string; c?: string | undefined }

      it('should equal false if K is not exact optional key', () => {
        // Arrange
        type K = Exclude<keyof T, 'b'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is exact optional key', () => {
        expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      type T = readonly [Author, Author?, Author?]

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal false if K is not nested exact optional key', () => {
          // Arrange
          type K1 = `${Indices<T>}.${Exclude<keyof Author, 'email'>}`
          type K2 = `${Numeric}.${Exclude<keyof Author, 'email'>}`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<false>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested exact optional key', () => {
          // Arrange
          type K1 = `${Indices<T>}.email`
          type K2 = `${Numeric}.email`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends Indices<T>', () => {
        it('should equal false if K is not exact optional key', () => {
          expectTypeOf<TestSubject<T, -3 | 0>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          // Arrange
          type K = Exclude<Indices<T>, -3 | 0>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends Stringify<Indices<T>>', () => {
        it('should equal false if K is not exact optional key', () => {
          expectTypeOf<TestSubject<T, '-3' | '0'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          // Arrange
          type K = Exclude<Stringify<Indices<T>>, '-3' | '0'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = readonly [Author?] & { b?: string; c?: string | undefined }

        it('should equal false if K is not exact optional key', () => {
          // Arrange
          type K = Exclude<keyof T, '0' | 'b'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          expectTypeOf<TestSubject<T, '0' | 'b'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('number extends Length<T>', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = Author[]

        it('should equal false if K is not nested exact optional key', () => {
          // Arrange
          type K = `${Numeric}.${Exclude<keyof Author, 'email'>}`

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested exact optional key', () => {
          // Arrange
          type K = `${Numeric}.email`

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = Author[] & { b?: string; c?: string | undefined }

        it('should equal false if K is not exact optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is exact optional key', () => {
          expectTypeOf<TestSubject<T, 'b'>>().toEqualTypeOf<true>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type K = `${EmptyString | 'authors.0.'}email`

      // Expect
      expectTypeOf<TestSubject<Author | Book, K>>().toEqualTypeOf<boolean>()
    })
  })
})
