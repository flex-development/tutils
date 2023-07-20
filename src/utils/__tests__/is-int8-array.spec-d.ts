/**
 * @file Type Tests - isInt8Array
 * @module tutils/utils/tests/unit-d/isInt8Array
 */

import type testSubject from '../is-int8-array'

describe('unit-d:utils/isInt8Array', () => {
  it('should guard Int8Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Int8Array>()
  })
})
