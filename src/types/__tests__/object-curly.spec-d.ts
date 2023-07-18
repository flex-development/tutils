/**
 * @file Type Tests - ObjectCurly
 * @module tutils/types/tests/unit-d/ObjectCurly
 */

import type Person from '#fixtures/interfaces/person'
import type Fn from '../fn'
import type TestSubject from '../object-curly'
import type ObjectPlain from '../object-plain'
import type Primitive from '../primitive'

describe('unit-d:types/ObjectCurly', () => {
  it('should match class instance objects', () => {
    expectTypeOf(new Date()).toMatchTypeOf<TestSubject>()
    expectTypeOf(new Map()).toMatchTypeOf<TestSubject>()
    expectTypeOf(new Set()).toMatchTypeOf<TestSubject>()
  })

  it('should match pojos', () => {
    expectTypeOf<ObjectPlain>().toMatchTypeOf<TestSubject>()
    expectTypeOf<Person>().toMatchTypeOf<TestSubject>()
  })

  it('should not match arrays', () => {
    expectTypeOf<unknown[]>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<readonly unknown[]>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match functions', () => {
    expectTypeOf<Fn>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<Readonly<Fn>>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match primitives', () => {
    expectTypeOf<Primitive>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<Readonly<Primitive>>().not.toMatchTypeOf<TestSubject>()
  })
})
