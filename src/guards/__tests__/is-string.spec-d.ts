/**
 * @file Type Tests - isString
 * @module tutils/guards/tests/unit-d/isString
 */

import type testSubject from '../is-string'

describe('unit-d:guards/isString', () => {
  it('should guard string', () => {
    expectTypeOf<typeof testSubject>().guards.toBeString()
  })
})
