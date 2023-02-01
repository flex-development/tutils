/**
 * @file Type Tests - Stringafiable
 * @module tutils/types/tests/unit-d/Stringafiable
 */

import type TestSubject from '../stringafiable'

describe('unit-d:types/Stringafiable', () => {
  it('should match [toString(): string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('toString')
      .toEqualTypeOf<() => string>()
  })
})
