import type {
  CompareResult,
  Entries,
  OneOrMany,
  PropertyKey,
  Reverse,
  Split,
  Timestamp,
  Trim,
  TrimEnd,
  TrimStart,
  Values
} from '@flex-development/tutils'

declare global {
  interface Array<T> {
    /**
     * Reverses an array [in place][1] and returns a reference to the same
     * array.
     *
     * [1]: https://en.wikipedia.org/wiki/In-place_algorithm
     *
     * @return {Reverse<T[]>} Reversed array
     */
    reverse(): Reverse<T[]>
  }

  interface DateConstructor {
    /**
     * Returns the number of milliseconds elapsed since midnight, January 1,
     * 1970 Universal Coordinated Time (UTC).
     *
     * @return {Timestamp<'unix'>} Unix timestamp
     */
    now(): Timestamp<'unix'>
  }

  interface Date {
    /**
     * Returns the stored time value in milliseconds since midnight, January 1,
     * 1970 UTC.
     *
     * @return {Timestamp<'unix'>} Unix timestamp
     */
    getTime(): Timestamp<'unix'>

    /**
     * Returns a date as a string value in ISO format.
     *
     * @return {Timestamp<'iso'>} ISO 8601 timestamp
     */
    toISOString(): Timestamp<'iso'>
  }

  interface ObjectConstructor {
    /**
     * Returns an array containing an object's own enumerable string-keyed
     * property key-value pairs.
     *
     * @template T - Object containing properties and methods
     *
     * @param {T} o - Object containing properties and methods
     * @return {Entries<T>} Enumerable string-keyed property key-value pairs
     */
    entries<T extends object>(o: T): Entries<T>

    /**
     * Returns an array containing an object's own enumerable string-keyed
     * property names.
     *
     * @template K - Key type
     *
     * @param {object} o - Object containing properties and methods
     * @return {Extract<K, string>[]} Enumerable string-keyed property names
     */
    keys<K extends PropertyKey = string>(o: object): Extract<K, string>[]

    /**
     * Returns an array containing an object's own enumerable string-keyed
     * property values.
     *
     * @template T - Object containing properties and methods
     *
     * @param {T} o - Object containing properties and methods
     * @return {Values<T>} Enumerable string-keyed property values
     */
    values<T extends {}>(o: T): Values<T>
  }

  interface String {
    /**
     * Determines whether two strings are equivalent in the current or specified
     * locale.
     *
     * @see {@linkcode Intl.CollatorOptions}
     *
     * @param {string} that - String to compare to target string
     * @param {OneOrMany<string> | undefined} [locales] - A string with a BCP 47
     * language tag, or an array of such strings. If more than one locale string
     * is included, they should be listed in descending order of priority so
     * that the first entry is the preferred locale. If omitted, the default
     * locale of the JavaScript runtime will be used
     * @param {Intl.CollatorOptions | undefined} [options] - Comparison options
     * @return {CompareResult} Comparison result
     */
    localeCompare(
      that: string,
      locales?: OneOrMany<string> | undefined,
      options?: Intl.CollatorOptions | undefined
    ): CompareResult

    /**
     * Split a string into substrings using the specified separator and return
     * them as an array.
     *
     * @template T - String being split
     * @template Delimiter - String delimiter
     *
     * @param {Delimiter} [separator] - String or regular expression identifying
     * the character or characters to use when separating the string. If
     * omitted, a single-element array containing the entire string is returned
     * @param {number | undefined} [limit] - Value used to limit array size
     * @return {Split<T, Delimiter>} Substring array
     */
    split<T extends string, Delimiter extends RegExp | string | undefined>(
      separator?: Delimiter,
      limit?: number
    ): Split<T, Delimiter>

    /**
     * Converts all alphabetic characters to lowercase, taking into account the
     * host environment's current locale.
     *
     * @template T - String being converted
     *
     * @param {OneOrMany<string> | undefined} [locales] - Locales to consider
     * @return {T} Lowercase string
     */
    toLocaleLowerCase<T extends string>(
      locales?: OneOrMany<string> | undefined
    ): Lowercase<T>

    /**
     * Converts all alphabetic characters to uppercase, taking into account the
     * host environment's current locale.
     *
     * @template T - String being converted
     *
     * @param {OneOrMany<string> | undefined} [locales] - Locales to consider
     * @return {T} Lowercase string
     */
    toLocaleUpperCase<T extends string>(
      locales?: OneOrMany<string> | undefined
    ): Uppercase<T>

    /**
     * Converts all the alphabetic characters in a string to lowercase.
     *
     * @template T - String being converted
     *
     * @return {Lowercase<T>} Lowercase string
     */
    toLowerCase<T extends string>(): Lowercase<T>

    /**
     * Converts all the alphabetic characters in a string to uppercase.
     *
     * @template T - String being converted
     *
     * @return {Uppercase<T>} Uppercase string
     */
    toUpperCase<T extends string>(): Uppercase<T>

    /**
     * Removes leading and trailing whitespace characters from a string.
     *
     * @template T - String being trimmed
     *
     * @return {Trim<T>} String with leading and trailing whitespaces removed
     */
    trim<T extends string>(): Trim<T>

    /**
     * Removes trailing whitespace characters from a string.
     *
     * @template T - String being trimmed
     *
     * @return {TrimEnd<T>} String with trailing whitespaces removed
     */
    trimEnd<T extends string>(): TrimEnd<T>

    /**
     * Removes leading whitespace characters from a string.
     *
     * @template T - String being trimmed
     *
     * @return {TrimStart<T>} String with leading whitespaces removed
     */
    trimStart<T extends string>(): TrimStart<T>
  }
}
