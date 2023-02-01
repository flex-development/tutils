/**
 * @file Fixtures - Person
 * @module fixtures/Person
 */

/**
 * Data model representing a person.
 *
 * @class
 */
class Person {
  /**
   * @public
   * @instance
   * @member {string} first_name - First name
   */
  public first_name: string

  /**
   * @public
   * @instance
   * @member {string} last_name - Last name
   */
  public last_name: string

  /**
   * Creates a new person.
   *
   * @param {string} first_name - First name
   * @param {string} last_name - Last name
   */
  constructor(first_name: string, last_name: string) {
    this.first_name = first_name
    this.last_name = last_name
  }
}

export default Person
