/**
 * @file Type Tests - isArrayBuffer
 * @module tutils/utils/tests/unit-d/isArrayBuffer
 */

import type testSubject from '../is-array-buffer'

describe('unit-d:utils/isArrayBuffer', () => {
  it('should guard ArrayBuffer', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<ArrayBuffer>()
  })
})
