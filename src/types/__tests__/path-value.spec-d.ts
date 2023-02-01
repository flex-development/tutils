/**
 * @file Type Tests - PathValue
 * @module tutils/types/tests/unit-d/PathValue
 */

import type TestSubject from '../path-value'

describe('unit-d:types/PathValue', () => {
  it('should extract type of value at T[P]', () => {
    // Arrange
    type T = { foo: { bar: { data: string } } }
    type P = 'foo.bar.data' | 'foo.bar'

    // Expect
    expectTypeOf<TestSubject<T, P>>().toEqualTypeOf<string | { data: string }>()
  })
})
