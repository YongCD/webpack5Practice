function getString () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!!')
    }, 2000)
  })
}


async function helloWorld () {
  const string = await getString()
  console.log(string)
}

export default helloWorld
