/**
 * @file Type Tests - isJsonPrimitive
 * @module tutils/guards/tests/unit-d/isJsonPrimitive
 */

import type { JsonPrimitive } from '#src/types'
import type testSubject from '../is-json-primitive'

describe('unit-d:guards/isJsonPrimitive', () => {
  it('should guard JsonPrimitive', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<JsonPrimitive>()
  })
})
