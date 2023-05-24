/**
 * @file Test Fixtures - Author
 * @module tests/fixtures/Author
 */

/**
 * Object representing an author.
 */
interface Author {
  /**
   * Author display name.
   */
  display_name?: string | undefined

  /**
   * Author's public email address.
   */
  email?: Lowercase<string>

  /**
   * Author's first name.
   */
  first_name: string

  /**
   * Author's first name.
   */
  last_name: string
}

export type { Author as default }
