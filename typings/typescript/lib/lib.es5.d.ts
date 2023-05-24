import type {
  OneOrMany,
  Split,
  Timestamp,
  Trim,
  TrimEnd,
  TrimStart
} from '@flex-development/tutils'

declare global {
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

  interface String {
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
