/**
 * @file Test Fixtures - Person
 * @module tests/fixtures/interfaces/Person
 */

/**
 * Object representing a person.
 */
interface Person {
  /**
   * Person's age.
   */
  age: number

  /**
   * Person's friends.
   */
  friends?: Person[]

  /**
   * Object representing a person's name.
   */
  name: {
    /**
     * First name.
     */
    first: string

    /**
     * Last name.
     */
    last: string

    /**
     * Middle name.
     */
    middle?: string
  }
}

export type { Person as default }
