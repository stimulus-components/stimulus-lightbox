import { Controller } from '@hotwired/stimulus'
import 'lightgallery.js'

export default class extends Controller {
  static values = {
    options: Object
  }

  connect () {
    lightGallery(this.element, {
      ...this.defaultOptions,
      ...this.optionsValue
    })
  }

  get lightGallery () {
    return window.lgData[this.element.getAttribute('lg-uid')]
  }

  get defaultOptions () {
    return {}
  }
}
