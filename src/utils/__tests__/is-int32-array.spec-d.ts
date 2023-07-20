/**
 * @file Type Tests - isInt32Array
 * @module tutils/utils/tests/unit-d/isInt32Array
 */

import type testSubject from '../is-int32-array'

describe('unit-d:utils/isInt32Array', () => {
  it('should guard Int32Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Int32Array>()
  })
})
