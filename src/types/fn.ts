/**
 * @file Type Definitions - Fn
 * @module tutils/types/Fn
 */

/**
 * A function.
 *
 * @template A - Function arguments type
 * @template R - Function return value type
 */
type Fn<A extends readonly unknown[] = any[], R = any> = {
  (...args: A): R

  /**
   * Specifies the default procedure for determining if a constructor function
   * recognizes an object as one of the constructor's instances.
   *
   * It is called by the [`instanceof`][1] operator.
   *
   * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/instanceof
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance
   */
  [Symbol.hasInstance](value: any): boolean

  /**
   * Calls the function, substituting the specified object for the `this` value
   * of the function, and the specified array for the arguments of the function.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
   *
   * @this {Function}
   *
   * @param {any} self - Value of `this`
   * @param {any[]} [args] - Function arguments
   * @return {any} Return value
   */
  apply(this: Function, self: any, args?: any[]): any

  /**
   * Function arguments.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments
   */
  arguments: any

  /**
   * Creates a new function that, when called, has its `this` keyword set to the
   * provided value, with a given sequence of arguments preceding any provided
   * when the new function is called.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
   *
   * @this {Function}
   *
   * @param {any} self - Object `this` refers to inside new function
   * @param {any[]} args - Function arguments
   * @return {any} Return value
   */
  bind(this: Function, self: any, ...args: any[]): any

  /**
   * Calls the function with a given `this` value and arguments provided
   * individually.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/call
   *
   * @this {Function}
   *
   * @param {any} self - Object `this` refers to inside called function
   * @param {any[]} args - Function arguments
   * @return {any} Return value
   */
  call(this: Function, self: any, ...args: any[]): any

  /**
   * Function that invoked the current function.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/caller
   */
  caller: Function

  /**
   * Number of parameters expected by the function.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/length
   */
  readonly length: number

  /**
   * Function name.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/name
   */
  readonly name: string

  /**
   * Prototype used when the function is called with [`new`][1].
   *
   * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/new
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
   */
  prototype: any

  /**
   * Creates a string representation of the function.
   *
   * @return {string} String representation of function
   */
  toString(): string
}

export type { Fn as default }
