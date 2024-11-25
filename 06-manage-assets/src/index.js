import helloWorld from "./hello-world"
import imgSrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/qianfeng-sem.jpg'
import './style.css'

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
block.innerHTML = exampleTxt
document.body.appendChild(block)

const jpg = document.createElement('img')
jpg.style.cssText = 'width: 600px; height: 240px; display: block;'
jpg.src = jpgMap
document.body.appendChild(jpg)

document.body.classList.add('hello')
