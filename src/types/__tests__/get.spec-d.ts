/**
 * @file Type Tests - Get
 * @module tutils/types/tests/unit-d/Get
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type Vehicle from '#fixtures/types/vehicle'
import type At from '../at'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type EmptyString from '../empty-string'
import type Fallback from '../fallback'
import type Fn from '../fn'
import type TestSubject from '../get'
import type NIL from '../nil'
import type Nullable from '../nullable'
import type { tag } from '../opaque'
import type Primitive from '../primitive'

describe('unit-d:types/Get', () => {
  type F = null

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<Author, never, F>>().toEqualTypeOf<F>()
  })

  it('should equal Fallback<T[keyof T], F> K is any', () => {
    // Arrange
    type T = Book
    type Expect = Fallback<T[keyof T], F>

    expectTypeOf<TestSubject<T, any, F>>().toEqualTypeOf<Expect>()
  })

  it('should equal T if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T, keyof T, F>>().toBeAny()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal F if K is not path of T', () => {
      expectTypeOf<TestSubject<Vehicle, 'foo', F>>().toEqualTypeOf<F>()
    })

    it('should equal F if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<EmptyObject, 'data', F>>().toEqualTypeOf<F>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      it('should equal F if H does not extend Keyof<T>', () => {
        expectTypeOf<TestSubject<Book, 'data.msg', F>>().toEqualTypeOf<F>()
      })

      describe('H extends Keyof<T>', () => {
        it('should equal Fallback<Get<T[H], R, F>, F>', () => {
          // Arrange
          type T = { res: { data: { 0: 1; book: Book; id: 'book' } } }
          type K1 = 'res.data.0'
          type K2 = 'res.data.book.publisher'
          type K3 = 'res.data.book.title'
          type K4 = 'res.data.book.title.charAt'
          type E1 = Fallback<T['res']['data'][0], F>
          type E2 = Fallback<T['res']['data']['book']['publisher'], F>
          type E3 = Fallback<T['res']['data']['book']['title'], F>
          type E4 = Fallback<T['res']['data']['book']['title']['charAt'], F>

          // Expect
          expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<E1>()
          expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<E2>()
          expectTypeOf<TestSubject<T, K3, F>>().toEqualTypeOf<E3>()
          expectTypeOf<TestSubject<T, K4, F>>().toEqualTypeOf<E4>()
        })
      })
    })

    describe('K extends Keyof<T>', () => {
      it('should equal Fallback<T[K], F>', () => {
        // Arrange
        type T1 = Author
        type T2 = { [x: string]: string | undefined }
        type K1 = 'email'
        type K2 = '1' | 0
        type E1 = Fallback<T1[K1], F>
        type E2 = Fallback<T2[K2], F>

        // Expect
        expectTypeOf<TestSubject<T1, K1, F>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T2, K2, F>>().toEqualTypeOf<E2>()
      })
    })
  })

  describe('T extends Primitive', () => {
    it('should equal F if Keyof<T> is never', () => {
      // Arrange
      type K = 'toString'

      // Expect
      expectTypeOf<TestSubject<NIL, K, F>>().toEqualTypeOf<F>()
      expectTypeOf<TestSubject<null, K, F>>().toEqualTypeOf<F>()
      expectTypeOf<TestSubject<undefined, K, F>>().toEqualTypeOf<F>()
    })

    describe('T extends bigint', () => {
      it('should equal F if K is not path of T', () => {
        expectTypeOf<TestSubject<bigint, 'data', F>>().toEqualTypeOf<F>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal F if H does not extend Keyof<T>', () => {
          expectTypeOf<TestSubject<bigint, 'data.msg', F>>().toEqualTypeOf<F>()
        })

        describe('H extends Keyof<T>', () => {
          it('should equal Fallback<Get<T[H], R, F>, F>', () => {
            // Arrange
            type T = bigint & { res: { 0: { message?: string } } }
            type K = 'res.0.message'
            type Expect = Fallback<T['res'][0]['message'], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends Keyof<T>', () => {
        it('should equal Fallback<T[K], F>', () => {
          // Arrange
          type T = bigint
          type K1 = 'toString'
          type K2 = typeof Symbol.toStringTag
          type Expect<K extends keyof T> = Fallback<T[K], F>

          // Expect
          expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Expect<K1>>()
          expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Expect<K2>>()
        })
      })
    })

    describe('T extends boolean', () => {
      it('should equal F if K is not path of T', () => {
        expectTypeOf<TestSubject<boolean, 'data', F>>().toEqualTypeOf<F>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal F if H does not extend Keyof<T>', () => {
          expectTypeOf<TestSubject<boolean, 'data.msg', F>>().toEqualTypeOf<F>()
        })

        describe('H extends Keyof<T>', () => {
          it('should equal Fallback<Get<T[H], R, F>, F>', () => {
            // Arrange
            type T = boolean & { res: { 0: { message?: string } } }
            type K = 'res.0.message'
            type Expect = Fallback<T['res'][0]['message'], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends Keyof<T>', () => {
        it('should equal Fallback<T[K], F>', () => {
          // Arrange
          type T = boolean
          type K = 'valueOf'
          type Expect = Fallback<T[K], F>

          // Expect
          expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends number', () => {
      it('should equal F if K is not path of T', () => {
        expectTypeOf<TestSubject<number, 'data', F>>().toEqualTypeOf<F>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal F if H does not extend Keyof<T>', () => {
          expectTypeOf<TestSubject<number, 'data.msg', F>>().toEqualTypeOf<F>()
        })

        describe('H extends Keyof<T>', () => {
          it('should equal Fallback<Get<T[H], R, F>, F>', () => {
            // Arrange
            type T = number & { res: { 0: { message?: string } } }
            type K = 'res.0.message'
            type Expect = Fallback<T['res'][0]['message'], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends Keyof<T>', () => {
        it('should equal Fallback<T[K], F>', () => {
          // Arrange
          type T = number
          type K = 'toPrecision'
          type Expect = Fallback<T[K], F>

          // Expect
          expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends string', () => {
      it('should equal F if K is not path of T', () => {
        expectTypeOf<TestSubject<'book', 'data', F>>().toEqualTypeOf<F>()
        expectTypeOf<TestSubject<string, 'data', F>>().toEqualTypeOf<F>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal F if H does not extend Keyof<T>', () => {
          // Arrange
          type T = 'vehicle'
          type K = '-8.0'

          // Expect
          expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<F>()
        })

        describe('H extends Numeric', () => {
          it('should equal Fallback<Get<At<T, H>, R, F>, F>', () => {
            // Arrange
            type T = 'book'
            type K1 = '-1.charCodeAt'
            type K2 = '0.-1'
            type E1 = Fallback<At<T, -1>['charCodeAt'], F>
            type E2 = Fallback<At<At<T, 0>, -1>, F>

            // Expect
            expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<E1>()
            expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<E2>()
          })
        })

        describe('H extends keyof T', () => {
          it('should equal Fallback<Get<T[H], R, F>, F>', () => {
            // Arrange
            type T = string & { res: { 0: { message?: string } } }
            type K = 'res.0.message'
            type Expect = Fallback<T['res'][0]['message'], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends Keyof<T>', () => {
        describe('K extends NumberLike', () => {
          it('should equal At<T, K, F>', () => {
            // Arrange
            type T1 = string
            type T2 = 'flex'
            type T3 = EmptyString
            type K = '-1' | 0

            // Expect
            expectTypeOf<TestSubject<T1, K, F>>().toEqualTypeOf<At<T1, K, F>>()
            expectTypeOf<TestSubject<T2, K, F>>().toEqualTypeOf<At<T2, K, F>>()
            expectTypeOf<TestSubject<T3, K, F>>().toEqualTypeOf<At<T3, K, F>>()
          })
        })

        describe('K extends keyof T', () => {
          it('should equal Fallback<T[K], F>', () => {
            // Arrange
            type T = string
            type K1 = 'charAt'
            type K2 = typeof Symbol.iterator
            type Expect<K extends keyof T> = Fallback<T[K], F>

            // Expect
            expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Expect<K1>>()
            expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Expect<K2>>()
          })
        })
      })
    })

    describe('T extends symbol', () => {
      it('should equal F if K is not path of T', () => {
        expectTypeOf<TestSubject<symbol, 'data', F>>().toEqualTypeOf<F>()
      })

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal F if H does not extend Keyof<T>', () => {
          expectTypeOf<TestSubject<symbol, 'data.msg', F>>().toEqualTypeOf<F>()
        })

        describe('H extends Keyof<T>', () => {
          it('should equal Fallback<Get<T[H], R, F>, F>', () => {
            // Arrange
            type T = symbol & { res: { 0: { message?: string } } }
            type K = 'res.0.message'
            type Expect = Fallback<T['res'][0]['message'], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('K extends Keyof<T>', () => {
        it('should equal Fallback<T[K], F>', () => {
          // Arrange
          type T = symbol
          type K1 = 'toString'
          type K2 = typeof Symbol.toPrimitive
          type Expect<K extends keyof T> = Fallback<T[K], F>

          // Expect
          expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Expect<K1>>()
          expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Expect<K2>>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal F if K is not path of T', () => {
      expectTypeOf<TestSubject<Readonly<Fn>, 'data', F>>().toEqualTypeOf<F>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      it('should equal F if H does not extend Keyof<T>', () => {
        expectTypeOf<TestSubject<Fn, 'data.msg', F>>().toEqualTypeOf<F>()
      })

      describe('H extends Keyof<T>', () => {
        it('should equal Fallback<Get<T[H], R, F>, F>', () => {
          // Arrange
          type T = Readonly<Fn> & { res: { 0: { message?: string } } }
          type K = 'res.0.message'
          type Expect = Fallback<T['res'][0]['message'], F>

          // Expect
          expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('K extends Keyof<T>', () => {
      it('should equal Fallback<T[K], F>', () => {
        // Arrange
        type T = Readonly<Fn>
        type K1 = 'bind'
        type K2 = typeof Symbol.hasInstance
        type Expect<K extends keyof T> = Fallback<T[K], F>

        // Expect
        expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Expect<K1>>()
        expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Expect<K2>>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal F if K is not path of T', () => {
      expectTypeOf<TestSubject<Vehicle[], 'data', F>>().toEqualTypeOf<F>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      it('should equal F if H does not extend Keyof<T>', () => {
        expectTypeOf<TestSubject<[Vehicle], '-3.vin', F>>().toEqualTypeOf<F>()
      })

      describe('H extends Numeric', () => {
        it('should equal Fallback<Get<At<T, H>, R, F>, F>', () => {
          // Arrange
          type T = [Author, Author?]
          type K1 = '0.display_name'
          type K2 = '0.email'
          type K3 = '-1.display_name'
          type K4 = '-1.email'
          type E1 = Fallback<T[0]['display_name'], F>
          type E2 = Fallback<T[0]['email'], F>
          type E3 = Fallback<NonNullable<T[1]>['display_name'], F>
          type E4 = Fallback<NonNullable<T[1]>['email'], F>

          // Expect
          expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<E1>()
          expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<E2>()
          expectTypeOf<TestSubject<T, K3, F>>().toEqualTypeOf<E3>()
          expectTypeOf<TestSubject<T, K4, F>>().toEqualTypeOf<E4>()
        })
      })

      describe('H extends Keyof<T>', () => {
        it('should equal Fallback<Get<T[H], R, F>, F>', () => {
          // Arrange
          type T = Vehicle[] & { res: { 0: { message?: string } } }
          type K = 'res.0.message'
          type Expect = Fallback<T['res'][0]['message'], F>

          // Expect
          expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('K extends Keyof<T>', () => {
      describe('K extends NumberLike', () => {
        it('should equal At<T, K, F>', () => {
          // Arrange
          type T1 = Author[]
          type T2 = [Author, Author?]
          type T3 = EmptyArray
          type T4 = Readonly<EmptyArray>
          type K = -1 | '1'

          // Expect
          expectTypeOf<TestSubject<T1, K, F>>().toEqualTypeOf<At<T1, K, F>>()
          expectTypeOf<TestSubject<T2, K, F>>().toEqualTypeOf<At<T2, K, F>>()
          expectTypeOf<TestSubject<T3, K, F>>().toEqualTypeOf<At<T3, K, F>>()
          expectTypeOf<TestSubject<T4, K, F>>().toEqualTypeOf<At<T4, K, F>>()
        })
      })

      describe('K extends keyof T', () => {
        it('should equal Fallback<T[K], F>', () => {
          // Arrange
          type T = Author[]
          type K1 = 'push'
          type K2 = typeof Symbol.iterator
          type Expect<K extends keyof T> = Fallback<T[K], F>

          // Expect
          expectTypeOf<TestSubject<T, K1, F>>().toEqualTypeOf<Expect<K1>>()
          expectTypeOf<TestSubject<T, K2, F>>().toEqualTypeOf<Expect<K2>>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Primitive | (Vehicle & { readonly [tag]: 'vehicle' })
      type K = typeof tag | 'toString'
      type Expect = Nullable<
        Exclude<NonNullable<Primitive>, boolean>['toString'] | 'vehicle'
      >

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
    })
  })
})
