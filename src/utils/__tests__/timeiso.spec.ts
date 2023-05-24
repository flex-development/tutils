/**
 * @file Unit Tests - timeiso
 * @module tutils/utils/tests/unit/timeiso
 */

import testSubject from '../timeiso'

describe('unit:utils/timeiso', () => {
  it('should return date as ISO 8601 timestamp', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [null],
      [undefined],
      [faker.date.anytime()],
      [faker.date.future().getTime()],
      [faker.date.past().toISOString()]
    ]

    // Act + Expect
    cases.forEach(([date]) => expect(testSubject(date)).to.be.a('string'))
  })
})
