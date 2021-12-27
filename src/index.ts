import { Controller } from '@hotwired/stimulus'
import lightGallery from 'lightgallery'

export default class extends Controller {
  // @ts-ignore
  element: HTMLElement
  optionsValue: object

  static values = {
    options: Object
  }

  connect (): void {
    lightGallery(this.element, {
      ...this.defaultOptions,
      ...this.optionsValue
    })
  }

  get defaultOptions (): object {
    return {}
  }
}
