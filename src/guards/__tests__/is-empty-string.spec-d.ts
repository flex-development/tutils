/**
 * @file Type Tests - isEmptyString
 * @module tutils/guards/tests/unit-d/isEmptyString
 */

import type { EmptyString } from '#src/types'
import type testSubject from '../is-empty-string'

describe('unit-d:guards/isEmptyString', () => {
  it('should guard EmptyString', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<EmptyString>()
  })
})
