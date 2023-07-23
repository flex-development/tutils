/**
 * @file Utilities - template
 * @module tutils/utils/template
 */

import type { Joinable, TemplateData } from '#src/types'
import cast from './cast'
import escape from './escape'
import get from './get'

/**
 * Micro templating function.
 *
 * Single braces (`{`) are used to identify placeholders. Double braces (`{{`)
 * can be used to encode HTML entities and avoid code injection.
 *
 * Nested placeholders (i.e. `'{phone.{type}}'`) are not supported.
 *
 * @see {@linkcode TemplateData}
 *
 * @todo examples
 *
 * @param {string} template - String containing placeholders
 * @param {TemplateData} data - Template data
 * @return {string} Template with placeholders replaced
 */
const template = (template: string, data: TemplateData): string => {
  return template.replace(
    /({?{)(\d+|[$_a-z][\w$-]*?(?:\.[\w$-]*?)*?)}}?/gi,
    /**
     * Replaces a placeholder with a template {@linkcode data} value.
     *
     * Supports dot notation.
     *
     * @param {string} placeholder - Placeholder match
     * @param {string} opener - Opening brace(s)
     * @param {string} key - Template data key
     * @return {string} Template data value
     */
    (placeholder: string, opener: string, key: string): string => {
      /**
       * Template data value for {@linkcode key}.
       *
       * @const {string} value
       */
      const value: string = `${cast<Joinable>(get(data, key))}`

      return opener.length === 1 ? value : escape(value)
    }
  )
}

export { template as default }
