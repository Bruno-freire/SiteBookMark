"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeClassActivated = removeClassActivated;
function removeClassActivated(firstLine, btnLinha1, btnFt1, secondLine, btnLinha2, btnFt2) {
  if (firstLine == true) {
    btnLinha1.classList.remove('activated');
    btnLinha1.classList.add('btnLinha');
    btnFt1.style.color = 'hsl(229deg, 8%, 60%)';
    firstLine = false;
  }
  if (secondLine == true) {
    btnLinha2.classList.remove('activated');
    btnLinha2.classList.add('btnLinha');
    btnFt2.style.color = 'hsl(229deg, 8%, 60%)';
    secondLine = false;
  }
}