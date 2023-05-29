/**
 * @file Type Tests - isObjectCurly
 * @module tutils/utils/tests/unit-d/isObjectCurly
 */

import type { ObjectCurly } from '#src/types'
import type testSubject from '../is-object-curly'

describe('unit-d:utils/isObjectCurly', () => {
  it('should guard ObjectCurly', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<ObjectCurly>()
  })
})
