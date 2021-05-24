const debug = require('debug')('scripts').extend('js/release-github')
const execa = require('execa')
const { existsSync, readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const { name, version } = require('../../package.json')

/**
 * @file GitHub Release Workflow
 * @module scripts/js/release-github
 * @see https://github.com/conventional-changelog/standard-version/issues/610
 */

/**
 * @property {string} CHANGELOG - Name of GitHub CHANGELOG file
 */
const CHANGELOG = 'CHANGELOG.md'

/**
 * @property {string} RELEASE_NOTES - Name of GitHub release notes file
 */
const RELEASE_NOTES = 'RELEASE_NOTES.md'

/**
 * @property {string} RELEASE_NOTES_PATH Path to GitHub release notes
 */
const RELEASE_NOTES_PATH = resolve(__dirname, '..', '..', RELEASE_NOTES)

/**
 * @property {string} TAG - GitHub release tag
 */
const RELEASE_TAG = `v${version}`

/**
 * @property {string} TARBALL - Name of `.tgz` package file
 */
const TARBALL = `${name.split('@')[1].replace('/', '-')}-${RELEASE_TAG}.tgz`

/**
 * @property {string} ZIP - Name of `.zip` package file
 */
const ZIP = `${TARBALL.replace('.tgz', '.zip')}`

/**
 * @property {execa.SyncOptions<string>} sync - `execa.commandSync` options
 */
const sync = { shell: 'zsh', stdout: process.stdout }

/**
 * Creates or deletes a release tarball and zip file.
 *
 * @param {boolean} remove - If `true`, remove release assets
 * @return {void} Nothing when complete
 */
const releaseAssets = (remove = false) => {
  const ASSETS = { TARBALL, ZIP }

  if (!remove) {
    execa.commandSync(`yarn pack --filename ${ASSETS.TARBALL}`, sync)
    execa.commandSync(`yarn pack --filename ${ASSETS.ZIP}`, sync)
  } else {
    execa.commandSync(`rm ${ASSETS.TARBALL} ${ASSETS.ZIP}`, sync)
    Object.values(ASSETS).forEach(arg => debug(`Removed ${arg}`))
  }

  return
}

/**
 * Deletes or formats the GitHub release notes file.
 *
 * If the notes have been successfully formatted, a GitHub release notes file
 * will be created with the formatted content.
 *
 * @param {boolean} remove - If `true`, remove release notes file
 * @return {string | null} Formatted release notes or null
 */
const releaseNotes = (remove = false) => {
  // Remove existing release notes file if it exists
  if (existsSync(RELEASE_NOTES_PATH)) {
    execa.commandSync(`rm ${RELEASE_NOTES}`, sync)
    if (remove) return null
  }

  // Read CHANGELOG
  let notes = readFileSync(CHANGELOG, 'utf8')

  // Get index of minor / patch headings
  let first_heading_index = notes.indexOf(`### [${version}]`)

  // Check for major headings
  if (first_heading_index === -1) {
    first_heading_index = notes.indexOf(`## [${version}]`)
  }

  // Check if index is equal to -1 (no recent changes)
  if (first_heading_index === -1) {
    debug(`Cannot find [${version}] header in ${CHANGELOG}.`)
    return null
  }

  // Get index of BREAKING CHANGES subheading
  first_heading_index = first_heading_index = notes.indexOf('### ⚠')

  // Check for first subheading with emoji
  if (first_heading_index === -1) first_heading_index = notes.indexOf('### :')

  // Check if index is equal to -1 (no subheading)
  if (first_heading_index === -1) {
    debug(`Cannot find first subheading under ${CHANGELOG} / [${version}].`)
    debug(`${CHANGELOG} [${version}] assumed to be empty.`)
    return null
  }

  // Trim notes
  notes = notes.substring(first_heading_index, notes.length)

  // Get last heading index - start by checking for version 1.0.0 heading
  let last_heading_index = notes.indexOf('## 1.0.0')

  // Check for major headings
  if (last_heading_index === -1) notes.indexOf('## [')

  // Check for minor / patch headings
  if (last_heading_index === -1) last_heading_index = notes.indexOf('### [')

  if (last_heading_index === -1) {
    debug(`Cannot find ending of ${CHANGELOG} / [${version}].`)
    return null
  }

  // Trim notes again and change heading sizes
  notes = notes.substring(0, last_heading_index).replaceAll('###', '##')

  // Create release notes file
  debug('Writing release notes...')
  writeFileSync(RELEASE_NOTES_PATH, notes)

  debug('Finished release notes')

  return notes
}

/**
 * Creates a GitHub release.
 *
 * @return {void} Nothing when complete
 */
const githubRelease = () => {
  // Workflow constants
  const CLEANUP = true
  const GENERATE = false
  const V1 = version === '1.0.0'
  const PACKAGE = `${name}@${version}`
  const RELEASE = `gh release create ${RELEASE_TAG} ./${TARBALL} ./${ZIP}`
  const OPTIONS = `-t ${RELEASE_TAG} ${V1 ? '' : `-d -F ${RELEASE_NOTES}`}`

  // Store release notes
  let notes = null

  // Generate release assets and notes
  debug(`Starting release workflow for ${PACKAGE}`)
  releaseAssets(GENERATE)
  if (!V1) notes = releaseNotes(GENERATE)

  // Check if release notes were generated
  if (!V1 && !notes) return debug('Error generating release notes.')

  // Execute GitHub release
  execa.commandSync(`${RELEASE} ${OPTIONS}`, sync)

  // Cleanup after workflow completion
  debug('Cleaning up release workflow...')
  releaseAssets(CLEANUP)
  if (!V1) releaseNotes(CLEANUP)

  return
}

githubRelease()
