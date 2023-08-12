/**
 * @file Type Tests - DecoratorTarget
 * @module tutils/types/tests/unit-d/DecoratorTarget
 */

import type AbstractConstructor from '../constructor-abstract'
import type TestSubject from '../decorator-target'
import type Objectify from '../objectify'

describe('unit-d:types/DecoratorTarget', () => {
  it('should extract AbstractConstructor<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<AbstractConstructor<any>>()
      .not.toBeNever()
  })

  it('should extract Objectify<any>', () => {
    expectTypeOf<TestSubject>()
      .exclude<AbstractConstructor<any>>()
      .toEqualTypeOf<Objectify<any>>()
  })
})
