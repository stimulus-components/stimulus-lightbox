# Stimulus Lightbox

[![](https://img.shields.io/npm/dt/stimulus-lightbox.svg)](https://www.npmjs.com/package/stimulus-lightbox)
[![](https://img.shields.io/npm/v/stimulus-lightbox.svg)](https://www.npmjs.com/package/stimulus-lightbox)
[![](https://github.com/stimulus-components/stimulus-lightbox/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-lightbox)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-lightbox.svg)](https://github.com/stimulus-components/stimulus-lightbox)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cbec1815-8e5b-4f45-8cb2-44d24e8c9cf5/deploy-status)](https://stimulus-lightbox.netlify.com)

## Getting started

A Stimulus controller to add a lightbox on images.

This controller is using [lightgallery.js](https://sachinchoolur.github.io/lightgallery.js/) behind the scene.

## Installation

```bash
$ yarn add stimulus-lightbox
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import Lightbox from "stimulus-lightbox"

const application = Application.start()
application.register("lightbox", Lightbox)
```

## Usage

Before starting, your must import the `lightgallery.css` in your `js` or in your `sass`:
```js
// In your application.js (for example)
import "lightgallery.js/dist/css/lightgallery.min.css"

// Or in your sass
@import "~lightgallery.js/src/sass/lightgallery"
```

Basic usage:
```html
<div data-controller="lightbox">
  <a href="img/img1.jpg">
    <img src="img/img1.jpg" alt="" />
  </a>

  <a href="img/img2.jpg">
    <img src="img/img2.jpg" alt="" />
  </a>

  <a href="img/img3.jpg">
    <img src="img/img3.jpg" alt="" />
  </a>
</div>
```

With options:
```html
<div data-controller="lightbox" data-lightbox-options="{'index': 2}">
  <a href="img/img1.jpg">
    <img src="img/img1.jpg" alt="" />
  </a>

  <a href="img/img2.jpg">
    <img src="img/img2.jpg" alt="" />
  </a>

  <a href="img/img3.jpg">
    <img src="img/img3.jpg" alt="" />
  </a>
</div>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-lightbox-options` | `{}` | Options for lightgallery.js as JSON string. | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.
```js
import Lightbox from "stimulus-lightbox"

export default class extends Lightbox {
  connect() {
    super.connect()
    console.log("Do what you want here.")

    // Default options for every lightboxes.
    this.defaultOptions

    // Options from data attribute.
    this.options
  }

  // You can set default options in this getter.
  get defaultOptions () {
    return {
      // Your default options here
    }
  }
}
```

This controller will automatically has access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
