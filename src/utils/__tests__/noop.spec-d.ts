/**
 * @file Type Tests - merge
 * @module tutils/utils/tests/unit-d/noop
 */

import type testSubject from '../noop'

describe('unit-d:utils/noop', () => {
  it('should return void', () => {
    expectTypeOf<typeof testSubject>().returns.toBeVoid()
  })
})
