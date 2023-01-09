"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParagraph = addParagraph;
function addParagraph(text, questionPosition) {
  var paragraph = document.createElement('p');
  paragraph.innerText = text;
  paragraph.id = "paragraph-" + questionPosition;
  paragraph.classList = "paragraph";
  return paragraph;
}