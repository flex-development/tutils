/**
 * @file Type Tests - Trim
 * @module tutils/types/tests/unit-d/Trim
 */

import type TestSubject from '../trim'

describe('unit-d:types/Trim', () => {
  it('should return T without leading and trailing whitespaces', () => {
    expectTypeOf<TestSubject<' baz '>>().toEqualTypeOf<'baz'>()
  })
})
