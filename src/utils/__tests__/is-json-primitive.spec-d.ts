/**
 * @file Type Tests - isJsonPrimitive
 * @module tutils/utils/tests/unit-d/isJsonPrimitive
 */

import type { JsonPrimitive } from '#src/types'
import type testSubject from '../is-json-primitive'

describe('unit-d:utils/isJsonPrimitive', () => {
  it('should guard JsonPrimitive', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<JsonPrimitive>()
  })
})
