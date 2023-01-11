(()=>{"use strict";var n={174:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),r=e(645),a=e.n(r)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Rubik&display=swap);"]),a.push([n.id,'@charset "UTF-8";\n:root {\n  --opacity--left: 1;\n  --opacity--rigth: 0;\n}\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  font-family: "rubik";\n}\n\nmain {\n  width: 100%;\n  height: auto;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-top: 40px;\n  margin-bottom: 80px;\n  opacity: 1;\n}\n\n.left-header {\n  position: relative;\n  right: 120px;\n}\n\n.right-header {\n  display: flex;\n  column-gap: 25px;\n}\n.right-header .btn-header {\n  background-color: transparent;\n  border: none;\n  font-family: "Rubik";\n  cursor: pointer;\n  transition: 0.2s;\n}\n.right-header .btn-header:hover {\n  color: hsl(0deg, 94%, 66%);\n  transition: 0.2s;\n}\n.right-header .login {\n  border: 2px solid hsl(0deg, 94%, 66%);\n  background-color: hsl(0deg, 94%, 66%);\n  color: rgb(255, 255, 255);\n  border-radius: 5px;\n  width: 85px;\n  font-size: 13px;\n  transition: 0.2s;\n}\n.right-header .login:hover {\n  transition: 0.2s;\n  color: hsl(0deg, 94%, 66%);\n  background-color: white;\n}\n\nsection {\n  width: 100%;\n}\n\n.firstContent {\n  display: flex;\n  width: 100%;\n  column-gap: 35px;\n  justify-content: center;\n}\n.firstContent .left-bm {\n  display: flex;\n  margin-top: 40px;\n  flex-direction: column;\n  row-gap: 20px;\n}\n.firstContent .left-bm #titleFirstContent {\n  font-size: 45px;\n  width: 403px;\n  color: rgb(43, 43, 43);\n  margin: 0;\n}\n.firstContent .left-bm #textFirstContent {\n  margin: 0;\n  font-size: 18px;\n  color: hsl(229deg, 8%, 60%);\n  text-align: start;\n  width: 450px;\n}\n.firstContent .left-bm .btn-bm {\n  width: auto;\n  height: auto;\n  display: flex;\n  column-gap: 15px;\n}\n.firstContent .left-bm .btn-bm #btn-bm-left {\n  border: 2px solid hsl(231deg, 69%, 60%);\n  background-color: hsl(231deg, 69%, 60%);\n  color: rgb(255, 255, 255);\n  border-radius: 5px;\n  height: 2.2rem;\n  width: 8.8rem;\n  font-family: "Rubik";\n  cursor: pointer;\n  transition: 0.2s;\n  padding: 0px 5px;\n}\n.firstContent .left-bm .btn-bm #btn-bm-left:hover {\n  background-color: transparent;\n  color: hsl(231deg, 69%, 60%);\n  transition: 0.2s;\n}\n.firstContent .left-bm .btn-bm #btn-bm-right {\n  color: hsl(229deg, 7%, 51%);\n  border: 2px solid rgb(248, 248, 248);\n  background-color: rgb(248, 248, 248);\n  border-radius: 5px;\n  height: 2.2rem;\n  width: 8.8rem;\n  font-family: "Rubik";\n  box-shadow: 0px 5px 4px -3px rgb(211, 211, 211);\n  cursor: pointer;\n  transition: 0.2s;\n  padding: 0px 5px;\n}\n.firstContent .left-bm .btn-bm #btn-bm-right:hover {\n  padding: 5px 5px;\n  transition: 0.2s;\n  background-color: transparent;\n  box-shadow: none;\n  color: black;\n  border: 2px solid rgb(0, 0, 0);\n}\n.firstContent .right-bm {\n  width: auto;\n  height: auto;\n}\n.firstContent .right-bm #img-ilust {\n  width: 34.5rem;\n  height: auto;\n}\n.firstContent .right-bm .backgroundBlueRigth {\n  width: 44%;\n  height: 14em;\n  background-color: hsl(231deg, 69%, 60%);\n  border-radius: 20em 0 0 20em;\n  position: absolute;\n  z-index: -1;\n  right: 0em;\n  top: 20em;\n}\n\n.secondContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 60px;\n}\n.secondContent #titleSecondContent {\n  font-size: 30px;\n  font-family: "rubik";\n  color: rgb(43, 43, 43);\n  text-align: center;\n}\n.secondContent #textSecondContent {\n  color: hsl(229deg, 8%, 60%);\n  text-align: center;\n  width: 460px;\n}\n\n.div-btn-ft {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  position: relative;\n  right: 25px;\n}\n.div-btn-ft .btn-ft {\n  border: 0px solid transparent;\n  background-color: transparent;\n  color: hsl(229deg, 8%, 60%);\n  font-size: 16px;\n  cursor: pointer;\n  padding: 0px 5px;\n  width: 10em;\n}\n.div-btn-ft .btn-ft:hover {\n  color: hsl(0deg, 94%, 66%);\n}\n\n.btnLinha {\n  width: 100%;\n  height: auto;\n  border: 0px solid transparent;\n  border-bottom: 2px solid rgb(225, 223, 223);\n  background-color: transparent;\n}\n\n.buttonsEvent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.activated {\n  width: 100%;\n  height: auto;\n  border: 0px solid transparent;\n  border-bottom: 3px solid red;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.txt {\n  display: flex;\n  justify-content: center;\n  column-gap: 80px;\n  margin-top: 50px;\n  position: relative;\n}\n.txt .divLeftEvent #imgLeftEvent {\n  width: 25rem;\n}\n.txt .divLeftEvent .backgroundBlueleft {\n  width: 42%;\n  height: 14em;\n  background-color: hsl(231deg, 69%, 60%);\n  border-radius: 0 20em 20em 0;\n  position: absolute;\n  z-index: -1;\n  left: 0em;\n  top: 4em;\n}\n.txt .divRightEvent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n.txt .divRightEvent #titleEvent {\n  font-size: 30px;\n  font-family: "rubik";\n}\n.txt .divRightEvent #textEvent {\n  color: hsl(229deg, 8%, 60%);\n  text-align: start;\n  width: 400px;\n}\n.txt .divRightEvent #btnInfo {\n  border: 2px solid hsl(231deg, 69%, 60%);\n  background-color: hsl(231deg, 69%, 60%);\n  color: rgb(255, 255, 255);\n  border-radius: 5px;\n  height: 2.2rem;\n  width: 6rem;\n  font-family: "rubik";\n  cursor: pointer;\n  margin-top: 12px;\n  transition: 0.2s;\n  padding: 0px 5px;\n}\n.txt .divRightEvent #btnInfo:hover {\n  background-color: transparent;\n  color: hsl(231deg, 69%, 60%);\n  transition: 0.2s;\n}\n\n.thirdContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 125px;\n}\n.thirdContent #titleThirdContent {\n  font-size: 26px;\n  font-family: "Rubik";\n}\n.thirdContent #textThirdContent {\n  color: hsl(229deg, 8%, 60%);\n  text-align: center;\n  width: 500px;\n}\n.thirdContent .divCards {\n  display: flex;\n  gap: 40px;\n}\n.thirdContent .divCards #secondCard {\n  position: relative;\n  top: 40px;\n}\n.thirdContent .divCards #thirdCard {\n  position: relative;\n  top: 80px;\n}\n.thirdContent .divCards .cards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 13rem;\n  height: 16rem;\n  margin-top: 40px;\n  border: 2px solid rgb(248, 248, 248);\n  background-color: rgb(248, 248, 248);\n  row-gap: 5px;\n  border-radius: 10px;\n  box-shadow: 0px 5px 10px -3px rgb(197, 204, 226);\n}\n.thirdContent .divCards .cards .imgCards {\n  width: 4.5rem;\n}\n.thirdContent .divCards .cards .titleCards {\n  font-size: 14px;\n  font-family: "Rubik";\n}\n.thirdContent .divCards .cards .textCards {\n  margin: 0;\n  margin-bottom: 10px;\n  font-size: 12px;\n  font-family: "Rubik";\n  color: hsl(229deg, 8%, 60%);\n  text-align: center;\n  width: auto;\n}\n.thirdContent .divCards .cards .dots {\n  width: 100%;\n  margin: 10px;\n}\n.thirdContent .divCards .cards .btnCards {\n  border: 2px solid hsl(231deg, 69%, 60%);\n  background-color: hsl(231deg, 69%, 60%);\n  color: rgb(255, 255, 255);\n  border-radius: 5px;\n  height: 2.2rem;\n  width: 85%;\n  font-family: "Rubik";\n  cursor: pointer;\n  transition: 0.2s;\n  padding: 0px 5px;\n}\n.thirdContent .divCards .cards .btnCards:hover {\n  background-color: transparent;\n  color: hsl(231deg, 69%, 60%);\n  transition: 0.2s;\n}\n\n.fourthContent {\n  display: flex;\n  align-items: center;\n  margin-top: 180px;\n  flex-direction: column;\n  height: auto;\n}\n.fourthContent #titleFourthContent {\n  font-size: 28px;\n  font-family: "Rubik";\n}\n.fourthContent #textFourthContent {\n  font-family: "Rubik";\n  font-size: 17px;\n  color: hsl(229deg, 8%, 60%);\n  text-align: center;\n  width: 500px;\n}\n.fourthContent .questions {\n  display: flex;\n  flex-direction: column;\n  width: 28rem;\n}\n.fourthContent .questions .boxQuestions {\n  width: 100%;\n}\n.fourthContent .questions .btnQuestions {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  border-top: 1px solid rgb(225, 225, 225);\n  border-bottom: 1px solid rgb(225, 225, 225);\n  cursor: pointer;\n}\n.fourthContent .questions .btnQuestions .leftArrow {\n  position: relative;\n  left: 34px;\n  opacity: var(--opacity--left);\n}\n.fourthContent .questions .btnQuestions .rigthArrow {\n  opacity: var(--opacity--rigth);\n}\n.fourthContent .questions .titleQuestion {\n  font-family: "rubik";\n  font-size: 17px;\n}\n.fourthContent .questions .titleQuestion:hover {\n  color: hsl(0deg, 94%, 66%);\n}\n.fourthContent .questions .paragraph {\n  font-size: 13px;\n  word-spacing: 1px;\n  line-height: 1.59rem;\n  padding-left: 2px;\n  font-family: "rubik";\n  color: rgb(130, 130, 130);\n  text-align: start;\n  width: auto;\n}\n.fourthContent #moreInfo {\n  border: 2px solid hsl(231deg, 69%, 60%);\n  background-color: hsl(231deg, 69%, 60%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: rgb(255, 255, 255);\n  border-radius: 5px;\n  height: 2.2rem;\n  width: 6rem;\n  font-family: "Rubik";\n  cursor: pointer;\n  margin-top: 48px;\n  margin-bottom: 120px;\n  padding: 0px 5px;\n  transition: 0.2s;\n}\n.fourthContent #moreInfo:hover {\n  background-color: transparent;\n  color: hsl(231deg, 69%, 60%);\n  transition: 0.2s;\n}\n\n#secondSection {\n  background-color: hsl(231deg, 69%, 60%);\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n}\n#secondSection .contentSecondSection {\n  margin: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 70px;\n}\n#secondSection #firstTextSecondSection, #secondSection #secondTextSecondSection {\n  text-align: center;\n  color: rgb(255, 255, 255);\n}\n#secondSection #firstTextSecondSection {\n  font-family: "garamond";\n  font-size: 1.5rem;\n}\n#secondSection #secondTextSecondSection {\n  font-size: 26px;\n  width: 85%;\n  margin-top: 10px;\n  font-family: "rubik";\n}\n#secondSection .btnSecondSection {\n  display: flex;\n  justify-content: center;\n  column-gap: 10px;\n}\n#secondSection .btnSecondSection #email {\n  width: 250px;\n  height: 25px;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  padding: 6px 15px;\n  font-family: "rubik";\n  box-shadow: 0 0 0 0;\n  position: relative;\n}\n#secondSection .btnSecondSection #email:focus {\n  outline-style: none;\n}\n#secondSection .btnSecondSection #email::placeholder {\n  color: hsl(229deg, 8%, 60%);\n}\n#secondSection .btnSecondSection #email:valid {\n  border: none;\n  border-style: solid;\n  border-color: rgb(4, 174, 4);\n  color: rgb(0, 0, 0);\n}\n#secondSection .btnSecondSection #email:valid + span::before {\n  content: "✓";\n  color: rgb(4, 174, 4);\n  position: relative;\n  right: 2rem;\n  top: 0.45rem;\n  margin: -8px;\n}\n#secondSection .btnSecondSection #contactUs {\n  background-color: hsl(0deg, 94%, 66%);\n  color: rgb(255, 255, 255);\n  border: 2px solid hsl(0deg, 94%, 66%);\n  border-radius: 4px;\n  width: 6rem;\n  padding: 10px;\n  font-size: 12px;\n  font-family: "rubik";\n  cursor: pointer;\n  transition: 0.3s;\n  padding: 0px 5px;\n}\n#secondSection .btnSecondSection #contactUs:hover {\n  background-color: rgb(255, 252, 252);\n  color: hsl(0deg, 94%, 66%);\n  transition: 0.3s;\n}\n\n.secondContentSecondSection {\n  display: flex;\n  background-color: hsl(229deg, 31%, 21%);\n  justify-content: space-around;\n}\n.secondContentSecondSection .leftFooter {\n  display: flex;\n  column-gap: 25px;\n  position: relative;\n  right: 3.5rem;\n}\n.secondContentSecondSection .leftFooter .imgLeftFooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  color: rgb(255, 255, 255);\n}\n.secondContentSecondSection .midFooter {\n  display: flex;\n  column-gap: 40px;\n  position: relative;\n  right: 3.2rem;\n}\n.secondContentSecondSection .midFooter .textLeftFooter {\n  color: rgb(255, 255, 255);\n  font-family: "rubik";\n  cursor: pointer;\n  padding: 0px 5px;\n}\n.secondContentSecondSection .midFooter .textLeftFooter:hover {\n  transition: 0.2s;\n  color: hsl(229deg, 8%, 60%);\n}\n.secondContentSecondSection .rigthFooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 25px;\n  transition: 0.2s;\n}\n.secondContentSecondSection .rigthFooter :hover {\n  cursor: pointer;\n  transition: 0.2s;\n  filter: invert(50%);\n}\n\n.headerHamburguer {\n  opacity: 0;\n  position: relative;\n}\n\n.eventClickHamburguer {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(229deg, 31%, 21%);\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  opacity: 0.95;\n  position: fixed;\n  right: 3000px;\n  transition: 0.3s;\n}\n.eventClickHamburguer .eventHamburguer {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 14em;\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2em;\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer .eventTop {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  column-gap: 14%;\n  color: rgb(255, 255, 255);\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer .eventTop > img {\n  height: 2em;\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer .eventTop > p {\n  font-size: 32px;\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer .eventTopButtons {\n  display: flex;\n  flex-direction: column;\n  width: auto;\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer .eventTopButtons .buttonsEventTop {\n  background-color: transparent;\n  color: rgb(210, 210, 210);\n  border: none;\n  border-top: 1px solid hsl(231deg, 29%, 46%);\n  border-bottom: 1px solid hsl(231deg, 29%, 46%);\n  width: 15em;\n  font-size: 21px;\n  letter-spacing: 0.2em;\n  padding: 0.8em;\n  font-family: "rubik";\n}\n.eventClickHamburguer .eventHamburguer .eventTopHamburguer .eventTopButtons .buttonsEventTop:hover {\n  margin: -1px 0px;\n  transition: 0.1s;\n  border: 2px solid rgb(255, 255, 255);\n}\n.eventClickHamburguer .eventHamburguer .eventFooterIcons {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n@media (min-width: 1500px) {\n  .txt .divLeftEvent .backgroundBlueleft {\n    display: none;\n  }\n  .firstContent .right-bm .backgroundBlueRigth {\n    display: none;\n  }\n}\n@media (max-width: 1025px) {\n  header {\n    justify-content: space-around;\n  }\n  header .left-header {\n    position: initial;\n  }\n  .firstContent {\n    column-gap: 0;\n  }\n  .firstContent .right-bm #img-ilust {\n    width: 30rem;\n  }\n}\n@media (max-width: 930px) {\n  .firstContent {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n  .firstContent .left-bm {\n    align-items: center;\n    row-gap: 35px;\n  }\n  .firstContent .left-bm #titleFirstContent {\n    width: auto;\n    text-align: center;\n  }\n  .firstContent .left-bm #textFirstContent {\n    text-align: center;\n    width: 80%;\n  }\n  .firstContent .left-bm .btn-bm {\n    align-items: center;\n    justify-content: center;\n  }\n  .firstContent .right-bm .backgroundBlueRigth {\n    top: 16em;\n    width: 50%;\n  }\n  .txt {\n    flex-direction: column;\n    align-items: center;\n  }\n  .txt .divLeftEvent {\n    margin-bottom: 2em;\n  }\n  .txt .divRightEvent {\n    align-items: center;\n    row-gap: 30px;\n  }\n  .txt .divRightEvent #textEvent {\n    text-align: center;\n    width: 450px;\n  }\n  .txt .divRightEvent #btnInfo {\n    width: 250px;\n  }\n  .secondContentSecondSection .leftFooter {\n    position: initial;\n  }\n  .fourthContent #moreInfo {\n    width: 250px;\n  }\n}\n@media (max-width: 700px) {\n  .divCards {\n    flex-direction: column;\n  }\n}\n@media (max-width: 620px) {\n  .firstContent .right-bm {\n    margin-bottom: 2em;\n  }\n  header {\n    display: none;\n  }\n  .headerHamburguer {\n    opacity: 1;\n    margin-bottom: 4em;\n    padding-top: 3em;\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n  }\n  .headerHamburguer .leftHeaderHamburguer {\n    position: initial;\n  }\n  .headerHamburguer .hamburguer > * {\n    cursor: pointer;\n  }\n  .firstContent .left-bm #titleFirstContent {\n    width: 93%;\n  }\n  .firstContent .right-bm #img-ilust {\n    width: 28rem;\n  }\n  .secondContent #textSecondContent {\n    width: 85%;\n    margin-bottom: 4em;\n  }\n  .txt .divRightEvent #textEvent {\n    width: 90%;\n  }\n  .div-btn-ft {\n    position: initial;\n  }\n  .linha {\n    display: flex;\n    position: relative;\n    left: 0.8em;\n    width: 96%;\n  }\n  .linha > * {\n    width: 100% !important;\n  }\n  .txt .divLeftEvent {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .txt .divLeftEvent .backgroundBlueleft {\n    width: 60%;\n  }\n  .txt .divLeftEvent #imgLeftEvent {\n    width: 90%;\n  }\n  .thirdContent #textThirdContent {\n    width: 90%;\n  }\n  .fourthContent #textFourthContent {\n    width: 90%;\n  }\n  .fourthContent .questions {\n    width: 95%;\n  }\n  .secondContentSecondSection {\n    flex-direction: column;\n    align-items: center;\n  }\n  .secondContentSecondSection .midFooter {\n    position: initial;\n    flex-direction: column;\n    text-align: center;\n  }\n  .secondContentSecondSection .leftFooter .imgLeftFooter {\n    position: relative;\n    left: 60px;\n    margin-top: 25px;\n  }\n  .secondContentSecondSection .rigthFooter {\n    margin-bottom: 25px;\n  }\n}\n@media (max-width: 484px) {\n  .firstContent .right-bm .backgroundBlueRigth {\n    top: 12em;\n    border-radius: 0em 0em 0em 5em;\n    height: 12em;\n  }\n  .firstContent .right-bm {\n    display: flex;\n    justify-content: center;\n  }\n  .firstContent .right-bm #img-ilust {\n    width: 90%;\n    height: 15em;\n  }\n  .div-btn-ft {\n    flex-direction: column;\n    align-items: center;\n    row-gap: 25px;\n    top: 5em;\n    width: auto;\n  }\n  .linha {\n    opacity: 0;\n  }\n  .buttonsEvent {\n    width: 13em;\n  }\n  .contentButtonsFt {\n    width: 70%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 1em;\n  }\n}\n@media (max-width: 426px) {\n  .txt .divLeftEvent {\n    margin-bottom: 3em;\n  }\n  .txt .divLeftEvent .backgroundBlueleft {\n    border-radius: 0em 0em 5em 0em;\n    height: 12em;\n  }\n  #secondSection .btnSecondSection {\n    flex-direction: column;\n    row-gap: 10px;\n  }\n  #secondSection .btnSecondSection #contactUs {\n    width: 100%;\n    height: 3em;\n  }\n  #secondSection .btnSecondSection #email:valid + span::before {\n    left: 265px;\n    right: 0;\n    top: -44px;\n  }\n  .fourthContent .questions .titleQuestion {\n    text-align: start;\n    max-width: 10em;\n  }\n  .firstContent .left-bm #titleFirstContent {\n    width: 95%;\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 380px) {\n  .firstContent .left-bm #titleFirstContent {\n    width: 99%;\n    font-size: 1.8em;\n  }\n  .txt .divLeftEvent .backgroundBlueleft {\n    height: 10em;\n  }\n  .fourthContent #titleFourthContent {\n    text-align: center;\n  }\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var d=n[s],l=o.base?d[0]+o.base:d[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var p=e(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=i(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=e(r[a]);t[s].references--}for(var d=o(n,i),l=0;l<r.length;l++){var c=e(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=d}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),i=e.n(o),r=e(569),a=e.n(r),s=e(565),d=e.n(s),l=e(216),c=e.n(l),u=e(589),p=e.n(u),m=e(174),g={};function h(n,t,e,o,i,r){1==n&&(t.classList.remove("activated"),t.classList.add("btnLinha"),e.style.color="hsl(229deg, 8%, 60%)",n=!1),1==o&&(i.classList.remove("activated"),i.classList.add("btnLinha"),r.style.color="hsl(229deg, 8%, 60%)",o=!1)}function f(n,t,e){n.classList.remove("btnLinha"),n.classList.add("activated"),document.getElementById("imgLeftEvent").src="./images/illustration-features-tab-"+n.dataset.value+".svg",document.getElementById("titleEvent").innerText=t,document.getElementById("textEvent").innerText=e}g.styleTagTransform=p(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b=[0,0,0,0];function x(n,t,e){0==b[n-1]?(document.getElementById(t+"Question").appendChild(function(n,t){const e=document.createElement("p");return e.innerText=n,e.id="paragraph-"+t,e.classList="paragraph",e}(e,t)),b[n-1]=1,document.getElementById(t+"ArrowRigth").style.opacity="1",document.getElementById(t+"ArrowLeft").style.opacity="0"):(document.querySelector("#paragraph-"+t).remove(),document.getElementById(t+"ArrowRigth").style.opacity="0",document.getElementById(t+"ArrowLeft").style.opacity="1",b[n-1]=0)}const v=document.getElementById("hamburguerActivated"),y=document.getElementById("headerHamburguerId"),C=document.getElementById("btn-ft-1"),w=document.getElementById("btn-ft-2"),k=document.getElementById("btn-ft-3"),S=document.getElementById("btnLinha1"),E=document.getElementById("btnLinha2"),L=document.getElementById("btnLinha3");let B=!0,I=!1,T=!1;C.addEventListener("click",(function(n){h(I,E,w,T,L,k),n.currentTarget.style.color="black",f(S,"Bookmark in one click","Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."),B=1})),w.addEventListener("click",(function(n){h(B,S,C,T,L,k),n.currentTarget.style.color="black",f(E,"Intelligent search","Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."),I=1})),k.addEventListener("click",(function(n){h(B,S,C,I,E,w),n.currentTarget.style.color="black",f(L,"Share your bookmarks","Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."),T=1})),document.getElementById("firstBtnQuestion").addEventListener("click",(function(){x(1,"first","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.")})),document.getElementById("secondBtnQuestion").addEventListener("click",(function(){x(2,"second","Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.")})),document.getElementById("thirdBtnQuestion").addEventListener("click",(function(){x(3,"third","Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.")})),document.getElementById("fourthBtnQuestion").addEventListener("click",(function(){x(4,"fourth","Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.")})),document.getElementById("hamburguerId").addEventListener("click",(function(){v.style.right="0",y.style.right="510px",document.documentElement.style.overflow="hidden",window.scrollTo(0,0)})),document.getElementById("closeButton").addEventListener("click",(function(){y.style.right="0",v.style.right="3000px",document.documentElement.style.overflow="visible"}))})()})();