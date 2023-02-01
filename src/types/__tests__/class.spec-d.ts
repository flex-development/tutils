/**
 * @file Type Tests - Class
 * @module tutils/types/tests/unit-d/Class
 */

import Person from '#fixtures/person'
import type TestSubject from '../class'

describe('unit-d:types/Class', () => {
  it('should match class declaration', () => {
    assertType<TestSubject<Person, [string, string]>>(Person)
  })
})
