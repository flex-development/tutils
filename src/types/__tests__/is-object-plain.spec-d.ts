/**
 * @file Type Tests - IsObjectPlain
 * @module tutils/types/tests/unit-d/IsObjectPlain
 */

import type Book from '#fixtures/book.interface'
import type Fn from '../fn'
import type TestSubject from '../is-object-plain'
import type ObjectPlain from '../object-plain'
import type Primitive from '../primitive'
import type Simplify from '../simplify'

describe('unit-d:types/IsObjectPlain', () => {
  it('should equal false if [T] does not extend [ObjectPlain]', () => {
    expectTypeOf<TestSubject<Book>>().toEqualTypeOf<false>()
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

  it('should equal true if [T] extends [ObjectPlain]', () => {
    expectTypeOf<TestSubject<ObjectPlain>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Simplify<Book>>>().toEqualTypeOf<true>()
  })
})
