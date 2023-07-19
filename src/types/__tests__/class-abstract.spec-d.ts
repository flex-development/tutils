/**
 * @file Type Tests - AbstractClass
 * @module tutils/types/tests/unit-d/AbstractClass
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../class-abstract'
import type AbstractConstructor from '../constructor-abstract'
import type Omit from '../omit'

describe('unit-d:types/AbstractClass', () => {
  type T = Vehicle
  type A = [Vehicle['vin'], Vehicle['make'], Vehicle['model'], Vehicle['year']]

  it('should match Omit<AbstractConstructor<T, A>, "prototype">', () => {
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<
      Omit<AbstractConstructor<T, A>, 'prototype'>
    >()
  })

  it('should match [prototype: T]', () => {
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<{ prototype: T }>()
  })
})
