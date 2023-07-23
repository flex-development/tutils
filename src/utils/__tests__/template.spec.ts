/**
 * @file Unit Tests - template
 * @module tutils/utils/tests/unit/template
 */

import escape from '../escape'
import testSubject from '../template'

describe('unit:utils/template', () => {
  let mobile: string

  beforeAll(() => {
    mobile = faker.phone.number()
  })

  it('should return string with placeholders replaced', () => {
    // Arrange
    const name: string = faker.person.firstName()
    const phone: { mobile: string } = { mobile }

    // Act
    const result = testSubject("{name}'s mobile number is {phone.mobile}", {
      name,
      phone
    })

    // Expect
    expect(result).to.equal(`${name}'s mobile number is ${phone.mobile}`)
  })

  describe('{{', () => {
    it('should return string with encoded HTML entities', () => {
      // Arrange
      const phone: { mobile: string } = { mobile: `<code>${mobile}</code>` }

      // Act
      const result = testSubject('Mobile: {{phone.mobile}}', { phone })

      // Expect
      expect(result).to.equal(`Mobile: ${escape(phone.mobile)}`)
    })
  })
})
