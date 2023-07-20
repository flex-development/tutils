/**
 * @file Unit Tests - entries
 * @module tutils/utils/tests/unit/entries
 */

import VEHICLE from '#fixtures/vehicle'
import testSubject from '../entries'

describe('unit:utils/entries', () => {
  it('should return array containing enumerable string-keyed entries', () => {
    expect(testSubject(VEHICLE)).to.have.deep.members(Object.entries(VEHICLE))
  })

  it('should return empty array if obj is null', () => {
    expect(testSubject(null)).to.be.an('array').that.is.empty
  })

  it('should return empty array if obj is undefined', () => {
    expect(testSubject(undefined)).to.be.an('array').that.is.empty
  })
})
