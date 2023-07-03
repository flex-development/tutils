/**
 * @file Type Tests - IfReadonlyKey
 * @module tutils/types/tests/unit-d/IfReadonlyKey
 */

import type Book from '#fixtures/book.interface'
import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../if-key-readonly'

describe('unit-d:types/IfReadonlyKey', () => {
  type F = 0
  type T = 1

  it('should equal F if IsReadonlyKey<U, K> extends false', () => {
    expectTypeOf<TestSubject<Vehicle, 'make', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is any', () => {
    expectTypeOf<TestSubject<Vehicle, any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<Vehicle, never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, 'make', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, 'vin', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsReadonlyKey<U, K> extends true', () => {
    // Arrange
    type K = 'vin'

    // Expect
    expectTypeOf<TestSubject<Readonly<Vehicle>, K, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Readonly<Book> | Readonly<Vehicle>
      type K = 'isbn' | 'vin'

      // Expect
      expectTypeOf<TestSubject<U, K, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
