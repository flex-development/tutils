# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.2.2](https://github.com/flex-development/tutils/compare/tutils@4.2.1...tutils@4.2.2) (2021-10-31)


### :bug: Fixes

* package exports ([e601c92](https://github.com/flex-development/tutils/commit/e601c92fad14681325150d58ef032062d58833ad))


### :pencil2: Housekeeping

* check for duplicate deps when `yarn.lock` changes ([b275a35](https://github.com/flex-development/tutils/commit/b275a35e0b4cb94d8a6d82dca02cf48e31e4f1ce))
* update eslint config to handle dotfiles ([179617e](https://github.com/flex-development/tutils/commit/179617e647e35a8639849c6f913bce0affb17732))

### [4.2.1](https://github.com/flex-development/tutils/compare/tutils@4.2.0...tutils@4.2.1) (2021-10-29)


### :bug: Fixes

* add conditional exports - `./guards`, `./guards/*` ([98a1426](https://github.com/flex-development/tutils/commit/98a1426337c99835425b17ce2ae4239445339fcc))


### :pencil2: Housekeeping

* local integrity check ([ea5451d](https://github.com/flex-development/tutils/commit/ea5451d082107a40b80caf0f9eed9cd77dd652cf))
* **scripts:** add `check:ci` script ([1233da6](https://github.com/flex-development/tutils/commit/1233da620ca6de5c6daac0bfd47c727a889b13c8))
* **tools:** reorganize build workflow ([adf50f6](https://github.com/flex-development/tutils/commit/adf50f64a8d04d8b22ca7fd87adf3b5a098cd3cf))
* **tools:** use explicit environment variables in testing workflow ([c0c9db8](https://github.com/flex-development/tutils/commit/c0c9db8e0343fc997bace0bf05dca4b89b31da65))
* **typescript:** add typings for `@vercel/ncc` ([46065f2](https://github.com/flex-development/tutils/commit/46065f20849d8b20bcba7959b4d16b63af92c8d5))
* **typescript:** add typings for `tsc-prog/dist/utils/log` ([4e8a325](https://github.com/flex-development/tutils/commit/4e8a325124216c2d7afdc574aebcbeeca034bc02))

## [4.2.0](https://github.com/flex-development/tutils/compare/tutils@4.1.1...tutils@4.2.0) (2021-10-22)


### :sparkles: Features

* **types:** `ClassConstructor` ([4799845](https://github.com/flex-development/tutils/commit/4799845a649b5db7f1d3e18a871c4a83b67e5f90))
* **types:** `DocumentDeepPartial`, `DocumentPartial` ([6fb47b7](https://github.com/flex-development/tutils/commit/6fb47b7eb09303ec2a28f0c85d24230856bfbe37))
* **types:** `DUID` ([03513e8](https://github.com/flex-development/tutils/commit/03513e832a459065e706bcb4e9fa68890ffb859f))
* **types:** `EmptyString` ([ccf0af1](https://github.com/flex-development/tutils/commit/ccf0af1ed4e041a68ceb4856f6bdfd8a2911c591))
* **types:** `UID` ([921883e](https://github.com/flex-development/tutils/commit/921883ee1eb0293d85d07462475f52505f80006d))

### [4.1.1](https://github.com/flex-development/tutils/compare/tutils@4.1.0...tutils@4.1.1) (2021-10-16)


### :bug: Fixes

* path remapping in `types` build output ([78d512a](https://github.com/flex-development/tutils/commit/78d512ae00dfc22194ff4e7a2476d5f3a93136a8))

## [4.1.0](https://github.com/flex-development/tutils/compare/tutils@4.0.3...tutils@4.1.0) (2021-10-15)


### :hammer: Build

* **deps-dev:** interactive upgrades ([47e382e](https://github.com/flex-development/tutils/commit/47e382e57a54887b03542f83054d42dbc4ada53d))
* **deps-dev:** remove unused deps ([7604d38](https://github.com/flex-development/tutils/commit/7604d3864d0d3709277b90816aa9c2ff5edaf481))
* use fully specified exports and call expressions in build output ([e0ae635](https://github.com/flex-development/tutils/commit/e0ae6350f1a44ebf7eff6ed094af1fb5c8a7779c))


### :robot: Testing

* add testing framework ([590d697](https://github.com/flex-development/tutils/commit/590d6975886f34f611b7a2f2b37e68845273e54b))


### :sparkles: Features

* **enums:** `NodeEnv` ([445a546](https://github.com/flex-development/tutils/commit/445a546586d3975ad5a8e4950945cc5ac2b6cdc7))
* **guards:** `isNodeEnv` ([7b372de](https://github.com/flex-development/tutils/commit/7b372decc283d868c5e8bec4e2c34e32847a141b))
* **types:** `Intersection` ([d270a78](https://github.com/flex-development/tutils/commit/d270a781f52b57648e3096a3604d0652c2388f8c))
* **types:** `RegexString` ([2c7940f](https://github.com/flex-development/tutils/commit/2c7940f709994622ed958685370c371e13ca2458))
* **types:** `Union` ([59e1584](https://github.com/flex-development/tutils/commit/59e1584e43de2a96852a1c37dd5c9e29f93147a9))


### :pencil2: Housekeeping

* **github:** add `guards` commit scope ([0735655](https://github.com/flex-development/tutils/commit/0735655a755501fc651839fec4a142bc2abb1592))
* **github:** add `scope:guards` label ([bff9176](https://github.com/flex-development/tutils/commit/bff91765ed28e86e3c77963b3d472e9a960966f1))
* **tools:** cleanup project tools ([2186a3d](https://github.com/flex-development/tutils/commit/2186a3d70bc5763fcef42bd116657767e87e87d9))
* **tools:** fix release workflow script ([828edc3](https://github.com/flex-development/tutils/commit/828edc36b5642faa2c6a61d4cf4afc68caeb97a3))

### [4.0.3](https://github.com/flex-development/tutils/compare/tutils@4.0.2...tutils@4.0.3) (2021-10-14)


### :bug: Fixes

* `Could not find a declaration file for module` (actually! 😉) ([5161733](https://github.com/flex-development/tutils/commit/51617335bf7137c429dd3b393f431caaf9fbd479))

### [4.0.2](https://github.com/flex-development/tutils/compare/tutils@4.0.1...tutils@4.0.2) (2021-10-14)


### :bug: Fixes

* `Could not find a declaration file for module` ([e075120](https://github.com/flex-development/tutils/commit/e075120cc54ccbc5a2d60e3b66858d24e2a6519d))


### :hammer: Build

* include source code in sourcemaps ([114b8a1](https://github.com/flex-development/tutils/commit/114b8a17b9e23969de91eb6ed3a1dd52b62daca9))
* **typescript:** create sourcemaps for `.d.ts` files ([9534aba](https://github.com/flex-development/tutils/commit/9534aba64dc81b9a6a0cb48ae1823644bf0fd8c4))


### :pencil2: Housekeeping

* **scripts:** remove `*.tgz` files in `clean:build` script ([e3bd500](https://github.com/flex-development/tutils/commit/e3bd5009b1c7a01adb3e87a7098f243579afc171))
* **typescript:** enable `exactOptionalPropertyTypes` ([bcd8f5e](https://github.com/flex-development/tutils/commit/bcd8f5ed40d645e0a2adf1d98512d7b059d26624))
* **typescript:** upgrade to `typescript@4.5.0-beta` ([f74cf2f](https://github.com/flex-development/tutils/commit/f74cf2f75e53a84e1c0c80f0be08df74eba11f32))


### :truck: Continuous Integration & Deployment

* **workflows:** add `delete-release-branch` job ([4b418f1](https://github.com/flex-development/tutils/commit/4b418f1f1510924bfe378e66a2fc63d998fd7c37))
* **workflows:** push to **protected** branch 'main' ([efd8d22](https://github.com/flex-development/tutils/commit/efd8d22a460550c039ac4cc4432a6e2f65b333ca))
* **workflows:** update `integrity` triggers ([f031e61](https://github.com/flex-development/tutils/commit/f031e61671a4969be3e7504e4ba316b3b31a7cbb))

### [4.0.1](https://github.com/flex-development/tutils/compare/tutils@4.0.0...tutils@4.0.1) (2021-10-13)


### :bug: Fixes

* **cjs:** directory index specifiers ([429f3f8](https://github.com/flex-development/tutils/commit/429f3f8ff8274570b7f516d530d0ebffe4149840))


### :pencil2: Housekeeping

* **esm:** update `@flex-development/tutils` path alias ([1158135](https://github.com/flex-development/tutils/commit/1158135acfdbaacdd552a66f700b2803a25e551b))
* **tools:** add `ts-patch`, drop `ttypescript` ([4d9cb71](https://github.com/flex-development/tutils/commit/4d9cb7125c0a5efe5959d4c8f5d16e493c518072))
* **tools:** add `tsc-prog` to build workflow ([3f3f922](https://github.com/flex-development/tutils/commit/3f3f9221d2f33183d086854144d86dc90707bf0b))
* **tools:** enable type checking during build workflow ([9dc7bf8](https://github.com/flex-development/tutils/commit/9dc7bf876a3c5990d854ec0bf76961cd1de59b94))


### :truck: Continuous Integration & Deployment

* **workflows:** update `continuous-integration` triggers ([96a59fd](https://github.com/flex-development/tutils/commit/96a59fddb6adfc94e54080ec1eb2f388e27e0ea2))
* **workflows:** update `integrity` triggers ([9be038e](https://github.com/flex-development/tutils/commit/9be038e3825b36fa5d04d0e8717464dffecb3b41))

## [4.0.0](https://github.com/flex-development/tutils/compare/tutils@4.0.0-dev.0...tutils@4.0.0) (2021-10-11)


### ⚠ BREAKING CHANGES

* target `node>=14.18.0`

### :hammer: Build

* **deps-dev:** interactive upgrades ([acfd4c3](https://github.com/flex-development/tutils/commit/acfd4c37599521d625c60e67c6d56c538f287531))
* **deps-dev:** use `@flex-development/log@4.0.0-dev.0` ([771547c](https://github.com/flex-development/tutils/commit/771547ca7f253f94878048f0b48ff2c41214c419))
* target `node>=14.18.0` ([ad7bbdb](https://github.com/flex-development/tutils/commit/ad7bbdb506c18ce6f27a73e225e69008023d24b0))
* update package exports and entrypoints ([286d9f3](https://github.com/flex-development/tutils/commit/286d9f36e1e4e07b80e547babdf65262069ef39e))


### :pencil2: Housekeeping

* local integrity check ([087675c](https://github.com/flex-development/tutils/commit/087675cf744ac27b89872a15760a871d13235387))
* **release:** set package version ([9880b9a](https://github.com/flex-development/tutils/commit/9880b9af3b18a230bb67dbb4dd22de30e60d9203))
* **scripts:** update - `clean:build`, `postinstall`, `check:style` ([6e679a2](https://github.com/flex-development/tutils/commit/6e679a277f956da2f689b00d0a80ace9226e67ec))
* **tools:** add `trext` and `@vercel/ncc` to build workflow ([9a7b3bd](https://github.com/flex-development/tutils/commit/9a7b3bd142336446ba2adebe85f55a5daac0d81e))
* **tools:** update `pkg` helper exports ([d7901d4](https://github.com/flex-development/tutils/commit/d7901d42dc4728b2b362f5bd91acf3b95bac69c6))
* **tools:** update prerelease workflow ([47108c1](https://github.com/flex-development/tutils/commit/47108c18e27f7a583a27351c20246c2bf9dc8e7b))

## [4.0.0-dev.0](https://github.com/flex-development/tutils/compare/tutils@3.1.7...tutils@4.0.0-dev.0) (2021-10-05)


### ⚠ BREAKING CHANGES

* use default exports + kebab case filenames
* **hybrid:** esm-cjs hybrid migration (no longer using `.js` extension)
- https://github.com/peterjwest/convert-extension
- https://github.com/gfmio/typescript-esm-cjs-hybrid-example
- https://nodejs.medium.com/announcing-a-new-experimental-modules-1be8d2d6c2ff
- https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html

### :hammer: Build

* **deps-dev:** drop `eslint-plugin-tree-shaking` ([6706515](https://github.com/flex-development/tutils/commit/67065159ffef68e954b5a5b005c5769d0b48ee22))
* **hybrid:** esm-cjs hybrid migration (no longer using `.js` extension) ([37b147d](https://github.com/flex-development/tutils/commit/37b147de15953ac1f6f37bbe6742a1fb49655dd1))


### :nail_care: Formatting & Structure

* use default exports + kebab case filenames ([21c25d9](https://github.com/flex-development/tutils/commit/21c25d99f1b29a464c58416ef51fdc2e9fe8bb27))


### :sparkles: Features

* **types:** `OrDeepPartial` ([cd1b274](https://github.com/flex-development/tutils/commit/cd1b2748074715280dd797c05a58e1b1330934d6))


### :truck: Continuous Integration & Deployment

* **workflows:** fix `./tools/cli/loadenv: No such file or directory` ([6952c62](https://github.com/flex-development/tutils/commit/6952c626578a1b34289677b28c29b7f949a55a00))
* **workflows:** update `strategy.matrix.node` ([b1188b3](https://github.com/flex-development/tutils/commit/b1188b35c532376206631666f11a6c1c9bdbd4e1))


### :pencil2: Housekeeping

* add `enums`, `interfaces`, and `types` commit scopes ([a5c3b9d](https://github.com/flex-development/tutils/commit/a5c3b9de6ff0538d9a7a9b6369a13932f6ab8abd))
* fix repo integrity ([fd99661](https://github.com/flex-development/tutils/commit/fd9966120924549d5b05b633bb79e12314ff88e6))
* **release:** set package version ([3fd1d56](https://github.com/flex-development/tutils/commit/3fd1d56182aa637b96695ad26672fd60010fd498))
* **tools:** update extension conversion logic in `build` workflow ([d12d950](https://github.com/flex-development/tutils/commit/d12d95009c96c32e2281e3f50399c35d464fc086))
* upgrade to `husky@7.0.2` ([e3ad638](https://github.com/flex-development/tutils/commit/e3ad63826b8bc63043d7dff5e3fc410caaae7d7c))

### [3.1.7](https://github.com/flex-development/tutils/compare/v3.1.6...v3.1.7) (2021-09-15)


### :hammer: Build

* **deps-peer:** make `typescript>=2.7` optional ([9bfe059](https://github.com/flex-development/tutils/commit/9bfe059983bc11bdf8e587d7067eec22380fe8b6))

### [3.1.6](https://github.com/flex-development/tutils/compare/v3.1.5...v3.1.6) (2021-09-15)


### :hammer: Build

* **deps-peer:** add `typescript>=2.7` peer dependency ([e4d23dc](https://github.com/flex-development/tutils/commit/e4d23dc6998ea65900effc3d621d49f410a8afb2))

### [3.1.5](https://github.com/flex-development/tutils/compare/v3.1.4...v3.1.5) (2021-09-05)


### :bug: Fixes

* **scripts:** disable `postinstall` before tarball is packed ([a2243b0](https://github.com/flex-development/tutils/commit/a2243b0f61003cc448dedd761c7b23c1782244dc))

### [3.1.4](https://github.com/flex-development/tutils/compare/v3.1.3...v3.1.4) (2021-09-04)


### :bug: Fixes

* **scripts:** allow `postinstall` to fail quietly ([b8236b0](https://github.com/flex-development/tutils/commit/b8236b0254e4de395051db2451e08e74f14b1a12))

### [3.1.3](https://github.com/flex-development/tutils/compare/v3.1.2...v3.1.3) (2021-09-04)


### :bug: Fixes

* **scripts:** use `husky-run init` in `postinstall` script ([812ae42](https://github.com/flex-development/tutils/commit/812ae423e1fa68c82a29fb55de49fcea01e8022c))

### [3.1.2](https://github.com/flex-development/tutils/compare/v3.1.1...v3.1.2) (2021-09-04)


### :bug: Fixes

* **scripts:** only run `postinstall` in dev environments ([3824716](https://github.com/flex-development/tutils/commit/382471649eaf3e5c23048c9a5b812e14126b2f3e))

### [3.1.1](https://github.com/flex-development/tutils/compare/v3.1.0...v3.1.1) (2021-09-04)


### :hammer: Build

* upgrade to `yarn@3.0.1` ([a2e7afb](https://github.com/flex-development/tutils/commit/a2e7afbc48bfea7f95e8c9dc6dbc2d39a094e60e))
* **deps-dev:** add `@flex-development/grease@1.1.0` ([df2ccd8](https://github.com/flex-development/tutils/commit/df2ccd885d5660a96bb11f7480a8597fa84052cb))
* distribute cjs and esm builds ([3a80cd6](https://github.com/flex-development/tutils/commit/3a80cd6b1bf89bcc9eb922d74dc7acf87187802e))
* **deps-dev:** pin `lint-staged` to `11.0.0` ([999d5c7](https://github.com/flex-development/tutils/commit/999d5c702606789cb305831992e3f72c9a586b7f))
* **deps-peer:** allow any version of `typescript` ([c9bf0b5](https://github.com/flex-development/tutils/commit/c9bf0b561a3beac216059f999ef46e23a846abf6))
* **deps-dev:** add `chalk@4.1.2` ([4d022c5](https://github.com/flex-development/tutils/commit/4d022c5323d30322e3e0bef9bb544a903983e75b))
* **deps-dev:** add `release` script dependencies ([8153232](https://github.com/flex-development/tutils/commit/8153232353f550ab47f2ef471bcf4a166239a520))

### :nail_care: Formatting & Structure

* update formatting and linting configs ([165be2e](https://github.com/flex-development/tutils/commit/165be2eb4c29eb2062f2e62ada47afa50e041335))


### :pencil2: Housekeeping

* **deps-dev:** pin commitlint dependencies ([689ba55](https://github.com/flex-development/tutils/commit/689ba5538a34028cf0bd20c3596fbf88337aaa10))
* move pr template to `.github` directory ([05df609](https://github.com/flex-development/tutils/commit/05df609bbe18f261aaa351b68d4690223fb4eb0d))
* move sample `.gitconfig`  to `.github` directory ([8089c7b](https://github.com/flex-development/tutils/commit/8089c7b6db148d0611281abc9b46744c5605e580))
* run `yarn check:install` ([5acfd1f](https://github.com/flex-development/tutils/commit/5acfd1fb85648c735814fd699df81a840dd4a782))
* **scripts:** add `check:format` ([c978202](https://github.com/flex-development/tutils/commit/c97820267ca6624349e9811e219456f0d36dc3ec))
* **scripts:** add `check:install` ([e08214c](https://github.com/flex-development/tutils/commit/e08214c62bc8a4ca3a5a49fe7da7c26eab822378))
* **scripts:** update `release` workflow script ([15f8cfc](https://github.com/flex-development/tutils/commit/15f8cfc9b012a949d7a1afc473aa0cfe80420f7c))
* **scripts:** use `rimraf` in `clean` script ([b03f5e4](https://github.com/flex-development/tutils/commit/b03f5e49a23fbe0292b0e2474f3a1cebf2deb0a0))
* **typescript:** update root tsconfig ([db8b39f](https://github.com/flex-development/tutils/commit/db8b39fcfb73a90e435a98175f1d68fb50532893))
* update commitlint config ([a2880c9](https://github.com/flex-development/tutils/commit/a2880c96452cf5bace1aa91fab943a50b4657ca0))
* update environment variables ([1a9dcba](https://github.com/flex-development/tutils/commit/1a9dcba53ff1e53211fb88c9a149d7321cfe38e3))
* update issue templates ([22d4a40](https://github.com/flex-development/tutils/commit/22d4a40a119bd61b0096637cb948a29631d23dfa))
* update package `keywords` ([f399ffd](https://github.com/flex-development/tutils/commit/f399ffd5627373cf37d0534b689b8b20c349d9b3))


### :truck: Continuous Integration & Deployment

* don't run `postinstall` script in ci environments ([08b2032](https://github.com/flex-development/tutils/commit/08b203298e4d948e3b396d3234c3e3a98e841546))
* **workflows:** add `automate-pr-reviews` ([20ab95d](https://github.com/flex-development/tutils/commit/20ab95d0c97adbe265d55739b61caf566bafb80e))
* **workflows:** add `continuous-deployment` ([40f2e94](https://github.com/flex-development/tutils/commit/40f2e943f995f5f4954c655196460e378e74c066))
* **workflows:** add `continuous-integration` ([30ebf2e](https://github.com/flex-development/tutils/commit/30ebf2e588e9c7b369a4e5431e247872986eb64b))
* **workflows:** add `dependabot-auto` ([32b44a1](https://github.com/flex-development/tutils/commit/32b44a1e71bbb2e8cae11cd2340e300c256f911f))
* **workflows:** add `label-syncer` ([414e4ba](https://github.com/flex-development/tutils/commit/414e4baee305462365c5eac6584d71933635ee79))
* **workflows:** add `lock-inactive-threads` ([e139994](https://github.com/flex-development/tutils/commit/e1399944645c0e2fb82d015116201623ff40a65f))
* **workflows:** add `no-response` ([3268f8d](https://github.com/flex-development/tutils/commit/3268f8dde6dfc033ae2155d3c5f008c204b46c7f))
* **workflows:** add `repo-integrity` ([789c64e](https://github.com/flex-development/tutils/commit/789c64e111ba0ef4e3df690807bc59d5cff78abd))
* **workflows:** add yarn env variables to `check` job ([572de6b](https://github.com/flex-development/tutils/commit/572de6b52547ab288aea7e7eb7b4dfed2d9d110f))

## [3.1.0](https://github.com/flex-development/tutils/compare/v3.0.0...v3.1.0) (2021-05-27)


### :book: Documentation

* **types:** update description for `DeepOmit` and `Path` ([07cb3dc](https://github.com/flex-development/tutils/commit/07cb3dce0f171115d7e213727b23232bbdcccb9e))


### :sparkles: Features

* **types:** `DeepPartialBy` ([fb212da](https://github.com/flex-development/tutils/commit/fb212da7b7cb357061b48081acf7073525446b09))
* **types:** `DeepPartialByRequired` ([8a8b8e4](https://github.com/flex-development/tutils/commit/8a8b8e4d0898929ccc78daa21164a8f6041c5060))

## [3.0.0](https://github.com/flex-development/tutils/compare/v2.0.0...v3.0.0) (2021-05-25)


### ⚠ BREAKING CHANGES

* `EmptyObject`, `EmptyPrimitive` -> `EmptyValue`, `PlainObject` -> `ObjectPlain`, `UnknownObject` -> `ObjectUnknown`

### :recycle: Code Improvements

* project architecture ([6932071](https://github.com/flex-development/tutils/commit/6932071bd2acabd785c8f5af83f4eb7865488101))
* **types:** use `DeepPartial` in `OrPartial` union ([8a3b158](https://github.com/flex-development/tutils/commit/8a3b15874018b6a628f9886dd42841b517f75583))


### :sparkles: Features

* **types:** add `DeepPick` ([7d215e6](https://github.com/flex-development/tutils/commit/7d215e61302eaf778ba1960bb185e0adb80ab386))
* **types:** add `DeepRequired` ([569a954](https://github.com/flex-development/tutils/commit/569a954c8a0dd10bbfbb359da45254e932e35879))
* **types:** add `Join` ([88374fd](https://github.com/flex-development/tutils/commit/88374fd651d73891cde42ada213440bcb9c7a68b))
* **types:** add `Overwrite` ([61ec34f](https://github.com/flex-development/tutils/commit/61ec34fec52630a21563d7439592f4228c67dcbf))
* **types:** add `Split` ([215e603](https://github.com/flex-development/tutils/commit/215e603dffdde9a43a75addd50656934fcf95c3a))

## [2.0.0](https://github.com/flex-development/tutils/compare/v1.0.0...v2.0.0) (2021-05-24)


### ⚠ BREAKING CHANGES

* **types:** rename ObjectPath* types to Path*
* **types:** remove NullishPrimitive

### :bug: Fixes

* **types:** add symbol to IndexSignature union ([8b690b0](https://github.com/flex-development/tutils/commit/8b690b02baf5d636e8e919f4593fd2d987d9b57b))


### :nail_care: Formatting & Structure

* **types:** rename ObjectPath* types to Path* ([74b33ac](https://github.com/flex-development/tutils/commit/74b33ac59cbd7f5552afd10cc457ccedd8c56bb0))


### :sparkles: Features

* **types:** add DeepOmit and DeepPartial ([27c4360](https://github.com/flex-development/tutils/commit/27c43609b4aeb9cd27eadc6c385c969c7b428622))
* **types:** add JSONArray, update JSONObject and JSONValuedefinitions ([a609635](https://github.com/flex-development/tutils/commit/a6096351f494d218950b7c22a3111555366f0c41))
* **types:** differentiate between javascript and json primitives ([56a80b6](https://github.com/flex-development/tutils/commit/56a80b6f51cd670b796e83dd48464dc64610cf9b))


### :pencil2: Housekeeping

* update github release script ([1536c78](https://github.com/flex-development/tutils/commit/1536c78d5dc8c4bc29e25a1870cf511fedc1e03d))

## 1.0.0 (2021-05-21)


### :sparkles: Features

* **types:** add utility types ([f545380](https://github.com/flex-development/tutils/commit/f5453806dd89856d4b9a0c52d2dc62774a892071))


### :pencil2: Housekeeping

* **release:** update release script ([e3c89e9](https://github.com/flex-development/tutils/commit/e3c89e95dbba1ba2f756fa006dfcd9d890665e23))
* repo setup ([66f6777](https://github.com/flex-development/tutils/commit/66f67772298c662924c1261a307b2db65b64cf4e))
