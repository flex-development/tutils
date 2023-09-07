/**
 * @file Type Tests - isURL
 * @module tutils/utils/tests/unit-d/isURL
 */

import type { URL } from 'node:url'
import type testSubject from '../is-url'

describe('unit-d:utils/isURL', () => {
  it('should guard URL', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<URL>()
  })
})
