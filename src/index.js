import { Controller } from 'stimulus'
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

  get defaultOptions () {
    return {}
  }
}
