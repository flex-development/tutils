/**
 * @file Type Tests - Opaque
 * @module tutils/types/tests/unit-d/Opaque
 */

import type TestSubject from '../opaque'

describe('unit-d:types/Opaque', () => {
  type B = number
  type T = 'account-number'

  it('should be assignable to type of B', () => {
    expectTypeOf<TestSubject<B, T>>().toMatchTypeOf<B>()
  })

  it('should not match opaque type with same base and different token', () => {
    // Arrange
    type T2 = 'account-balance'

    // Expect
    expectTypeOf<TestSubject<B, T>>().not.toMatchTypeOf<TestSubject<B, T2>>()
  })
})
