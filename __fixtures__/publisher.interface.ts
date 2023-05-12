/**
 * @file Test Fixtures - Publisher
 * @module tests/fixtures/Publisher
 */

/**
 * Object representing a book publisher.
 */
interface Publisher {
  /**
   * Email address of publisher's support team.
   */
  email: Lowercase<string>

  /**
   * Publisher name.
   */
  name: string
}

export type { Publisher as default }
