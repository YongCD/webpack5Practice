import helloWorld from "./hello-world"
import imgSrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/qianfeng-sem.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'
import _ from 'lodash'
import './async-module.js'

helloWorld()

const img = document.createElement('img')
img.src = imgSrc // 引入的图片会生成一个url
document.body.appendChild(img)

const svg = document.createElement('img')
svg.style.cssText = 'width: 600px; height: 200px;'
svg.src = logoSvg
document.body.appendChild(svg)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.classList.add('block-bg')
block.innerHTML = exampleTxt
document.body.appendChild(block)

const jpg = document.createElement('img')
jpg.style.cssText = 'width: 600px; height: 240px; display: block;'
jpg.src = jpgMap
document.body.appendChild(jpg)

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
span.innerHTML = '&#xe668;'
document.body.appendChild(span)

console.log(Data)
console.log(Notes)
console.log(toml)
console.log(yaml)
console.log(json5)

console.log(_.join(['index', 'module', 'loaded!'], ' '))

const button = document.createElement('button')
button.textContent = '点击执行加法运算'
button.addEventListener('click', () => {
  import(/* webpackChunkName: 'math', webpackPrefetch: true */'./math').then(({add}) => {
    console.log(add(4, 5))
  })
})
document.body.appendChild(button)
