/**
 * @file Type Tests - isObject
 * @module tutils/utils/tests/unit-d/isObject
 */

import type { IndexSignature } from '#src/types'
import type testSubject from '../is-object'

describe('unit-d:utils/isObject', () => {
  it('should guard Record<IndexSignature, any>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<
      Record<IndexSignature, any>
    >()
  })
})
