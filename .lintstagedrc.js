module.exports = {
  '**/*.{js,yml}': [
    'eslint --fix'
  ],
  'src/**/*.js': [
    'npm run test'
  ]
}