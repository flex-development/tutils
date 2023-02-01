/**
 * @file Type Tests - isObjectPlain
 * @module tutils/guards/tests/unit-d/isObjectPlain
 */

import type { ObjectPlain } from '#src/types'
import type testSubject from '../is-object-plain'

describe('unit-d:guards/isObjectPlain', () => {
  it('should guard ObjectPlain', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<ObjectPlain>()
  })
})
