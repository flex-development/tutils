/**
 * @file Type Tests - IsTuple
 * @module tutils/types/tests/unit-d/IsTuple
 */

import type TestSubject from '../is-tuple'
import type Nilable from '../nilable'

describe('unit-d:types/IsTuple', () => {
  it('should equal false if [T] does extend [[infer U, ...infer Rest]]', () => {
    expectTypeOf<TestSubject<Nilable<['id', string]>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<string[]>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [[infer U, ...infer Rest]]', () => {
    expectTypeOf<TestSubject<['first_name', string]>>().toEqualTypeOf<true>()
  })
})
