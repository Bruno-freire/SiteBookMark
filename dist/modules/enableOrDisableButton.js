"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowBtnArray = void 0;
exports.enableOrDisableButton = enableOrDisableButton;
var _addParagraph = require("./addParagraph.js");
var firstArrowAndBtnActivated = 0;
var secondArrowAndBtnActivated = 0;
var thirdArrowAndBtnActivated = 0;
var fourthArrowAndBtnActivated = 0;
var arrowBtnArray = [firstArrowAndBtnActivated, secondArrowAndBtnActivated, thirdArrowAndBtnActivated, fourthArrowAndBtnActivated];
exports.arrowBtnArray = arrowBtnArray;
function enableOrDisableButton(position, namePosition, text) {
  var arrowBtn = arrowBtnArray[position - 1];
  if (arrowBtn == 0) {
    document.getElementById(namePosition + 'Question').appendChild((0, _addParagraph.addParagraph)(text, namePosition));
    arrowBtnArray[position - 1] = 1;
    document.getElementById(namePosition + "ArrowRigth").style.opacity = "1";
    document.getElementById(namePosition + "ArrowLeft").style.opacity = "0";
  } else {
    document.querySelector("#paragraph-" + namePosition).remove();
    document.getElementById(namePosition + "ArrowRigth").style.opacity = "0";
    document.getElementById(namePosition + "ArrowLeft").style.opacity = "1";
    arrowBtnArray[position - 1] = 0;
  }
}