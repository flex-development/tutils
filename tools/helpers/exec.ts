/**
 * @file Helpers - exec
 * @module tools/helpers/exec
 */

import LogLevel from '@flex-development/log/enums/log-level.enum'
import type { ChildProcess } from 'node:child_process'
import sh from 'shelljs'
import logger from './logger'

/**
 * Executes a shell command or logs the command that would be run.
 *
 * @param {string} command - Command
 * @param {boolean} [dryRun=false] - Log command that would be run
 * @param {sh.ExecOptions} [options={silent:true}] - `sh.exec` options
 * @return {string | void} Command output, command, or nothing
 * @throws {Error}
 */
const exec = (
  command: string,
  dryRun: boolean = false,
  options: sh.ExecOptions = {}
): string => {
  options.fatal = false

  // Set default options
  if (options.cwd === undefined) options.cwd = process.cwd()
  if (!options.env) options.env = process.env
  if (options.gid === undefined) options.gid = process.getgid()
  if (!options.shell) options.shell = process.env.SHELL
  if (options.silent === undefined) options.silent = true
  if (options.uid === undefined) options.uid = process.getuid()

  // Format command
  command = command.trim()

  // Init command output
  let stdout: ChildProcess | sh.ShellString | null = null

  // Log command during dry runs, execute command otherwise
  if (dryRun) logger({}, command, [], LogLevel.WARN)
  else stdout = sh.exec(command, options) as sh.ShellString | null

  // Throw error if error executing command
  if (stdout && stdout.code !== 0) {
    const err = new Error((stdout.stderr || stdout.stdout).toString())

    let error: typeof err & {
      code: sh.ShellString['code']
      stderr: Error['message']
    }

    error = err as typeof error
    error.code = stdout.code
    error.stderr = err.message

    throw error
  }

  // Format command output or return original command
  return stdout && stdout.length > 0 ? stdout.toString() : command
}

export default exec
