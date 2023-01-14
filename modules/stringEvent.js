export function stringEvent(btnLinha,title,text){
  document.getElementById('imgLeftEvent').src="./images/illustration-features-tab-"+btnLinha.dataset.value+".svg"
  document.getElementById('titleEvent').innerText=title
  document.getElementById('textEvent').innerText=text
  btnLinha.classList.remove('btnLinha')
  btnLinha.classList.add('activated')
}