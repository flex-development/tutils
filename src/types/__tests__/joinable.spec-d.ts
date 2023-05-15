/**
 * @file Type Tests - Joinable
 * @module tutils/types/tests/unit-d/Joinable
 */

import type TestSubject from '../joinable'
import type Primitive from '../primitive'

describe('unit-d:types/JsonArray', () => {
  it('should equal Exclude<Primitive, symbol>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Exclude<Primitive, symbol>>()
  })
})
