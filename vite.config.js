const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-lightbox'
    },
    rollupOptions: {
      external: ['lightgallery', '@hotwired/stimulus'],
      output: {
        globals: {
          lightgallery: 'lightgallery',
          '@hotwired/stimulus': 'Stimulus'
        }
      }
    }
  }
}
