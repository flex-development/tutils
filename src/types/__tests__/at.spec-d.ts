/**
 * @file Type Tests - At
 * @module tutils/types/tests/unit-d/At
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../at'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type Fallback from '../fallback'
import type Integer from '../integer'
import type Nilable from '../nilable'
import type Numeric from '../numeric'
import type NegativeNumeric from '../numeric-negative'
import type Optional from '../optional'
import type Reverse from '../reverse'
import type Split from '../split'

describe('unit-d:types/At', () => {
  type F = null

  it('should equal F if T is any', () => {
    expectTypeOf<TestSubject<any, 0, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if T is never', () => {
    expectTypeOf<TestSubject<never, 0, F>>().toEqualTypeOf<F>()
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal F if K is never', () => {
        expectTypeOf<TestSubject<['a'], never, F>>().toEqualTypeOf<F>()
      })

      it('should equal Fallback<T[K], F> if Has<T, K> extends true', () => {
        // Arrange
        type T = { '3': number | undefined } & [Vehicle]
        type K = '3' | 3
        type Expect = Fallback<T[K], F>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
      })

      it('should equal Fallback<T[number], F> if K is any', () => {
        // Arrange
        type T = ['a', 'b', 'c'?]
        type Expect = Fallback<T[number], F>

        // Expect
        expectTypeOf<TestSubject<T, any, F>>().toEqualTypeOf<Expect>()
      })

      describe('Stringify<K> extends `-${infer N extends number}`', () => {
        it('should equal F if K is out of range', () => {
          // Arrange
          type T = Readonly<EmptyArray>

          // Expect
          expectTypeOf<TestSubject<T, -1 | '-1', F>>().toEqualTypeOf<F>()
        })

        describe('NegativeNumeric extends K', () => {
          it('should equal Fallback<T[number], F>', () => {
            // Arrange
            type T = [number?, number?]
            type K = NegativeNumeric
            type Expect = Fallback<T[number], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('Stringify<K> extends Stringify<Indices<T>>', () => {
          it('should equal Fallback<[any, ...Reverse<T>][N], F>', () => {
            // Arrange
            type T = ['a'?, 'b'?, 'c'?, 'd'?, 'e'?]
            type Expect = Fallback<[any, ...Reverse<T>][3], F>

            // Expect
            expectTypeOf<TestSubject<T, -3 | '-3', F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('Stringify<K> extends `${infer N extends number}`', () => {
        it('should equal F if N is out of range', () => {
          // Arrange
          type T = Readonly<EmptyArray>

          // Expect
          expectTypeOf<TestSubject<T, '0' | 0, F>>().toEqualTypeOf<F>()
        })

        describe('K extends Integer', () => {
          it('should equal Fallback<T[number], F>', () => {
            // Arrange
            type T = [Vehicle['vin'], Vehicle, number?]
            type Expect = Fallback<T[number], F>

            // Expect
            expectTypeOf<TestSubject<T, Integer, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('N extends Indices<T>', () => {
          it('should equal Fallback<T[N], F>', () => {
            // Arrange
            type T = ['a'?, 'b'?, 'c'?, 'd'?, 'e'?]
            type K = '1' | 1
            type Expect = Fallback<T[K], F>

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('Numeric extends K', () => {
          it('should equal Fallback<T[number], F>', () => {
            // Arrange
            type T = [number?, number?]
            type Expect = Fallback<T[number], F>

            // Expect
            expectTypeOf<TestSubject<T, Numeric, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('number extends K', () => {
          it('should equal Fallback<T[number], F>', () => {
            // Arrange
            type T = [number?, string?]
            type Expect = Fallback<T[number], F>

            // Expect
            expectTypeOf<TestSubject<T, number, F>>().toEqualTypeOf<Expect>()
          })
        })
      })
    })

    describe('number extends Length<T>', () => {
      type T = Vehicle[]

      it('should equal F if K is never', () => {
        expectTypeOf<TestSubject<T, never, F>>().toEqualTypeOf<F>()
      })

      it('should equal Fallback<Optional<T[number]>, F>', () => {
        // Arrange
        type Expect = Fallback<Optional<T[number]>, F>

        // Expect
        expectTypeOf<TestSubject<T, -1 | '-1', F>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<T, '1' | 1, F>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<T, Integer, F>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<T, any, F>>().toEqualTypeOf<Expect>()
      })

      it('should equal Fallback<T[K], F> if Has<T, K> extends true', () => {
        // Arrange
        type T = Vehicle[] & { '3': number | undefined }
        type K = '3' | 3
        type Expect = Fallback<T[K], F>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('T extends string', () => {
    describe('IsLiteral<Length<T>> extends true', () => {
      type Splitter<T extends string> = Split<T, EmptyString>

      it('should equal Splitter<T>[number] if K is any', () => {
        // Arrange
        type T = 'abc'
        type Expect = Splitter<T>[number]

        // Expect
        expectTypeOf<TestSubject<T, any, F>>().toEqualTypeOf<Expect>()
      })

      it('should equal F if K is never', () => {
        expectTypeOf<TestSubject<'a', never, F>>().toEqualTypeOf<F>()
      })

      describe('Stringify<K> extends `-${infer N extends number}`', () => {
        it('should equal F if N is out of range', () => {
          // Arrange
          type T = EmptyString

          // Expect
          expectTypeOf<TestSubject<T, -1 | '-1', F>>().toEqualTypeOf<F>()
        })

        describe('NegativeNumeric extends K', () => {
          it('should equal Splitter<T>[number]', () => {
            // Arrange
            type T = 'abc'
            type K = NegativeNumeric
            type Expect = Splitter<T>[number]

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('Stringify<K> extends Stringify<Indices<T>>', () => {
          it('should equal [any, ...Reverse<Splitter<T>>][N]', () => {
            // Arrange
            type T = 'xyz'
            type Expect = [any, ...Reverse<Splitter<T>>][3]

            // Expect
            expectTypeOf<TestSubject<T, -3 | '-3', F>>().toEqualTypeOf<Expect>()
          })
        })
      })

      describe('Stringify<K> extends `${infer N extends number}`', () => {
        it('should equal F if N is out of range', () => {
          // Arrange
          type T = EmptyString

          // Expect
          expectTypeOf<TestSubject<T, '1' | 1, F>>().toEqualTypeOf<F>()
        })

        describe('K extends Integer', () => {
          it('should equal Splitter<T>[number]', () => {
            // Arrange
            type T = 'abc'
            type Expect = Splitter<T>[number]

            // Expect
            expectTypeOf<TestSubject<T, Integer, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('N extends Indices<T>', () => {
          it('should equal Splitter<T>[N]', () => {
            // Arrange
            type T = 'xyz'
            type K = '2' | 2
            type Expect = Splitter<T>[K]

            // Expect
            expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('Numeric extends K', () => {
          it('should equal Splitter<T>[number]', () => {
            // Arrange
            type T = 'racecar'
            type Expect = Splitter<T>[number]

            // Expect
            expectTypeOf<TestSubject<T, Numeric, F>>().toEqualTypeOf<Expect>()
          })
        })

        describe('number extends K', () => {
          it('should equal Splitter<T>[number]', () => {
            // Arrange
            type T = 'racecar'
            type Expect = Splitter<T>[number]

            // Expect
            expectTypeOf<TestSubject<T, number, F>>().toEqualTypeOf<Expect>()
          })
        })
      })
    })

    describe('number extends Length<T>', () => {
      type T = string

      it('should equal F if K is never', () => {
        expectTypeOf<TestSubject<T, never, F>>().toEqualTypeOf<F>()
      })

      it('should equal Fallback<Optional<T[number]>, F>', () => {
        // Arrange
        type Expect = Fallback<Optional<T[number]>, F>

        // Expect
        expectTypeOf<TestSubject<T, -1 | '-1', F>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<T, '1' | 1, F>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<T, Integer, F>>().toEqualTypeOf<Expect>()
        expectTypeOf<TestSubject<T, any, F>>().toEqualTypeOf<Expect>()
      })

      it('should equal Fallback<T[K], F> if Has<T, K> extends true', () => {
        // Arrange
        type T = string & { '3': number | undefined }
        type K = '3' | 3
        type Expect = Fallback<T[K], F>

        // Expect
        expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<'xyz' | ['a', 'b', 'c'?]>
      type K = -1 | 0
      type Expect = Fallback<'a' | 'c' | 'x' | 'z' | undefined, F>

      // Expect
      expectTypeOf<TestSubject<T, K, F>>().toEqualTypeOf<Expect>()
    })
  })
})
