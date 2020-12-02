import Mock from 'mockjs'

Mock.mock(/\.json/, 'post', function(options) {
  return options.type
})
