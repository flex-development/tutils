/**
 * @file Type Tests - BuiltInObject
 * @module tutils/types/tests/unit-d/BuiltInObject
 */

import type BuiltIn from '../built-in'
import type TestSubject from '../built-in-object'
import type Primitive from '../primitive'

describe('unit-d:types/BuiltInObject', () => {
  it('should equal Exclude<BuiltIn, Primitive>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Exclude<BuiltIn, Primitive>>()
  })
})
