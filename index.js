const divLeftEvent = document.getElementById('divLeftEvent')
const divRightEvent = document.getElementById('divRightEvent')

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

function removeClassActivated(firstLine,btnLinha1,btnFt1,secondLine,btnLinha2,btnFt2){
  if(firstLine == true){
    btnLinha1.classList.remove('activated')
    btnLinha1.classList.add('btnLinha')
    btnFt1.style.color = 'hsl(229deg, 8%, 60%)'
    firstLine = false
  }
  if(secondLine == true){
    btnLinha2.classList.remove('activated')
    btnLinha2.classList.add('btnLinha')
    btnFt2.style.color = 'hsl(229deg, 8%, 60%)'
    secondLine = false
  }
}

function stringEvent(btnLinha,title,text){
  btnLinha.classList.remove('btnLinha')
  btnLinha.classList.add('activated')
  document.getElementById('imgLeftEvent').src="./images/illustration-features-tab-"+btnLinha.dataset.value+".svg"
  document.getElementById('titleEvent').innerText=title
  document.getElementById('textEvent').innerText=text
}
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

const firstArrow = document.getElementById('firstArrow')
const secondArrow = document.getElementById('secondArrow')
const thirdArrow = document.getElementById('thirdArrow')
const fourthArrow = document.getElementById('fourthArrow')
const arrowArray = [firstArrow,secondArrow,thirdArrow,fourthArrow]

let firstArrowAndBtnActivated = 0
let secondArrowAndBtnActivated = 0
let thirdArrowAndBtnActivated = 0
let fourthArrowAndBtnActivated = 0
const arrowBtnArray = [firstArrowAndBtnActivated, secondArrowAndBtnActivated, thirdArrowAndBtnActivated, fourthArrowAndBtnActivated]

let paragraphIndex = 0
function addParagraph(text,questionPosition){
  const paragraph = document.createElement('p')
  paragraph.innerText = text
  paragraph.id = "paragraph-"+questionPosition
  paragraph.classList = "paragraph"
  return paragraph
}
function enableOrDisableButton(position,namePosition,text){
  const arrowBtn = arrowBtnArray[position - 1]
  if(arrowBtn == 0){
    document.getElementById(namePosition+'Question').appendChild(addParagraph(text,namePosition))
    arrowBtnArray[position - 1] = 1
    document.getElementById(namePosition+"ArrowRigth").style.opacity= "1"
    document.getElementById(namePosition+"ArrowLeft").style.opacity = "0"
  }
  else{
    document.querySelector("#paragraph-"+namePosition).remove()
    document.getElementById(namePosition+"ArrowRigth").style.opacity = "0"
    document.getElementById(namePosition+"ArrowLeft").style.opacity = "1"
    arrowBtnArray[position - 1] = 0
  }
}
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

