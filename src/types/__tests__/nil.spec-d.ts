/**
 * @file Type Tests - NIL
 * @module tutils/types/tests/unit-d/NIL
 */

import type TestSubject from '../nil'
import type Optional from '../optional'

describe('unit-d:types/NIL', () => {
  it('should equal Optional<null>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Optional<null>>()
  })
})
