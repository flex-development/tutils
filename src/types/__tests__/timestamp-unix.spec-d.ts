/**
 * @file Type Tests - TimestampUnix
 * @module tutils/types/tests/unit-d/TimestampUnix
 */

import type TestSubject from '../timestamp-unix'

describe('unit-d:types/TimestampUnix', () => {
  it('should be a number', () => {
    expectTypeOf<TestSubject>().toBeNumber()
  })
})
