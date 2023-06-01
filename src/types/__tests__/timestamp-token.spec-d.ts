/**
 * @file Type Tests - TimestampToken
 * @module tutils/types/tests/unit-d/TimestampToken
 */

import type TestSubject from '../timestamp-token'

describe('unit-d:types/TimestampToken', () => {
  it('should equal "$timestamp"', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<'$timestamp'>()
  })
})
