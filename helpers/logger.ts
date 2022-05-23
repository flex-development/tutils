/**
 * @file Helpers - logger
 * @module helpers/logger
 */

import log, { LogLevel, type LogOptions } from '@flex-development/log'

/**
 * Logging options.
 */
interface LoggerOptions {
  /**
   * Log as dry run. `level` will be set to {@link LogLevel.WARN}.
   */
  dryRun?: boolean

  /**
   * Do **not** print the log message.
   */
  silent?: LogOptions['silent']
}

/**
 * Simple logger.
 *
 * @template Options - Options schema
 *
 * @param {Options} options - Log options
 * @param {string} message - Log data
 * @param {any[]} [args=[]] - Log arguments
 * @param {LogOptions['level']} [level=LogLevel.SUCCESS] - Log level
 * @return {ReturnType<typeof log>} Formatted log message
 */
function logger<Options extends LoggerOptions = LoggerOptions>(
  options: Options,
  message: string,
  args: any[] = [],
  level: LogOptions['level'] = LogLevel.SUCCESS
): ReturnType<typeof log> {
  return log(message, {
    args,
    bold: { args: true, data: false },
    level: options.dryRun ? LogLevel.WARN : level,
    silent: options.silent
  })
}

export default logger
