/**
 * @file Unit Tests - isEmptyString
 * @module tutils/utils/tests/unit/isEmptyString
 */

import testSubject from '../is-empty-string'

describe('unit:utils/isEmptyString', () => {
  it('should return false if value is not empty string', () => {
    expect(testSubject('hello world')).to.be.false
  })

  it('should return true if value is empty string', () => {
    expect(testSubject('')).to.be.true
  })
})
