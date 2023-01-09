import { addParagraph } from "./addParagraph.js"
let firstArrowAndBtnActivated = 0
let secondArrowAndBtnActivated = 0
let thirdArrowAndBtnActivated = 0
let fourthArrowAndBtnActivated = 0
export const arrowBtnArray = [firstArrowAndBtnActivated, secondArrowAndBtnActivated, thirdArrowAndBtnActivated, fourthArrowAndBtnActivated]

export function enableOrDisableButton(position,namePosition,text){
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