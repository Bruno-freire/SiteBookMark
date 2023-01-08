const btnFt1 = document.getElementById('btn-ft-1')
const btnFt2 = document.getElementById('btn-ft-2')
const btnFt3 = document.getElementById('btn-ft-3')

const btnLinha1 = document.getElementById('btnLinha1')
const btnLinha2 = document.getElementById('btnLinha2')
const btnLinha3 = document.getElementById('btnLinha3')
//firstLineActivated ja vai inicar activated
let firstLineActivated = true
let secondLineActivated = false
let thirdLineActivated = false

import { removeClassActivated } from "./modules/removeClass.js"
import { stringEvent } from "./modules/stringEvent.js"

btnFt1.addEventListener('click', function(ev){
  //como btnFt termina com 1, 
  //eu faco a sequencia de botoes
  //na funcao terminando com 2 e depois com 3.
  removeClassActivated(secondLineActivated,btnLinha2,btnFt2,thirdLineActivated,btnLinha3,btnFt3)
  ev.currentTarget.style.color = "black"
  stringEvent(btnLinha1,'Bookmark in one click','Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',firstLineActivated)
  firstLineActivated = 1
})
btnFt2.addEventListener('click', function(ev){
  removeClassActivated(firstLineActivated,btnLinha1,btnFt1,thirdLineActivated,btnLinha3,btnFt3)
  ev.currentTarget.style.color = "black"
  stringEvent(btnLinha2,'Intelligent search','Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',secondLineActivated)
  secondLineActivated = 1
})
btnFt3.addEventListener('click', function(ev){
  removeClassActivated(firstLineActivated,btnLinha1,btnFt1,secondLineActivated,btnLinha2,btnFt2)
  ev.currentTarget.style.color = "black"
  stringEvent(btnLinha3,'Share your bookmarks','Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')
  thirdLineActivated=1
})

import { enableOrDisableButton } from "./modules/enableOrDisableButton.js"

document.getElementById('firstBtnQuestion').addEventListener('click', function(ev){
  enableOrDisableButton(1,'first',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.")
})
document.getElementById('secondBtnQuestion').addEventListener('click', function(ev){
  enableOrDisableButton(2,"second","Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.")
})
document.getElementById('thirdBtnQuestion').addEventListener('click', function(ev){
  enableOrDisableButton(3,"third","Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.")
})
document.getElementById('fourthBtnQuestion').addEventListener('click', function(ev){
  enableOrDisableButton(4,"fourth","Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.")
})

const hamburguerActivated = document.getElementById('hamburguerActivated')
const headerHamburguer = document.getElementById('headerHamburguerId')

document.getElementById('hamburguerId').addEventListener('click', function(){
  hamburguerActivated.style.right = '0'
  headerHamburguer.style.right = '510px' 
  document.documentElement.style.overflow = 'hidden'
  window.scrollTo(0,0)
})
document.getElementById('closeButton').addEventListener('click', function(){
  headerHamburguer.style.right = '0'
  hamburguerActivated.style.right = '3000px'
  document.documentElement.style.overflow = 'visible'
})
