"use strict";

var _removeClass = require("./modules/removeClass.jsz");
var _stringEvent = require("./modules/stringEvent.js");
var _enableOrDisableButton = require("./modules/enableOrDisableButton.js");
var _handlingTextButtons = require("./modules/handlingTextButtons.js");
var btnFt1 = document.getElementById('btn-ft-1');
var btnFt2 = document.getElementById('btn-ft-2');
var btnFt3 = document.getElementById('btn-ft-3');
var btnLinha1 = document.getElementById('btnLinha1');
var btnLinha2 = document.getElementById('btnLinha2');
var btnLinha3 = document.getElementById('btnLinha3');
//firstLineActivated ja vai inicar activated
var firstLineActivated = true;
var secondLineActivated = false;
var thirdLineActivated = false;
btnFt1.addEventListener('click', function (ev) {
  //como btnFt termina com 1, 
  //eu faco a sequencia de botoes
  //na funcao terminando com 2 e depois com 3.
  (0, _removeClass.removeClassActivated)(secondLineActivated, btnLinha2, btnFt2, thirdLineActivated, btnLinha3, btnFt3);
  ev.currentTarget.style.color = "black";
  (0, _stringEvent.stringEvent)(btnLinha1, 'Bookmark in one click', 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.', firstLineActivated);
  firstLineActivated = 1;
});
btnFt2.addEventListener('click', function (ev) {
  (0, _removeClass.removeClassActivated)(firstLineActivated, btnLinha1, btnFt1, thirdLineActivated, btnLinha3, btnFt3);
  ev.currentTarget.style.color = "black";
  (0, _stringEvent.stringEvent)(btnLinha2, 'Intelligent search', 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.', secondLineActivated);
  secondLineActivated = 1;
});
btnFt3.addEventListener('click', function (ev) {
  (0, _removeClass.removeClassActivated)(firstLineActivated, btnLinha1, btnFt1, secondLineActivated, btnLinha2, btnFt2);
  ev.currentTarget.style.color = "black";
  (0, _stringEvent.stringEvent)(btnLinha3, 'Share your bookmarks', 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.');
  thirdLineActivated = 1;
});
document.getElementById('firstBtnQuestion').addEventListener('click', function () {
  (0, _enableOrDisableButton.enableOrDisableButton)(1, 'first', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.");
});
document.getElementById('secondBtnQuestion').addEventListener('click', function () {
  (0, _enableOrDisableButton.enableOrDisableButton)(2, "second", "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.");
});
document.getElementById('thirdBtnQuestion').addEventListener('click', function () {
  (0, _enableOrDisableButton.enableOrDisableButton)(3, "third", "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.");
});
document.getElementById('fourthBtnQuestion').addEventListener('click', function () {
  (0, _enableOrDisableButton.enableOrDisableButton)(4, "fourth", "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.");
});
document.getElementById('hamburguerId').addEventListener('click', _handlingTextButtons.OpenButtonHamburguer);
document.getElementById('closeButton').addEventListener('click', _handlingTextButtons.closeButton);