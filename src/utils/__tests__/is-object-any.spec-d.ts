/**
 * @file Type Tests - isObjectAny
 * @module tutils/utils/tests/unit-d/isObjectAny
 */

import type { ObjectAny } from '#src/types'
import type testSubject from '../is-object-any'

describe('unit-d:utils/isObjectAny', () => {
  it('should guard ObjectAny', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<ObjectAny>()
  })
})
