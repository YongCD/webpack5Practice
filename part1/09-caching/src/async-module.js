function getComponent () {
  // import 函数返回的是一个 Promise 对象
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  })
}

getComponent().then((element) => {
  document.body.appendChild(element)
})
