/**
 * @file Interfaces - PropertyDescriptor
 * @module tutils/interfaces/PropertyDescriptor
 */

/**
 * Property description object.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
 *
 * @template T - Property value type
 */
interface PropertyDescriptor<T = any> {
  /**
   * Allow descriptor to fluctuate between an accessor and data descriptor.
   *
   * When `false`:
   *
   * - Property type cannot be changed between `accessor` and `data`
   * - Property cannot be deleted
   * - Other descriptor attributes cannot be changed (if the descriptor is a
   *   {@linkcode writable} `data` descriptor the value *can* be changed,
   *   however)
   */
  configurable?: boolean

  /**
   * Display property when enumerating over properties of the corresponding
   * object.
   */
  enumerable?: boolean

  /**
   * Function which serves as a getter for the property, or `undefined` if there
   * is no getter.
   *
   * When the property is accessed, `get` is called without arguments, with
   * `this` set to the object from which the property is accessed (this may not
   * be the object on which the property is defined due to inheritance). The
   * return value will be used as the value of the property.
   *
   * @return {T} Property value
   */
  get?(): T

  /**
   * Function which serves as a setter for the property, or `undefined` if there
   * is no setter.
   *
   * When the property is assigned, `set` is called with one argument (the value
   * being assigned to the property) and with `this` set to the object through
   * which the property is assigned.
   *
   * @param {T} value - Value being assigned to property
   * @return {void} Nothing when complete
   */
  set?(value: T): void

  /**
   * Value associated with the property.
   *
   * May be any valid JavaScript value (number, object, function, etc.).
   */
  value?: T

  /**
   * Allow property modifications with an [assignment operator][1].
   *
   * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#assignment_operators
   */
  writable?: boolean
}

export type { PropertyDescriptor as default }
