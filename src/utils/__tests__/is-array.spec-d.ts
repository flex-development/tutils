/**
 * @file Type Tests - isArray
 * @module tutils/utils/tests/unit-d/isArray
 */

import type testSubject from '../is-array'

describe('unit-d:utils/isArray', () => {
  it('should guard T[] | readonly T[]', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<
      unknown[] | readonly unknown[]
    >()
  })
})
