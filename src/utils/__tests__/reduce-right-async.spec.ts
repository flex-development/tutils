/**
 * @file Unit Tests - reduceRightAsync
 * @module tutils/utils/tests/unit/reduceRightAsync
 */

import testSubject from '../reduce-right-async'

describe('unit:utils/reduceRightAsync', () => {
  it('should return accumulated value', async () => {
    expect(await testSubject([1, 2, 3], (acc, n) => acc - n, 3)).to.equal(-3)
  })
})
