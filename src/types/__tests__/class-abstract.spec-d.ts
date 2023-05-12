/**
 * @file Type Tests - AbstractClass
 * @module tutils/types/tests/unit-d/AbstractClass
 */

import type TestSubject from '../class-abstract'

describe('unit-d:types/AbstractClass', () => {
  abstract class Person {
    constructor(public first_name: string, public last_name: string) {}
  }

  it('should match abstract class declaration', () => {
    assertType<TestSubject<Person, [string, string]>>(Person)
  })
})
