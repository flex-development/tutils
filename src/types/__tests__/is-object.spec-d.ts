/**
 * @file Type Tests - IsObject
 * @module tutils/types/tests/unit-d/IsObject
 */

import type Fn from '../fn'
import type TestSubject from '../is-object'
import type ObjectCurly from '../object-curly'
import type Primitive from '../primitive'

describe('unit-d:types/IsObject', () => {
  it('should equal false if [T] does not extend [object]', () => {
    expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<Primitive | object>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [object]', () => {
    expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<ObjectCurly>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<RegExp>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<readonly string[]>>().toEqualTypeOf<true>()
  })
})
