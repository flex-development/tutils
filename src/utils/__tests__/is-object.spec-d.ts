/**
 * @file Type Tests - isObject
 * @module tutils/utils/tests/unit-d/isObject
 */

import type { PropertyKey } from '#src/types'
import type testSubject from '../is-object'

describe('unit-d:utils/isObject', () => {
  it('should guard Record<PropertyKey, any>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<
      Record<PropertyKey, any>
    >()
  })
})
