## [tutils@6.0.0-alpha.2](https://github.com/flex-development/tutils/compare/tutils@6.0.0-alpha.1...tutils@6.0.0-alpha.2) (2022-11-27)


### :robot: Continuous Integration

* **workflows:** add node.js matrix to `ci` workflow ([017aa94](https://github.com/flex-development/tutils/commit/017aa94329652b09b8ebf30fc0d4f4d02820f4a9))
* **workflows:** archive code coverage and production artifacts ([953b2b6](https://github.com/flex-development/tutils/commit/953b2b61fb8f10a47ca61a2edc4bb6139952fb4f))
* **workflows:** use environment files ([f3847fa](https://github.com/flex-development/tutils/commit/f3847fa73a12c33f44a26b871a4706f1cc13bb8a))


### :sparkles: Features

* **interfaces:** `MapLike` ([45d6242](https://github.com/flex-development/tutils/commit/45d6242bbc4f3acbc08c20967091f8b6d69afd59))

## [tutils@6.0.0-alpha.1](https://github.com/flex-development/tutils/compare/tutils@5.0.1...tutils@6.0.0-alpha.1) (2022-11-23)


### ⚠ BREAKING CHANGES

* **exports:** export `.` and `./package.json` only
* **types:** remove `NumberString`
* **types:** remove `OmitByType`
* **types:** remove `RegexString`
* **types:** remove `DeepPick`
* **types:** remove `DeepPartial`
* **types:** remove `Or*`
* **types:** remove `Nullish*`
* **types:** `OrNil` -> `Nilable`
* **types:** remove `Union`
* **types:** remove `UID`
* **types:** remove `OrDeepPartial`
* **types:** remove `PickByType`
* **types:** remove `Intersection`
* **types:** remove `DUID`
* **types:** remove `DocumentPartial`
* **types:** remove `DeepOmit`
* **types:** remove `DeepRequired`
* **types:** `OrPromise` -> `Promisable`
* **types:** `ClassConstructor` -> `Constructor`

### :package: Build

* require node `>=14.16` ([f4a01a4](https://github.com/flex-development/tutils/commit/f4a01a426c0047830ed3ff46418f37a37ae7a5db))
* **deps-peer:** add `typescript>=4.7` (optional) ([aa6c1d5](https://github.com/flex-development/tutils/commit/aa6c1d5885a00ac09f5e6ba29afaab8faa0efcba))
* **exports:** export `.` and `./package.json` only ([cf1edd4](https://github.com/flex-development/tutils/commit/cf1edd4731bca78d2bd694c89b6f0e7e51102c5e))


### :robot: Continuous Integration

* **deps:** Bump actions/add-to-project from 0.3.0 to 0.4.0 ([#85](https://github.com/flex-development/tutils/issues/85)) ([da49a5f](https://github.com/flex-development/tutils/commit/da49a5f9ccf3aebc8e85450c4cf0c8a832e0b29b))
* **deps:** bump actions/checkout from 3.0.2 to 3.1.0 ([#77](https://github.com/flex-development/tutils/issues/77)) ([3a5b4a6](https://github.com/flex-development/tutils/commit/3a5b4a6b97a2464df8e8bc79006071065f9e084b))
* **deps:** bump actions/github-script from 6.1.1 to 6.3.1 ([#75](https://github.com/flex-development/tutils/issues/75)) ([be9055d](https://github.com/flex-development/tutils/commit/be9055dfe8f857ee31ab86d568d40f1c30b9e197))
* **deps:** bump actions/github-script from 6.3.1 to 6.3.2 ([#79](https://github.com/flex-development/tutils/issues/79)) ([73bba8a](https://github.com/flex-development/tutils/commit/73bba8a2fd7adf5dab263f665803730c7f07d684))
* **deps:** bump actions/github-script from 6.3.2 to 6.3.3 ([#81](https://github.com/flex-development/tutils/issues/81)) ([9bbbafd](https://github.com/flex-development/tutils/commit/9bbbafd1e9711ee134ec1a1990a5e8818cfeddca))
* **deps:** bump actions/setup-node from 3.4.1 to 3.5.0 ([#72](https://github.com/flex-development/tutils/issues/72)) ([19c2491](https://github.com/flex-development/tutils/commit/19c249103f4e7e6e562c15b13134062e5935568d))
* **deps:** Bump crazy-max/ghaction-import-gpg from 5.1.0 to 5.2.0 ([#83](https://github.com/flex-development/tutils/issues/83)) ([7a3acec](https://github.com/flex-development/tutils/commit/7a3acec213fba2b6fb6c2f0666d83fa79e80d918))
* **deps:** bump dependabot/fetch-metadata from 1.3.3 to 1.3.4 ([#76](https://github.com/flex-development/tutils/issues/76)) ([87c92b9](https://github.com/flex-development/tutils/commit/87c92b93171f6e839beb2a8bdf257674471295e8))
* **deps:** Bump dependabot/fetch-metadata from 1.3.4 to 1.3.5 ([#84](https://github.com/flex-development/tutils/issues/84)) ([6eb6090](https://github.com/flex-development/tutils/commit/6eb609027f1173bd74b35de3b02ebff2a2a8fffb))
* **deps:** bump flex-development/dist-tag-action from 1.1.0 to 1.1.1 ([#73](https://github.com/flex-development/tutils/issues/73)) ([c821b01](https://github.com/flex-development/tutils/commit/c821b014519724bb86320d28c74cf7cc06e54b92))
* **deps:** bump hmarr/debug-action from 2.0.1 to 2.1.0 ([#78](https://github.com/flex-development/tutils/issues/78)) ([35b6396](https://github.com/flex-development/tutils/commit/35b639648ed7832920901990302cdad132c23764))


### :sparkles: Features

* **types:** `Class` ([3dd5638](https://github.com/flex-development/tutils/commit/3dd5638ef89f7c2b7c904fe2e1cc74c71044884b))
* **types:** `LiteralUnion` ([fc987d3](https://github.com/flex-development/tutils/commit/fc987d34aacb47ac93ddee23a140bdc7a20b8856))
* **types:** `Opaque` ([5a6fe9b](https://github.com/flex-development/tutils/commit/5a6fe9b563ef0bca722babe94ee7d7c888d8fd80))
* **types:** `Predicate` ([ed21f07](https://github.com/flex-development/tutils/commit/ed21f07166df17381393847933becc89fb25e576))
* **types:** `SemanticVersion` ([c3212d9](https://github.com/flex-development/tutils/commit/c3212d987b0fb00eb97999ee3efda5fb19f77f19))
* **types:** `Simplify` ([29d5151](https://github.com/flex-development/tutils/commit/29d51519d69948d61e2d92a6ddf13b1f99e1031a))


### :bug: Fixes

* **cjs:** missing `default` exports ([4d2d9fc](https://github.com/flex-development/tutils/commit/4d2d9fcae7818217e55fc4ab04781dc81ba87534))


### :house_with_garden: Housekeeping

* cleanup eslint overrides ([10d28ee](https://github.com/flex-development/tutils/commit/10d28eeef001afc78ffc33c363adff24ad5a11d4))
* ensure all eslint overrides are in config file ([e19f58a](https://github.com/flex-development/tutils/commit/e19f58a9856a030c81b667043dbca765a74e7a15))
* update project architecture ([c2b2c41](https://github.com/flex-development/tutils/commit/c2b2c41a7c4fa80e61a130a1d72e8dc01ed4e7d4))


### :zap: Refactors

* **types:** `KeysOptional` logic ([4ccae04](https://github.com/flex-development/tutils/commit/4ccae046cd08577bc3c67c8c1536f8f09a3abb46))
* **types:** `KeysRequired` logic ([23aab45](https://github.com/flex-development/tutils/commit/23aab452896b531ee257017a1d6555ae9c82d3f1))
* **types:** `ClassConstructor` -> `Constructor` ([f6d8af2](https://github.com/flex-development/tutils/commit/f6d8af25983c23a2e55337b8cff4470e9ee05b98))
* **types:** `OrNil` -> `Nilable` ([b0c17d7](https://github.com/flex-development/tutils/commit/b0c17d7dc0679f4bfbff554b86b48aff2ec30b08))
* **types:** `OrPromise` -> `Promisable` ([a6f25d1](https://github.com/flex-development/tutils/commit/a6f25d19f1dc58414365b27f0dbaa66514f03712))
* **types:** remove `DeepOmit` ([9617b62](https://github.com/flex-development/tutils/commit/9617b6299455f16252918d9aa7409a91824c7c2b))
* **types:** remove `DeepPartial` ([d632b7a](https://github.com/flex-development/tutils/commit/d632b7a16011cbdfebe055b51eefaa0749424080))
* **types:** remove `DeepPick` ([7275cb6](https://github.com/flex-development/tutils/commit/7275cb65cefc0de95cb488a3fdf60079b7f1444e))
* **types:** remove `DeepRequired` ([656f937](https://github.com/flex-development/tutils/commit/656f937d856d640eff7952fb80dea2caec580355))
* **types:** remove `DocumentPartial` ([1fd729d](https://github.com/flex-development/tutils/commit/1fd729d94d5f6a21140a3bf9d9d0cbc1c83920f4))
* **types:** remove `DUID` ([61c1550](https://github.com/flex-development/tutils/commit/61c1550ff183d5823764497342ee65a669f78e73))
* **types:** remove `Intersection` ([bc53cee](https://github.com/flex-development/tutils/commit/bc53cee635cce0cd4e1496e152041453e04a35d7))
* **types:** remove `Nullish*` ([f082c18](https://github.com/flex-development/tutils/commit/f082c18072e3432319d737e05ccdf191bc7326dd))
* **types:** remove `NumberString` ([ffbc26f](https://github.com/flex-development/tutils/commit/ffbc26f2f70e7b973ed884fbdc6097d1c399e602))
* **types:** remove `OmitByType` ([5f45c71](https://github.com/flex-development/tutils/commit/5f45c712051e3ee7c7d021875692900933bb362f))
* **types:** remove `Or*` ([3312dc0](https://github.com/flex-development/tutils/commit/3312dc041757577fd2607d7b58557280ae576207))
* **types:** remove `OrDeepPartial` ([854e34c](https://github.com/flex-development/tutils/commit/854e34c2771ab8a2f976984f2aacfa00d696a963))
* **types:** remove `PickByType` ([fc12dfd](https://github.com/flex-development/tutils/commit/fc12dfda5c1e56c3788d51a76dbb1c8c04cdb95e))
* **types:** remove `RegexString` ([84236c8](https://github.com/flex-development/tutils/commit/84236c8d897b004b1a766ca730e0ded47e00e4fc))
* **types:** remove `UID` ([96a2268](https://github.com/flex-development/tutils/commit/96a22682242c3536a67ebb4575c0cfeb62d18fc9))
* **types:** remove `Union` ([da728ea](https://github.com/flex-development/tutils/commit/da728eaaa218ebf49a022fcbc08df0e7b20c3cf6))

## [tutils@5.0.1](https://github.com/flex-development/tutils/compare/tutils@5.0.0...tutils@5.0.1) (2022-09-30)


### :package: Build

* require at least node.js 14 ([572ca73](https://github.com/flex-development/tutils/commit/572ca7302ae528c822964d1be44dad772273d8b1))
* set `typesVersions` ([20cfa15](https://github.com/flex-development/tutils/commit/20cfa15b15f9b45374a63882030d0f01498bb155))
* use `mkbuild` to build project ([94e3cc1](https://github.com/flex-development/tutils/commit/94e3cc154428e18b3d4da83aa2e729e26f51b52b))
* **deps-dev:** bump @types/eslint from 8.4.5 to 8.4.6 ([#56](https://github.com/flex-development/tutils/issues/56)) ([0bd61c6](https://github.com/flex-development/tutils/commit/0bd61c64e8d90a2252879fd37cc0be82de5a79b3))
* **deps-dev:** bump @typescript-eslint/eslint-plugin from 5.33.1 to 5.34.0 ([#64](https://github.com/flex-development/tutils/issues/64)) ([3f91307](https://github.com/flex-development/tutils/commit/3f913073edc2dcf4f484365a0345f1e48882e78d))
* **deps-dev:** bump @typescript-eslint/eslint-plugin from 5.34.0 to 5.35.1 ([#67](https://github.com/flex-development/tutils/issues/67)) ([03cf64d](https://github.com/flex-development/tutils/commit/03cf64d8707ed9d793f770e8fc01d087e3309c7f))
* **deps-dev:** bump @typescript-eslint/parser from 5.33.1 to 5.34.0 ([#65](https://github.com/flex-development/tutils/issues/65)) ([11cb8b9](https://github.com/flex-development/tutils/commit/11cb8b9efda8f211f8fbb6f54e54e0950cdf89b3))
* **deps-dev:** bump @typescript-eslint/parser from 5.34.0 to 5.35.1 ([#66](https://github.com/flex-development/tutils/issues/66)) ([dfc4796](https://github.com/flex-development/tutils/commit/dfc479649ca926c30387367605aec2a6ba23470d))
* **deps-dev:** bump @vitest/coverage-c8 from 0.22.0 to 0.22.1 ([#62](https://github.com/flex-development/tutils/issues/62)) ([3f2eb47](https://github.com/flex-development/tutils/commit/3f2eb473fa0e2efd9c62a8b6c2efd915b90d3fe0))
* **deps-dev:** bump @vitest/ui from 0.22.0 to 0.22.1 ([#60](https://github.com/flex-development/tutils/issues/60)) ([91363f6](https://github.com/flex-development/tutils/commit/91363f6e88e2911953d2560cc02408c49eebdbc2))
* **deps-dev:** bump cspell from 6.6.1 to 6.7.0 ([#58](https://github.com/flex-development/tutils/issues/58)) ([8bb6770](https://github.com/flex-development/tutils/commit/8bb67700a3fc2e1a3c0eb810fd0fd65d26b9a8d2))
* **deps-dev:** bump cspell from 6.7.0 to 6.8.0 ([#63](https://github.com/flex-development/tutils/issues/63)) ([a500255](https://github.com/flex-development/tutils/commit/a5002552e279beafa57e29af753e58d6b298e352))
* **deps-dev:** bump eslint-plugin-jsonc from 2.3.1 to 2.4.0 ([1e45ef3](https://github.com/flex-development/tutils/commit/1e45ef33bbb9d7c46411ab4fe9a412172525ddbe))
* **deps-dev:** bump eslint-plugin-promise from 6.0.0 to 6.0.1 ([#69](https://github.com/flex-development/tutils/issues/69)) ([5ec7516](https://github.com/flex-development/tutils/commit/5ec751632a2bdc7d10b38b95a1530e07a9dc63d6))
* **deps-dev:** bump eslint-plugin-react from 7.30.1 to 7.31.0 ([#68](https://github.com/flex-development/tutils/issues/68)) ([5bde4b7](https://github.com/flex-development/tutils/commit/5bde4b7c276dafc5285864a3401b7448bf5e0002))
* **deps-dev:** bump pretty-format from 28.1.3 to 29.0.0 ([efc38f9](https://github.com/flex-development/tutils/commit/efc38f97116398686654087c6ccf0f2bd9bb45f6))
* **deps-dev:** bump unbuild from 0.8.8 to 0.8.9 ([#61](https://github.com/flex-development/tutils/issues/61)) ([4add30f](https://github.com/flex-development/tutils/commit/4add30f6a2a449cee762c2049ca369363c7663d7))
* **deps-dev:** bump vitest from 0.22.0 to 0.22.1 ([#59](https://github.com/flex-development/tutils/issues/59)) ([0de2679](https://github.com/flex-development/tutils/commit/0de267942eccd09b68ea72413c1ff555b188e045))
* **exports:** remove extraneous conditional `types` exports ([13b7990](https://github.com/flex-development/tutils/commit/13b7990b9b5f1b45a630b248444fc96d7f13c1d3))
* **pkg:** set type to `module` ([59fcf62](https://github.com/flex-development/tutils/commit/59fcf62c5e02c8b90e12388d3af919493f33710e))


### :robot: Continuous Integration

* let [@dependabot](https://github.com/dependabot) check for new versions at random times ([7e4b90e](https://github.com/flex-development/tutils/commit/7e4b90e0679ec201e62d55b464978d8009843a5b))
* refactor [@dependabot](https://github.com/dependabot) workflow ([df65f3f](https://github.com/flex-development/tutils/commit/df65f3fa1152fcf728fca9fa3221d98293405d1a))
* **deps:** bump flex-development/dist-tag-action from 1.0.0 to 1.1.0 ([#55](https://github.com/flex-development/tutils/issues/55)) ([678c3d0](https://github.com/flex-development/tutils/commit/678c3d048e7ca0fbc267d08702f93f734442e4fc))
* **workflows:** `add-to-project` ([20ee547](https://github.com/flex-development/tutils/commit/20ee5479a6acf87bd44de40fe43b5a51d198255c))
* **workflows:** `dependabot-auto-fix` ([70d519a](https://github.com/flex-development/tutils/commit/70d519afb5bd575282524da664ecad03f096c47f))
* **workflows:** add debug step to ci workflow ([f2f1d17](https://github.com/flex-development/tutils/commit/f2f1d173d91541d494ee28829375f4c6a2bb7e02))
* **workflows:** add gh pat for [@dependabot](https://github.com/dependabot) ([d1ccb27](https://github.com/flex-development/tutils/commit/d1ccb270ea25a8b26d57ed8eaabff9dc69529618))
* **workflows:** add test coverage output to ci workflow ([8cfe138](https://github.com/flex-development/tutils/commit/8cfe13836b494a6be840bb869cb5389c75c35236))
* **workflows:** add test coverage output to ci workflow ([4d7d787](https://github.com/flex-development/tutils/commit/4d7d78736eb4ff3945e7ef5854c3e222c584d22f))
* **workflows:** cleanup ci workflow ([712557c](https://github.com/flex-development/tutils/commit/712557c6a7f8c79b1c18173241ba79b2fe73011a))
* **workflows:** cleanup workflow environments and options ([39246d3](https://github.com/flex-development/tutils/commit/39246d3b7b152882c85a85d3c995d257c750adee))
* **workflows:** fix [@dependabot](https://github.com/dependabot) package ecosystem conditionals ([070cba5](https://github.com/flex-development/tutils/commit/070cba5fc19096f095396dbd4e03329628847f7f))
* **workflows:** refactor `integrity` ([2eb58c0](https://github.com/flex-development/tutils/commit/2eb58c06f3137292fa7262b65b615cc52e069d8b))
* **workflows:** remove `query-linked-issues` ([eacd6f9](https://github.com/flex-development/tutils/commit/eacd6f9a37cb66af251228e937278d67ac63efb1))
* **workflows:** run ci workflow on push to feature and hotfix branches ([c23029a](https://github.com/flex-development/tutils/commit/c23029ae6be2fb00292d8d9bc4f06fd333186724))
* **workflows:** sign [@dependabot](https://github.com/dependabot) lockfile fix commits ([e16048a](https://github.com/flex-development/tutils/commit/e16048a1a67abb2b5d6f5f632a7845e2120c5cbe))
* **workflows:** skip `integrity` for [@dependabot](https://github.com/dependabot) ([5b2aba2](https://github.com/flex-development/tutils/commit/5b2aba2fbd70d068fe84b425826766d7993e19d8))
* **workflows:** skip ci workflow when [@dependabot](https://github.com/dependabot) pushes to `main` ([1a646fb](https://github.com/flex-development/tutils/commit/1a646fbf78b6191d461e534b387445f826c87a54))
* **workflows:** sync workflow and job names ([b52337a](https://github.com/flex-development/tutils/commit/b52337a8442d476ace665d5606a3bf0e07533d69))
* **workflows:** try using `secrets.PAT_ADMIN` to trigger pr synchronize event for [@dependabot](https://github.com/dependabot) ([05d88e5](https://github.com/flex-development/tutils/commit/05d88e5c5313b99623d3aca0e10f50047083d1b9))
* **workflows:** update prerelease check ([178a617](https://github.com/flex-development/tutils/commit/178a6176d2094b44e3ec602f85e9e97661fd42ea))
* **workflows:** use `secrets.PAT_BOT` ([071ef4d](https://github.com/flex-development/tutils/commit/071ef4dab79be1c67dc0b704a4a7890e84395f24))


### :pencil: Documentation

* zsh ([1fe945f](https://github.com/flex-development/tutils/commit/1fe945f7bdeeaca807027ad798433c6bdc46fc2f))
* **github:** update commit scope descriptions ([a85a7d8](https://github.com/flex-development/tutils/commit/a85a7d830b6d051ec9a1924c64f17d3ae173cdbd))


### :house_with_garden: Housekeeping

* cleanup ([4064cb7](https://github.com/flex-development/tutils/commit/4064cb7d1d636dbd945b358aacc09b7bbdd086a0))
* cleanup cspell dictionary ([0a9659f](https://github.com/flex-development/tutils/commit/0a9659ff4e7ef07d9e6de95c12473faa37ec30fc))
* cleanup eslint config ([3821ca4](https://github.com/flex-development/tutils/commit/3821ca4f5c4163f3170d39cef0df37102e7cdec0))
* eslint x graphql support ([eb52b2e](https://github.com/flex-development/tutils/commit/eb52b2ee4a022fa5be87b96faddcc44a2fe7c49c))
* fix private registry login for [@dependabot](https://github.com/dependabot) ([378917c](https://github.com/flex-development/tutils/commit/378917c9bb7f226ce1dd24259c7b2b1f5c30bd45))
* only run checks in lint-staged config ([172d10c](https://github.com/flex-development/tutils/commit/172d10c6ca63879baf86bf7a48307b3f98f3a619))
* only run checks in lint-staged config ([ae7f0db](https://github.com/flex-development/tutils/commit/ae7f0dbb73e455462cc6b85c1cef4757c6f8d40a))
* remove duplicate `**/.npmignore` entry from `.prettierignore` ([9210257](https://github.com/flex-development/tutils/commit/9210257691971586e729aa0783ba99fd18f0a92f))
* set specific time for version checks by [@dependabot](https://github.com/dependabot) ([cf428a8](https://github.com/flex-development/tutils/commit/cf428a820dd50700c5a8584f1fda6f02a62fe2db))
* update jsx check in eslint config ([f366f2f](https://github.com/flex-development/tutils/commit/f366f2f334ab84ca7412ff878b87cba377abf5fd))
* update sample gitconfig ([246a401](https://github.com/flex-development/tutils/commit/246a401cdcd20b34de19544f074649dace058bd1))
* **github:** add label `scope:tests` ([35909a1](https://github.com/flex-development/tutils/commit/35909a138f222d7457cadb56932680ce5923b9b0))
* **github:** configure issue template chooser ([f9746d2](https://github.com/flex-development/tutils/commit/f9746d2941641c3c4045164c1ed20d7f18ddab90))
* **github:** convert issue templates to issue forms ([a741573](https://github.com/flex-development/tutils/commit/a7415736adb05f474008c4677148809782f3970e))
* **github:** remove `type:discussion` label ([3aa5bc3](https://github.com/flex-development/tutils/commit/3aa5bc330ac894d7290fb408738a993b66730417))
* **github:** rename label `scope:deps` to `scope:dependencies` ([198561e](https://github.com/flex-development/tutils/commit/198561ec3048d1eeeb08c341a9b281efb8f3e486))
* **github:** rename label `scope:typescript` to `scope:ts` ([f9b6530](https://github.com/flex-development/tutils/commit/f9b6530641a58d6c3f594f22e8619d7bebbcf912))
* **github:** update label descriptions ([74ba0e8](https://github.com/flex-development/tutils/commit/74ba0e81b1f92bb09b793bf36207885076dd8a8d))
* **github:** update pull request template ([bebd4e2](https://github.com/flex-development/tutils/commit/bebd4e29fe55547a116237dfc289f5996f993462))
* **release:** read tag prefix from `package.json` ([6b08e88](https://github.com/flex-development/tutils/commit/6b08e882434485d9378ae624db30560a6f0d3322))
* **release:** update commit message format ([9aa4449](https://github.com/flex-development/tutils/commit/9aa4449f2eda18c9a2d943b3968392dcaad02167))
* **release:** use current date as release date ([43a2225](https://github.com/flex-development/tutils/commit/43a2225be34125784d14b5b277b7066f20b5600c))
* **vscode:** cleanup eslint settings ([53571ab](https://github.com/flex-development/tutils/commit/53571ab5047fd2beb3df85411ac3212a03cbf7bd))
* **vscode:** let prettier handle shellscript files ([118cde5](https://github.com/flex-development/tutils/commit/118cde5b118205cfb5f75cd6bd9743a1ba9c9df6))
* **yarn:** configure `flex-development` scope ([d24d03e](https://github.com/flex-development/tutils/commit/d24d03ea7a014c72f396e7052d645ddabb31f611))
* **yarn:** fix lockfile ruined by [@dependabot](https://github.com/dependabot) ([d73bba2](https://github.com/flex-development/tutils/commit/d73bba26ea60a050c606dce97026b091ec56c4ad))
* **yarn:** fix lockfile ruined by [@dependabot](https://github.com/dependabot) ([87574e4](https://github.com/flex-development/tutils/commit/87574e4836c5fe0bf8fab98106049da9533fb024))
* **yarn:** fix lockfile ruined by [@dependabot](https://github.com/dependabot) ([705612d](https://github.com/flex-development/tutils/commit/705612d822f3dfaeabe12dcc76d305c30314594d))
* **yarn:** remove registry restrictions ([793a0ca](https://github.com/flex-development/tutils/commit/793a0cad95fd78b9c91425f771e1e330c474462b))


### :white_check_mark: Testing

* update vitest environment ([8b79d00](https://github.com/flex-development/tutils/commit/8b79d004cb6ef40e0e395ee80acbd9d4b1ab3e94))

## [tutils@5.0.0](https://github.com/flex-development/tutils/compare/tutils@5.0.0-alpha.1...tutils@5.0.0) (2022-08-17)


### :sparkles: Features

* **types:** `ContinuousValue` ([2c95cd1](https://github.com/flex-development/tutils/commit/2c95cd11efdc9446e6a77d4030d9ceb15c82b090))
* **types:** `NumberLike` ([a7af5d6](https://github.com/flex-development/tutils/commit/a7af5d6b7195c545b0e03890302b54f8590b2927))
* **types:** `StringLike` ([c01856e](https://github.com/flex-development/tutils/commit/c01856eb036acf762487cc9ccf5de2f9539b10a1))


### :house_with_garden: Housekeeping

* **release:** fix release date for `tutils@5.0.0-dev.2` ([2b8e28d](https://github.com/flex-development/tutils/commit/2b8e28dff1797c095af879330cc6776d8880cb72))

## [tutils@5.0.0-alpha.1](https://github.com/flex-development/tutils/compare/tutils@5.0.0-dev.2...tutils@5.0.0-alpha.1) (2022-08-16)


### ⚠ BREAKING CHANGES

* **types:** remove `DocumentDeepPartial`
* **types:** drop `DeepPartialBy`
* **types:** drop `DeepPartialByHelper`
* **types:** drop `DeepPartialByRequired`
* **types:** drop `DeepPartialByRequiredHelper`
* **types:** drop `PartialBy`
* **types:** drop `PartialByRequired`

### :zap: Refactors

* **types:** remove unused and extraneous types ([bd2ff45](https://github.com/flex-development/tutils/commit/bd2ff45841dbe7ca43d7ebf6a36e0b12e49fdd42))
* **types:** use `OrDeepPartial` in `DocumentPartial` ([dee309f](https://github.com/flex-development/tutils/commit/dee309f1c33082a203f5a12d08e62f99aab0c1a6))
* **types:** remove `DocumentDeepPartial` ([e14d8e0](https://github.com/flex-development/tutils/commit/e14d8e05ed5bf0a9822012d869504fbcf7d3f454))

## [tutils@5.0.0-dev.2](https://github.com/flex-development/tutils/compare/tutils@5.0.0-dev.1...tutils@5.0.0-dev.2) (2022-08-15)


### :package: Build

* fix .npmignore ([068eb2e](https://github.com/flex-development/tutils/commit/068eb2ef085c7e51b45d0aadf61f54569905e813))
* **deps-dev:** bump @faker-js/faker from 7.3.0 to 7.4.0 ([71421d2](https://github.com/flex-development/tutils/commit/71421d22288102c1dc1b32d87c5c967847d1e437))
* **deps-dev:** bump @types/chai from 4.3.1 to 4.3.3 ([eddba63](https://github.com/flex-development/tutils/commit/eddba635894c0a24823cbbb74d297b37a99e3a19))
* **deps-dev:** bump @types/prettier from 2.6.4 to 2.7.0 ([647f9c0](https://github.com/flex-development/tutils/commit/647f9c063fa3b2127a29eb6957874f16a289a6eb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin from 5.32.0 to 5.33.1 ([a69a946](https://github.com/flex-development/tutils/commit/a69a946a219f3fdc2df62fbc21a2592c8583a763))
* **deps-dev:** bump @typescript-eslint/parser from 5.32.0 to 5.33.1 ([af40d7b](https://github.com/flex-development/tutils/commit/af40d7bbe2fc211b773b6ce3af715e812094c3b3))
* **deps-dev:** bump cspell from 6.5.0 to 6.6.1 ([88b2e86](https://github.com/flex-development/tutils/commit/88b2e86c78d697360a4b835782a9c669dd50bbc2))
* **deps-dev:** bump eslint from 8.21.0 to 8.22.0 ([6f7fca8](https://github.com/flex-development/tutils/commit/6f7fca87a2428f00b1ff8baafeb40d8e57ecdfaf))
* **deps-dev:** bump eslint-plugin-jsdoc from 39.3.4 to 39.3.6 ([96d75e3](https://github.com/flex-development/tutils/commit/96d75e3c68a3ede3eff0c83842df8ec832980ac5))
* **deps-dev:** bump tsconfig-paths from 4.0.0 to 4.1.0 ([ba3539d](https://github.com/flex-development/tutils/commit/ba3539d9184a130efbd7fc1029526c9ecea5f198))
* **deps-dev:** bump unbuild from 0.7.6 to 0.8.8 ([dd82974](https://github.com/flex-development/tutils/commit/dd8297462aceafb059b06651f7f4ac6128be43d0))


### :robot: Continuous Integration

* add gpr registry config for [@dependabot](https://github.com/dependabot) ([05b5ca7](https://github.com/flex-development/tutils/commit/05b5ca738c2663d4ccac6c73993ee4cba4aefaa7))
* remove ignored dependencies for [@dependabot](https://github.com/dependabot) ([748fba1](https://github.com/flex-development/tutils/commit/748fba1d52c17301e3503ea028e7179185c6bb4f))
* **deps:** bump actions/github-script from 6.1.0 to 6.1.1 ([#51](https://github.com/flex-development/tutils/issues/51)) ([aa078c1](https://github.com/flex-development/tutils/commit/aa078c1e6940b098d538bdeea096cf74e61697ca))
* **workflows:** `label-linked-issues` ([f0ef3bc](https://github.com/flex-development/tutils/commit/f0ef3bcee88c2c37cc4397df6d901a6ec6d6ce5f))
* **workflows:** `query-linked-issues` ([d510013](https://github.com/flex-development/tutils/commit/d510013f4fda4a0420450b327109686b67782cf4))
* **workflows:** close inactionable issues after `14` days ([b2f70a4](https://github.com/flex-development/tutils/commit/b2f70a4821c6f52288b86a1845578b989ba61546))
* **workflows:** lock inactive threads after `60` days ([6a590f2](https://github.com/flex-development/tutils/commit/6a590f28f60d78882079ad2010881c0504947cf8))
* **workflows:** refactor `integrity` ([00008a1](https://github.com/flex-development/tutils/commit/00008a195c63ec19a2a6f10e3ee3508dcfc1f49b))
* **workflows:** refactor ci workflow ([3eafccb](https://github.com/flex-development/tutils/commit/3eafccb2e2e37c96154755d996f3ba914ff92092))
* **workflows:** refactor release and package publishing ([2ae4721](https://github.com/flex-development/tutils/commit/2ae47213476c10e1937fba2cac4f540797debc3d))
* **workflows:** reimplement [@dependabot](https://github.com/dependabot) auto approve and merge ([173d1ae](https://github.com/flex-development/tutils/commit/173d1ae388d3ac15c375f5e5a571b65fa31f7b68))
* **workflows:** reimplement label management workflow ([85d4de9](https://github.com/flex-development/tutils/commit/85d4de9d88dfe09eb3082a3622ffd2b8b8e98c1d))
* **workflows:** reimplement pr auto approval ([16ea0a4](https://github.com/flex-development/tutils/commit/16ea0a48037ff36d322b7b3c20b589a7f36b538b))


### :pencil: Documentation

* `rebase and merge` ([facbd14](https://github.com/flex-development/tutils/commit/facbd1479b540d26c4ec36b7db98335b4a040d42))
* **pkg:** fix license badge ([b4c41ea](https://github.com/flex-development/tutils/commit/b4c41ea6af131c41d2614d4098a6230bc07bd3f0))


### :house_with_garden: Housekeeping

* prevent prettier from formatting markdown ([6c67427](https://github.com/flex-development/tutils/commit/6c67427c59d3ffa47c9f284f18fee6ae5f33bba2))
* update jsx check in eslint config ([9302f4c](https://github.com/flex-development/tutils/commit/9302f4cf432e26e77fa8ac300b95eab3ca3c0813))
* update sample gitconfig ([8bf65b4](https://github.com/flex-development/tutils/commit/8bf65b4e34fcbf393ef4e0b8e947316a52f2cfb5))
* **github:** add label `scope:typescript` ([a7b5619](https://github.com/flex-development/tutils/commit/a7b5619dc2f0727dc14dc3c0f01e640cbda48752))
* **github:** cleanup bug report environment section starter ([d60974d](https://github.com/flex-development/tutils/commit/d60974dcc3c1ee9525827fe63f5b301e91a31184))
* **release:** update local workflow ([5b057b2](https://github.com/flex-development/tutils/commit/5b057b27ca1927dbbdfe3ea255997526202792bb))
* **tests:** fix path alias recognition ([65e625e](https://github.com/flex-development/tutils/commit/65e625ee0c137a6d4aef277c8be87467e816f94d))
* **tests:** run tests in alphabetical order ([e0cc8cc](https://github.com/flex-development/tutils/commit/e0cc8cc9af833fdec47b1550c585667d1c9d8724))
* **ts:** update module code generation ([c22f6fb](https://github.com/flex-development/tutils/commit/c22f6fb1cf33b37252eb2d7f0c4adba1677ccea0))
* **vscode:** update workspace settings ([4dcc616](https://github.com/flex-development/tutils/commit/4dcc616b0263c79fe7439b6545d97e4caf107e44))
* **yarn:** cleanup yarn environment ([71871db](https://github.com/flex-development/tutils/commit/71871db8747baee1587d3e971d10f63254fb5777))

## [tutils@5.0.0-dev.1](https://github.com/flex-development/tutils/compare/tutils@4.9.0-dev.1...tutils@5.0.0-dev.1) (2022-08-04)


### ⚠ BREAKING CHANGES

* **types:** `Union` definition
* **types:** drop `.type` extension
* **enums:** drop `.enum` extension
* **guards:** drop `.guard` extension

### :package: Build

* **enums:** drop `.enum` extension ([43d858e](https://github.com/flex-development/tutils/commit/43d858e33888975deb394b189e73803a302ff02d))
* **guards:** drop `.guard` extension ([bc33094](https://github.com/flex-development/tutils/commit/bc3309470d7b95952fb417e01904f35d17e796b2))
* **types:** drop `.type` extension ([b3207a6](https://github.com/flex-development/tutils/commit/b3207a635770f73843a2b7a60656efb39a35cc66))


### :bug: Fixes

* **exports:** `Cannot find module 'src/enums/app-env.enum'` ([9c21876](https://github.com/flex-development/tutils/commit/9c21876fe03992b19926bcf155bdaa8ccb7faca6))
* **types:** `Union` definition ([4df8656](https://github.com/flex-development/tutils/commit/4df8656c3083550922332f1ab3a50d6e38b158c7))


### :zap: Refactors

* **types:** loosen `Intersection` definition ([c5cf5b6](https://github.com/flex-development/tutils/commit/c5cf5b62fe7f5caeca6a3dd81bddc971b7ace9f6))

## [tutils@4.9.0-dev.1](https://github.com/flex-development/tutils/compare/tutils@4.8.0...tutils@4.9.0-dev.1) (2022-08-03)


### :sparkles: Features

* **enums:** `HttpStatus` ([9e8c352](https://github.com/flex-development/tutils/commit/9e8c35291c7e979357576ef4855d8b8b6196d620))


### :bug: Fixes

* **exports:** `[DEP0148] DeprecationWarning: Use of deprecated folder mapping "./"` ([#36](https://github.com/flex-development/tutils/issues/36)) ([151b4ed](https://github.com/flex-development/tutils/commit/151b4edd7aa3bd92e36cf091fd65bc6b8bd4734f))
* **guards:** `isNumberString` logic ([33dcfde](https://github.com/flex-development/tutils/commit/33dcfded658c8bccd4c3719265cdc21836226c38))


### :house_with_garden: Housekeeping

* refactor project architecture ([#30](https://github.com/flex-development/tutils/issues/30)) ([a1a564c](https://github.com/flex-development/tutils/commit/a1a564c5962872537eed48bcb75887d5effa52d9))
* **github:** add commit scope `exports` ([af02010](https://github.com/flex-development/tutils/commit/af020102ea5c774482f22206be68c5e1f6481adb))
* **github:** add commit scope `husky` ([ad3db94](https://github.com/flex-development/tutils/commit/ad3db941f3d2456254e16ec5e9ceb8b1cdb120c1))
* **github:** add commit scope `tests` ([8afd47e](https://github.com/flex-development/tutils/commit/8afd47efd323893dfabb7cd65071a64e903d00fc))
* **github:** add commit scopes `pkg` and `vscode` ([84bcfea](https://github.com/flex-development/tutils/commit/84bcfea5bf525c65eae2b94a412c2a5359fbd282))
* **github:** add commit type `wip` ([d9f9450](https://github.com/flex-development/tutils/commit/d9f94501b5ee7d020c5e12ad3d4d53d05d27c586))
* **github:** update feature request template comments ([2e65e86](https://github.com/flex-development/tutils/commit/2e65e86e4ab9f15212c54dc5cfe81767b2020b69))
* **husky:** add shebang to scripts ([177a9d3](https://github.com/flex-development/tutils/commit/177a9d397a8ba8961016b8608fa21c03536dca2c))
* **pkg:** add "interfaces" to `keywords` ([c72f47a](https://github.com/flex-development/tutils/commit/c72f47aba54fa4902fe4896e3e9a547c5297645b))
* **release:** include reverted commits in changelog ([72bd60a](https://github.com/flex-development/tutils/commit/72bd60a293b095be12751a6f22cd9b2d2d655a02))
* **release:** re-add `chore` and `test` type commits to changelog ([3895043](https://github.com/flex-development/tutils/commit/389504312c588385c7ae9031a6a7ab8a322544f8))
* **release:** replace `yarn version` with `bump` ([4ea6736](https://github.com/flex-development/tutils/commit/4ea6736db60a0036e25ca86425b5c12ae693cd5f))
* **release:** sort commit groups and commits ([50cee2e](https://github.com/flex-development/tutils/commit/50cee2ef59438017262eaa34122b8a83387ad3a7))


### :zap: Refactors

* **guards:** make `isUnixTimestamp` parameter optional ([1a20135](https://github.com/flex-development/tutils/commit/1a20135a591f39954a43bb1e4da13a15a65da852))

## [tutils@4.8.0](https://github.com/flex-development/tutils/compare/tutils@4.7.0...tutils@4.8.0) (2022-03-14)


### :sparkles: Features

* **enums:** `BsonTypeAlias`, `BsonTypeCode`, `ProjectRule`, `SortOrder` ([992fefb](https://github.com/flex-development/tutils/commit/992fefbc7c2c3ce548af1033dd3cf5a02cc42ef6))

## [tutils@4.7.0](https://github.com/flex-development/tutils/compare/tutils@4.6.0...tutils@4.7.0) (2022-03-13)


### :sparkles: Features

* **enums:** `CompareResult` ([16b2417](https://github.com/flex-development/tutils/commit/16b2417e8eba14cc05f51859128aa10f1fd45fdd))

## [tutils@4.6.0](https://github.com/flex-development/tutils/compare/tutils@4.5.0...tutils@4.6.0) (2022-03-02)


### :sparkles: Features

* **enums:** `AppEnv.CI` ([d504f1c](https://github.com/flex-development/tutils/commit/d504f1c782a952a8067b299a0f63e937f354a402))
* **enums:** `JwtType` ([d2370a6](https://github.com/flex-development/tutils/commit/d2370a6e28f5e91e75e4a80b44c1263cc2d76334))
* **guards:** `isJwtType` ([f77bcaf](https://github.com/flex-development/tutils/commit/f77bcaf942a2e4834a39d2570a9c4a35d1c9a3d1))
* **types:** `Numeric` ([462f102](https://github.com/flex-development/tutils/commit/462f102c424fe623c920cdae3d3a9cca54e0ae78))
* **types:** `TimestampUnix` ([936651e](https://github.com/flex-development/tutils/commit/936651efaaef4166c861d6acc5b4836c4945a7de))

## [tutils@4.5.0](https://github.com/flex-development/tutils/compare/tutils@4.4.0...tutils@4.5.0) (2022-02-06)


### :book: Documentation

* **enums:** update `NodeEnv` annotations ([bd4ba29](https://github.com/flex-development/tutils/commit/bd4ba294f4452267f6e28490848e004a4f521624))


### :sparkles: Features

* **enums:** `AppEnv` ([a69c7ac](https://github.com/flex-development/tutils/commit/a69c7ac5f6c339622a3f42ac71746cb45473b1da))
* **guards:** `isAppEnv` ([cc80fc9](https://github.com/flex-development/tutils/commit/cc80fc95a4aff2f3cae97f4919990ccae37a9751))
* **guards:** `isUnixTimestamp` ([4401dc8](https://github.com/flex-development/tutils/commit/4401dc8c2de91d39a7761d3ce6386302ecd3da8e))

## [tutils@4.4.0](https://github.com/flex-development/tutils/compare/tutils@4.3.0...tutils@4.4.0) (2021-11-12)


### :sparkles: Features

* **guards:** `isBooleanish` ([7d53fcd](https://github.com/flex-development/tutils/commit/7d53fcdf04b65a89ecb334402d70385a73eda3e2))
* **guards:** `isEmptyString` ([141902a](https://github.com/flex-development/tutils/commit/141902aa6a1561f0214ef074e943cfd0ff62d607))
* **guards:** `isEmptyValue` ([879aa26](https://github.com/flex-development/tutils/commit/879aa26dd89ca88a691078c579767d60983ae8e0))
* **guards:** `isNIL` ([011f516](https://github.com/flex-development/tutils/commit/011f516ca8e77477448d2634dc77bde742c561d5))
* **guards:** `isNumberString` ([4d3bae0](https://github.com/flex-development/tutils/commit/4d3bae0801ae8e8e0b69aa410faddfa481f2a553))

## [tutils@4.3.0](https://github.com/flex-development/tutils/compare/tutils@4.2.3...tutils@4.3.0) (2021-11-12)


### :sparkles: Features

* **types:** `OrNil`, `OrNull`, `OrUndefined` ([23ea43e](https://github.com/flex-development/tutils/commit/23ea43ec605be7c601b50cb542f9666adeffd764))

## [tutils@4.2.3](https://github.com/flex-development/tutils/compare/tutils@4.2.2...tutils@4.2.3) (2021-11-01)


### :bug: Fixes

* package exports (actually) ([d6629ad](https://github.com/flex-development/tutils/commit/d6629ad7195281705f61db686d073c1a541e2781))

## [tutils@4.2.2](https://github.com/flex-development/tutils/compare/tutils@4.2.1...tutils@4.2.2) (2021-10-31)


### :bug: Fixes

* package exports ([e601c92](https://github.com/flex-development/tutils/commit/e601c92fad14681325150d58ef032062d58833ad))


### :pencil2: Housekeeping

* check for duplicate deps when `yarn.lock` changes ([b275a35](https://github.com/flex-development/tutils/commit/b275a35e0b4cb94d8a6d82dca02cf48e31e4f1ce))
* update eslint config to handle dotfiles ([179617e](https://github.com/flex-development/tutils/commit/179617e647e35a8639849c6f913bce0affb17732))

## [tutils@4.2.1](https://github.com/flex-development/tutils/compare/tutils@4.2.0...tutils@4.2.1) (2021-10-29)


### :bug: Fixes

* add conditional exports - `./guards`, `./guards/*` ([98a1426](https://github.com/flex-development/tutils/commit/98a1426337c99835425b17ce2ae4239445339fcc))


### :pencil2: Housekeeping

* local integrity check ([ea5451d](https://github.com/flex-development/tutils/commit/ea5451d082107a40b80caf0f9eed9cd77dd652cf))
* **scripts:** add `check:ci` script ([1233da6](https://github.com/flex-development/tutils/commit/1233da620ca6de5c6daac0bfd47c727a889b13c8))
* **tools:** reorganize build workflow ([adf50f6](https://github.com/flex-development/tutils/commit/adf50f64a8d04d8b22ca7fd87adf3b5a098cd3cf))
* **tools:** use explicit environment variables in testing workflow ([c0c9db8](https://github.com/flex-development/tutils/commit/c0c9db8e0343fc997bace0bf05dca4b89b31da65))
* **typescript:** add typings for `@vercel/ncc` ([46065f2](https://github.com/flex-development/tutils/commit/46065f20849d8b20bcba7959b4d16b63af92c8d5))
* **typescript:** add typings for `tsc-prog/dist/utils/log` ([4e8a325](https://github.com/flex-development/tutils/commit/4e8a325124216c2d7afdc574aebcbeeca034bc02))

## [tutils@4.2.0](https://github.com/flex-development/tutils/compare/tutils@4.1.1...tutils@4.2.0) (2021-10-22)


### :sparkles: Features

* **types:** `ClassConstructor` ([4799845](https://github.com/flex-development/tutils/commit/4799845a649b5db7f1d3e18a871c4a83b67e5f90))
* **types:** `DocumentDeepPartial`, `DocumentPartial` ([6fb47b7](https://github.com/flex-development/tutils/commit/6fb47b7eb09303ec2a28f0c85d24230856bfbe37))
* **types:** `DUID` ([03513e8](https://github.com/flex-development/tutils/commit/03513e832a459065e706bcb4e9fa68890ffb859f))
* **types:** `EmptyString` ([ccf0af1](https://github.com/flex-development/tutils/commit/ccf0af1ed4e041a68ceb4856f6bdfd8a2911c591))
* **types:** `UID` ([921883e](https://github.com/flex-development/tutils/commit/921883ee1eb0293d85d07462475f52505f80006d))

## [tutils@4.1.1](https://github.com/flex-development/tutils/compare/tutils@4.1.0...tutils@4.1.1) (2021-10-16)


### :bug: Fixes

* path remapping in `types` build output ([78d512a](https://github.com/flex-development/tutils/commit/78d512ae00dfc22194ff4e7a2476d5f3a93136a8))

## [tutils@4.1.0](https://github.com/flex-development/tutils/compare/tutils@4.0.3...tutils@4.1.0) (2021-10-15)


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

## [tutils@4.0.3](https://github.com/flex-development/tutils/compare/tutils@4.0.2...tutils@4.0.3) (2021-10-14)


### :bug: Fixes

* `Could not find a declaration file for module` (actually! 😉) ([5161733](https://github.com/flex-development/tutils/commit/51617335bf7137c429dd3b393f431caaf9fbd479))

## [tutils@4.0.2](https://github.com/flex-development/tutils/compare/tutils@4.0.1...tutils@4.0.2) (2021-10-14)


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

## [tutils@4.0.1](https://github.com/flex-development/tutils/compare/tutils@4.0.0...tutils@4.0.1) (2021-10-13)


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

## [tutils@4.0.0](https://github.com/flex-development/tutils/compare/tutils@4.0.0-dev.0...tutils@4.0.0) (2021-10-11)


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

## [tutils@4.0.0-dev.0](https://github.com/flex-development/tutils/compare/tutils@3.1.7...tutils@4.0.0-dev.0) (2021-10-05)


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

## [tutils@3.1.7](https://github.com/flex-development/tutils/compare/tutils@3.1.6...tutils@3.1.7) (2021-09-15)


### :hammer: Build

* **deps-peer:** make `typescript>=2.7` optional ([9bfe059](https://github.com/flex-development/tutils/commit/9bfe059983bc11bdf8e587d7067eec22380fe8b6))

## [tutils@3.1.6](https://github.com/flex-development/tutils/compare/tutils@3.1.5...tutils@3.1.6) (2021-09-15)


### :hammer: Build

* **deps-peer:** add `typescript>=2.7` peer dependency ([e4d23dc](https://github.com/flex-development/tutils/commit/e4d23dc6998ea65900effc3d621d49f410a8afb2))

## [tutils@3.1.5](https://github.com/flex-development/tutils/compare/tutils@3.1.4...tutils@3.1.5) (2021-09-05)


### :bug: Fixes

* **scripts:** disable `postinstall` before tarball is packed ([a2243b0](https://github.com/flex-development/tutils/commit/a2243b0f61003cc448dedd761c7b23c1782244dc))

## [tutils@3.1.4](https://github.com/flex-development/tutils/compare/tutils@3.1.3...tutils@3.1.4) (2021-09-04)


### :bug: Fixes

* **scripts:** allow `postinstall` to fail quietly ([b8236b0](https://github.com/flex-development/tutils/commit/b8236b0254e4de395051db2451e08e74f14b1a12))

## [tutils@3.1.3](https://github.com/flex-development/tutils/compare/tutils@3.1.2...tutils@3.1.3) (2021-09-04)


### :bug: Fixes

* **scripts:** use `husky-run init` in `postinstall` script ([812ae42](https://github.com/flex-development/tutils/commit/812ae423e1fa68c82a29fb55de49fcea01e8022c))

## [tutils@3.1.2](https://github.com/flex-development/tutils/compare/tutils@3.1.1...tutils@3.1.2) (2021-09-04)


### :bug: Fixes

* **scripts:** only run `postinstall` in dev environments ([3824716](https://github.com/flex-development/tutils/commit/382471649eaf3e5c23048c9a5b812e14126b2f3e))

## [tutils@3.1.1](https://github.com/flex-development/tutils/compare/tutils@3.1.0...tutils@3.1.1) (2021-09-04)


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

## [tutils@3.1.0](https://github.com/flex-development/tutils/compare/tutils@3.0.0...tutils@3.1.0) (2021-05-27)


### :book: Documentation

* **types:** update description for `DeepOmit` and `Path` ([07cb3dc](https://github.com/flex-development/tutils/commit/07cb3dce0f171115d7e213727b23232bbdcccb9e))


### :sparkles: Features

* **types:** `DeepPartialBy` ([fb212da](https://github.com/flex-development/tutils/commit/fb212da7b7cb357061b48081acf7073525446b09))
* **types:** `DeepPartialByRequired` ([8a8b8e4](https://github.com/flex-development/tutils/commit/8a8b8e4d0898929ccc78daa21164a8f6041c5060))

## [tutils@3.0.0](https://github.com/flex-development/tutils/compare/tutils@2.0.0...tutils@3.0.0) (2021-05-25)


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

## [tutils@2.0.0](https://github.com/flex-development/tutils/compare/tutils@1.0.0...tutils@2.0.0) (2021-05-24)


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

## tutils@1.0.0 (2021-05-21)


### :sparkles: Features

* **types:** add utility types ([f545380](https://github.com/flex-development/tutils/commit/f5453806dd89856d4b9a0c52d2dc62774a892071))


### :pencil2: Housekeeping

* **release:** update release script ([e3c89e9](https://github.com/flex-development/tutils/commit/e3c89e95dbba1ba2f756fa006dfcd9d890665e23))
* repo setup ([66f6777](https://github.com/flex-development/tutils/commit/66f67772298c662924c1261a307b2db65b64cf4e))
