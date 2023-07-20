/**
 * @file Unit Tests - isBigInt64Array
 * @module tutils/utils/tests/unit/isBigInt64Array
 */

import testSubject from '../is-big-int64-array'

describe('unit:utils/isBigInt64Array', () => {
  it('should return false if value is not BigInt64Array instance', () => {
    expect(testSubject(new BigUint64Array())).to.be.false
  })

  it('should return true if value is BigInt64Array instance', () => {
    expect(testSubject(new BigInt64Array())).to.be.true
  })
})
