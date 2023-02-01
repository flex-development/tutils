/**
 * @file Type Tests - Constructor
 * @module tutils/types/tests/unit-d/Constructor
 */

import Person from '#fixtures/person'
import type TestSubject from '../constructor'

describe('unit-d:types/Constructor', () => {
  it('should match class declaration', () => {
    assertType<TestSubject<Person, [string, string]>>(Person)
  })
})
