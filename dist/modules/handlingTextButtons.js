"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenButtonHamburguer = OpenButtonHamburguer;
exports.closeButton = closeButton;
var hamburguerActivated = document.getElementById('hamburguerActivated');
var headerHamburguer = document.getElementById('headerHamburguerId');
function closeButton() {
  headerHamburguer.style.right = '0';
  hamburguerActivated.style.right = '3000px';
  document.documentElement.style.overflow = 'visible';
}
function OpenButtonHamburguer() {
  hamburguerActivated.style.right = '0';
  headerHamburguer.style.right = '510px';
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}