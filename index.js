const divLeftEvent = document.getElementById('divLeftEvent')
const divRightEvent = document.getElementById('divRightEvent')

const btnFt1 = document.getElementById('btn-ft-1')
const btnFt2 = document.getElementById('btn-ft-2')
const btnFt3 = document.getElementById('btn-ft-3')

const btnLinha1 = document.getElementById('btnLinha1')
const btnLinha2 = document.getElementById('btnLinha2')
const btnLinha3 = document.getElementById('btnLinha3')
//firstLineActivated ja vai inicar activated
let firstLineActivated = 1
let secondLineActivated = 0
let thirdLineActivated = 0

function removeClassActivated(firstLine,btnLinha1,btnFt1,secondLine,btnLinha2,btnFt2){
  if(firstLine == 1){
    btnLinha1.classList.remove('activated')
    btnLinha1.classList.add('btnLinha')
    btnFt1.style.color = 'hsl(229deg, 8%, 60%)'
    firstLine = 0
  }
  if(secondLine == 1){
    btnLinha2.classList.remove('activated')
    btnLinha2.classList.add('btnLinha')
    btnFt2.style.color = 'hsl(229deg, 8%, 60%)'
    secondLine = 0
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