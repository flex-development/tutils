/**
 * @file Unit Tests - values
 * @module tutils/utils/tests/unit/values
 */

import VEHICLE from '#fixtures/vehicle'
import testSubject from '../values'

describe('unit:utils/values', () => {
  it('should return array containing enumerable string-keyed values', () => {
    expect(testSubject(VEHICLE)).to.have.members(Object.values(VEHICLE))
  })

  it('should return empty array if obj is null', () => {
    expect(testSubject(null)).to.be.an('array').that.is.empty
  })

  it('should return empty array if obj is undefined', () => {
    expect(testSubject(undefined)).to.be.an('array').that.is.empty
  })
})
