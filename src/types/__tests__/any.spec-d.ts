/**
 * @file Type Tests - ANY
 * @module tutils/types/tests/unit-d/ANY
 */

import type TestSubject from '../any'

describe('unit-d:types/ANY', () => {
  it('should equal type of any', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<any>()
  })
})
