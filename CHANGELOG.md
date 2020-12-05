# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0
- Adding getter to retrieve the lightGallery instance

### Changed

- **Breaking** Using the new `values` static property

```diff
- <div data-controller="lightbox" data-lightbox-options="{'index': 2}">
+ <div data-controller="lightbox" data-lightbox-options-value='{"index": 2}'>
```

## [1.0.0] - 2020-11-11

### Added

- Adding controller
