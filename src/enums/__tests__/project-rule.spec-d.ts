/**
 * @file Type Tests - ProjectRule
 * @module tutils/enums/tests/unit-d/ProjectRule
 */

import type TestSubject from '../project-rule'

describe('unit-d:enums/ProjectRule', () => {
  it('should match [OMIT = 0]', () => {
    expectTypeOf<typeof TestSubject>().toHaveProperty('OMIT').toEqualTypeOf<0>()
  })

  it('should match [PICK = 1]', () => {
    expectTypeOf<typeof TestSubject>().toHaveProperty('PICK').toEqualTypeOf<1>()
  })
})
