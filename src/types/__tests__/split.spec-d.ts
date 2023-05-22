/**
 * @file Type Tests - Split
 * @module tutils/types/tests/unit-d/Split
 */

import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type TestSubject from '../split'

describe('unit-d:types/Split', () => {
  it('should equal T.split(Delimiter)', () => {
    // Arrange
    type T1 = EmptyString
    type T2 = 'publisher.email'

    // Expect
    expectTypeOf<TestSubject<T1>>().toEqualTypeOf<[T1]>()
    expectTypeOf<TestSubject<T1, EmptyString>>().toEqualTypeOf<EmptyArray>()
    expectTypeOf<TestSubject<T1, RegExp>>().toEqualTypeOf<EmptyArray>()
    expectTypeOf<TestSubject<T1, '.'>>().toEqualTypeOf<[T1]>()
    expectTypeOf<TestSubject<T2>>().toEqualTypeOf<[T2]>()
    expectTypeOf<TestSubject<T2, RegExp>>().toEqualTypeOf<string[]>()
    expectTypeOf<TestSubject<T2, '.'>>().toEqualTypeOf<['publisher', 'email']>()
  })
})
