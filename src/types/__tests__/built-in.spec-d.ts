/**
 * @file Type Tests - BuiltIn
 * @module tutils/types/tests/unit-d/BuiltIn
 */

import type TestSubject from '../built-in'
import type Primitive from '../primitive'

describe('unit-d:types/BuiltIn', () => {
  it('should extract Date', () => {
    expectTypeOf<TestSubject>().extract<Date>().toEqualTypeOf<Date>()
  })

  it('should extract Error', () => {
    expectTypeOf<TestSubject>().extract<Error>().toEqualTypeOf<Error>()
  })

  it('should extract Function', () => {
    expectTypeOf<TestSubject>().extract<Function>().toEqualTypeOf<Function>()
  })

  it('should extract Primitive', () => {
    expectTypeOf<TestSubject>().extract<Primitive>().toEqualTypeOf<Primitive>()
  })

  it('should extract RegExp', () => {
    expectTypeOf<TestSubject>().extract<RegExp>().toEqualTypeOf<RegExp>()
  })
})
