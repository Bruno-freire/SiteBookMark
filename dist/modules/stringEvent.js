"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringEvent = stringEvent;
function stringEvent(btnLinha, title, text) {
  btnLinha.classList.remove('btnLinha');
  btnLinha.classList.add('activated');
  document.getElementById('imgLeftEvent').src = "./images/illustration-features-tab-" + btnLinha.dataset.value + ".svg";
  document.getElementById('titleEvent').innerText = title;
  document.getElementById('textEvent').innerText = text;
}