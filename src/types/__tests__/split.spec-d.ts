/**
 * @file Type Tests - Split
 * @module tutils/types/tests/unit-d/Split
 */

import type TestSubject from '../split'

describe('unit-d:types/Split', () => {
  it('should equal T.split(Delimiter)', () => {
    // Arrange
    type T = 'publisher.email'

    // Expect
    expectTypeOf<TestSubject<T, undefined>>().toEqualTypeOf<[T]>()
    expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<string[]>()
    expectTypeOf<TestSubject<T, '.'>>().toEqualTypeOf<['publisher', 'email']>()
  })
})
