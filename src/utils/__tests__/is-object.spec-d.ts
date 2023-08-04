/**
 * @file Type Tests - isObject
 * @module tutils/utils/tests/unit-d/isObject
 */

import type { Objectify } from '#src/types'
import type testSubject from '../is-object'

describe('unit-d:utils/isObject', () => {
  it('should guard Objectify<any>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Objectify<any>>()
  })
})
