/**
 * @file Type Tests - Join
 * @module tutils/types/tests/unit-d/Join
 */

import type TestSubject from '../join'

describe('unit-d:types/Join', () => {
  it('should concatenate elements in Arr using Delimiter', () => {
    // Arrange
    type Arr = ['foo', 0, 'bar']
    type Delimiter = '.'

    // Expect
    expectTypeOf<TestSubject<Arr, Delimiter>>().toEqualTypeOf<'foo.0.bar'>()
  })
})
