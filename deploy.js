var ghpages = require('gh-pages')

console.log('Deploying to GitHub-Pages...')

ghpages.publish('dist', (err) => {
  console.log('Failed to deploy:')
  throw err
})
