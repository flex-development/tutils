/**
 * @file Type Tests - isEmptyString
 * @module tutils/utils/tests/unit-d/isEmptyString
 */

import type { EmptyString } from '#src/types'
import type testSubject from '../is-empty-string'

describe('unit-d:utils/isEmptyString', () => {
  it('should guard EmptyString', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<EmptyString>()
  })
})
