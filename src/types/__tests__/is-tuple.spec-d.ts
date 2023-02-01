/**
 * @file Type Tests - IsTuple
 * @module tutils/types/tests/unit-d/IsTuple
 */

import type BuiltIn from '../built-in'
import type TestSubject from '../is-tuple'

describe('unit-d:types/IsTuple', () => {
  it('should equal T if T is a tuple', () => {
    expectTypeOf<TestSubject<[string, string, string]>>().toBeArray()
  })

  it('should equal never if T is not a tuple', () => {
    expectTypeOf<TestSubject<BuiltIn>>().toBeNever()
  })
})
