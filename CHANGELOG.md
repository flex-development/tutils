# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
