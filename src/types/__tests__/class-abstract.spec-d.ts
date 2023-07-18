/**
 * @file Type Tests - AbstractClass
 * @module tutils/types/tests/unit-d/AbstractClass
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../class-abstract'

describe('unit-d:types/AbstractClass', () => {
  type T = Vehicle

  it('should match Omit<abstract new (...args: A) => T, "prototype">', () => {
    // Arrange
    type A = [
      Vehicle['vin'],
      Vehicle['make'],
      Vehicle['model'],
      Vehicle['year']
    ]

    // Expect
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<
      Omit<abstract new (...args: A) => T, 'prototype'>
    >()
  })

  it('should match [prototype: T]', () => {
    expectTypeOf<TestSubject<T>>().toMatchTypeOf<{ prototype: T }>()
  })
})
