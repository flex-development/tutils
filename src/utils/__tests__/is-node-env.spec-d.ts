/**
 * @file Type Tests - isNodeEnv
 * @module tutils/utils/tests/unit-d/isNodeEnv
 */

import type { NodeEnv } from '#src/enums'
import type testSubject from '../is-node-env'

describe('unit-d:utils/isNodeEnv', () => {
  it('should guard NodeEnv', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<NodeEnv>()
  })
})
