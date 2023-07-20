/**
 * @file Unit Tests - isPromise
 * @module tutils/utils/tests/unit/isPromise
 */

import testSubject from '../is-promise'
import tryit from '../tryit'

describe('unit:utils/isPromise', () => {
  it('should return false if value is not Promise instance', () => {
    expect(testSubject(faker.string.nanoid())).to.be.false
  })

  it('should return true if value is Promise instance', () => {
    expect(testSubject(tryit(vi.fn(() => faker.string.uuid()))())).to.be.true
  })
})
