import { Controller } from 'stimulus'
import 'lightgallery.js'

export default class extends Controller {
  connect () {
    lightGallery(this.element, {
      ...this.defaultOptions,
      ...this.options
    })
  }

  get defaultOptions () {
    return {}
  }

  get options () {
    if (this.data.has('options')) {
      return JSON.parse(this.data.get('options').replace(/'/g, '"'))
    }

    return {}
  }
}
