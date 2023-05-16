import type { OneOrMany } from '@flex-development/tutils'

declare global {
  interface String {
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
  }
}
