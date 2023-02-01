/**
 * @file Type Tests - Nullable
 * @module tutils/types/tests/unit-d/Nullable
 */

import type TestSubject from '../nullable'

describe('unit-d:types/Nullable', () => {
  it('should extract T', () => {
    expectTypeOf<TestSubject<string>>().extract<string>().toBeString()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject<string>>().extract<null>().toBeNull()
  })
})
