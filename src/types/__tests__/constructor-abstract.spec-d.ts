/**
 * @file Type Tests - AbstractConstructor
 * @module tutils/types/tests/unit-d/AbstractConstructor
 */

import type TestSubject from '../constructor-abstract'

describe('unit-d:types/AbstractConstructor', () => {
  abstract class Vehicle {
    constructor(
      public readonly vin: number,
      public readonly make: string,
      public readonly model: string,
      public readonly year: number
    ) {}
  }

  it('should match abstract class declaration', () => {
    assertType<TestSubject<Vehicle, [number, string, string, number]>>(Vehicle)
  })
})
