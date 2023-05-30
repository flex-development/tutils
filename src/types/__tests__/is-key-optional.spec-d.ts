/**
 * @file Type Tests - IsOptionalKey
 * @module tutils/types/tests/unit-d/IsOptionalKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../is-key-optional'
import type Join from '../join'

describe('unit-d:types/IsOptionalKey', () => {
  type T1 = Author
  type T2 = { data: { author: Author } }

  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<T1, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<T1, never>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is not optional property of T', () => {
    // Arrange
    type K1 = 'first_name'
    type K2 = 'last_name'
    type K3 = K1 | K2 | 'display_name'
    type K4 = Join<['data', 'author', K1]>
    type K5 = Join<['data', 'author', K2]>
    type K6 = Join<['data', 'author', 'email']> | K4 | K5

    // Expect
    expectTypeOf<TestSubject<T1, K1>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<T1, K2>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<T1, K3>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<T2, K4>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<T2, K5>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<T2, K6>>().toEqualTypeOf<false>()
  })

  it('should equal true if K is optional property of T', () => {
    // Arrange
    type K1 = 'display_name'
    type K2 = 'email'
    type K3 = K1 | K2
    type K4 = Join<['data', 'author', K1]>
    type K5 = Join<['data', 'author', K2]>
    type K6 = K4 | K5

    // Expect
    expectTypeOf<TestSubject<T1, K1>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<T1, K2>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<T1, K3>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<T2, K4>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<T2, K5>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<T2, K6>>().toEqualTypeOf<true>()
  })
})
