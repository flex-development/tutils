/**
 * @file Type Tests - isInt16Array
 * @module tutils/utils/tests/unit-d/isInt16Array
 */

import type testSubject from '../is-int16-array'

describe('unit-d:utils/isInt16Array', () => {
  it('should guard Int16Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Int16Array>()
  })
})
