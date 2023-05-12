/**
 * @file Type Tests - Constructor
 * @module tutils/types/tests/unit-d/Constructor
 */

import type TestSubject from '../constructor'

describe('unit-d:types/Constructor', () => {
  class Dog {
    constructor(public name: string) {}
  }

  it('should match class declaration', () => {
    assertType<TestSubject<Dog, [string, string]>>(Dog)
  })
})
