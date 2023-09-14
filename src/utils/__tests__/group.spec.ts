/**
 * @file Unit Tests - group
 * @module tutils/utils/tests/unit/group
 */

import testSubject from '../group'

describe('unit:utils/group', () => {
  it('should return groups object', () => {
    expect(testSubject([3.1, 4.2, 3.3], Math.floor)).to.eql({
      3: [3.1, 3.3],
      4: [4.2]
    })
  })
})
