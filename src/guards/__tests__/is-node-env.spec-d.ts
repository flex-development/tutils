/**
 * @file Type Tests - isNodeEnv
 * @module tutils/guards/tests/unit-d/isNodeEnv
 */

import type { NodeEnv } from '#src/enums'
import type testSubject from '../is-node-env'

describe('unit-d:guards/isNodeEnv', () => {
  it('should guard NodeEnv', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<NodeEnv>()
  })
})
