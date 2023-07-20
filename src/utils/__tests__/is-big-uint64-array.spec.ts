/**
 * @file Unit Tests - isBigUint64Array
 * @module tutils/utils/tests/unit/isBigUint64Array
 */

import testSubject from '../is-big-uint64-array'

describe('unit:utils/isBigUint64Array', () => {
  it('should return false if value is not BigUint64Array instance', () => {
    expect(testSubject(new BigInt64Array())).to.be.false
  })

  it('should return true if value is BigUint64Array instance', () => {
    expect(testSubject(new BigUint64Array())).to.be.true
  })
})
