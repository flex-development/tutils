/**
 * @file Type Tests - isString
 * @module tutils/utils/tests/unit-d/isString
 */

import type testSubject from '../is-string'

describe('unit-d:utils/isString', () => {
  it('should guard string', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<string>()
  })
})
