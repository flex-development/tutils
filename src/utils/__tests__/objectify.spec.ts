/**
 * @file Unit Tests - objectify
 * @module tutils/utils/tests/unit/objectify
 */

import VEHICLES_ARRAY from '#fixtures/vehicles-array'
import VEHICLES_DICTIONARY from '#fixtures/vehicles-dictionary'
import isObjectPlain from '../is-object-plain'
import testSubject from '../objectify'

describe('unit:utils/objectify', () => {
  it('should return arr as plain object', () => {
    // Act
    const result = testSubject(VEHICLES_ARRAY)

    // Expect
    expect(result).to.eql(VEHICLES_DICTIONARY).and.satisfy(isObjectPlain)
  })
})
