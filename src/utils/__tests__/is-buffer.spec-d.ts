/**
 * @file Type Tests - isBuffer
 * @module tutils/utils/tests/unit-d/isBuffer
 */

import type testSubject from '../is-buffer'

describe('unit-d:utils/isBuffer', () => {
  it('should guard Buffer', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Buffer>()
  })
})
