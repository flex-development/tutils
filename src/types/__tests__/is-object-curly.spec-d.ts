/**
 * @file Type Tests - IsObjectCurly
 * @module tutils/types/tests/unit-d/IsObjectCurly
 */

import type Book from '#fixtures/book.interface'
import type Fn from '../fn'
import type TestSubject from '../is-object-curly'
import type ObjectCurly from '../object-curly'
import type ObjectPlain from '../object-plain'
import type Primitive from '../primitive'
import type Simplify from '../simplify'

describe('unit-d:types/IsObjectCurly', () => {
  it('should equal false if [T] does not extend [ObjectCurly]', () => {
    expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<Primitive | RegExp>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<readonly Primitive[]>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [ObjectCurly]', () => {
    expectTypeOf<TestSubject<Book>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<ObjectCurly>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<ObjectPlain>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<RegExp>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Simplify<Book>>>().toEqualTypeOf<true>()
  })
})
