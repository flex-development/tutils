/**
 * @file Type Tests - Class
 * @module tutils/types/tests/unit-d/Class
 */

import type TestSubject from '../class'

describe('unit-d:types/Class', () => {
  class Subscriber {
    constructor(public email: string, public name: string) {}
  }

  it('should match class declaration', () => {
    assertType<TestSubject<Subscriber, [string, string]>>(Subscriber)
  })
})
