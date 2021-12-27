import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') return {}

  return {
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
}
