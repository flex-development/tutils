/**
 * @file Type Tests - Split
 * @module tutils/types/tests/unit-d/Split
 */

import type TestSubject from '../split'

describe('unit-d:types/Split', () => {
  it('should split Str using Delimiter', () => {
    // Arrange
    type Str = 'foo.0.bar'
    type Delimiter = '.'
    type Expected = ['foo', '0', 'bar']

    // Expect
    expectTypeOf<TestSubject<Str, Delimiter>>().toEqualTypeOf<Expected>()
  })
})
