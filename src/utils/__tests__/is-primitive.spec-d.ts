/**
 * @file Type Tests - isPrimitive
 * @module tutils/utils/tests/unit-d/isPrimitive
 */

import type { Primitive } from '#src/types'
import type testSubject from '../is-primitive'

describe('unit-d:utils/isPrimitive', () => {
  it('should guard Primitive', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Primitive>()
  })
})
