function playIt(){
    document.getElementById("intro-music").play();
    document.getElementById("playButton").remove();
    setTimeout(firstBackground, 3000)
    setTimeout(moveAngel1, 4000);
    setTimeout(secondBackground, 7000)
    setTimeout(moveTree, 7700)
    setTimeout(thirdBackround, 15000)
    setTimeout(forthBackground, 15300)
    setTimeout(fifthBackground, 15500)
    setTimeout(forthBackground, 15700)
    setTimeout(fifthBackground, 15900)
    setTimeout(zeroBackground, 16000)
    setTimeout(showTitle, 17000);
    setTimeout(sixthBackground, 23000);
    setTimeout(seventhBackground, 23500)
    setTimeout(showShinji, 24500)
    setTimeout(showDarkShinji, 27000);
    setTimeout(moveAsuka, 30000);
    setTimeout(moveRei, 30000);
    setTimeout(eightBackground, 38000);
    setTimeout(showArm, 38200); 
    setTimeout(showTree2, 39000); 
    setTimeout(showSkyMisato, 41000); 
    setTimeout(showDarkMisato, 41000); 
    setTimeout(showSadMisato, 45000); 
    setTimeout(showSadShinji, 45000); 
    setTimeout(showReiWindow, 48000); 
    setTimeout(ninthBackground, 49500); 
    setTimeout(tenthBackground, 50000); 
    setTimeout(eleventhBackground, 50500); 
    setTimeout(twelfthBackground, 51000); 
    setTimeout(thirteenthBackground, 51500); 
    setTimeout(fifteenthBackground, 52000); 
    setTimeout(showShinjiCockpit, 52500); 
    setTimeout(showShinjiCockpitFace, 55000); 
    setTimeout(showMech1, 57000); 
    setTimeout(sixteenthBackground, 58500); 
    setTimeout(seventeenthBackground, 59000); 
    setTimeout(eighteenthBackground, 59500); 
    setTimeout(nineteenthBackground, 60000); 
    setTimeout(showMech2, 60500); 
    setTimeout(showMech3, 62500); 
    setTimeout(twentiethBackground, 66000); 
    setTimeout(twentiethBackground2, 66500); 
    setTimeout(twentiethBackground3, 67000); 
    setTimeout(twentiethBackground4, 67500); 
    setTimeout(twentiethBackground5, 68000); 
    setTimeout(twentiethBackground6, 68500); 
    setTimeout(twentiethBackground7, 69000); 
    setTimeout(twentiethBackground8, 69500); 
    setTimeout(twentiethBackground9, 70000); 
    setTimeout(twentiethBackground10, 70500); 
    setTimeout(twentiethBackground11, 71000); 
    setTimeout(twentiethBackground12, 71500); 
    setTimeout(twentiethBackground13, 72000); 
    setTimeout(twentiethBackground14, 72500); 
    setTimeout(twentiethBackground15, 73000); 
    setTimeout(twentiethBackground16, 73500); 
    setTimeout(twentiethBackground17, 74000); 
    setTimeout(twentiethBackground18, 74500); 
    setTimeout(twentiethBackground19, 75000); 
    setTimeout(twentiethBackground20, 75500); 
    setTimeout(twentiethBackground21, 76000); 
    setTimeout(twentiethBackground22, 76500); 
    setTimeout(twentiethBackground23, 77000); 
    setTimeout(twentiethBackground24, 77500); 
    setTimeout(twentiethBackground25, 78000); 
    setTimeout(twentiethBackground26, 78500); 
    setTimeout(twentiethBackground27, 79000); 
    setTimeout(twentiethBackground28, 79500); 
    setTimeout(twentiethBackground29, 80000); 
    setTimeout(twentiethBackground30, 80500); 
    setTimeout(twentiethBackground31, 81000); 
    setTimeout(twentiethBackground32, 81500); 
    setTimeout(twentiethBackground33, 82000); 
    setTimeout(showMech4, 82500); 
    setTimeout(showEndShinji, 86500); 
    setTimeout(end, 90000); 
}
function zeroBackground() {
  document.body.style.backgroundImage = "url('./images/black-screen.jpg')";
}
function firstBackground() {
    document.body.style.backgroundImage = "url('./images/red-screen-start.png')";
}
function secondBackground() {
    document.getElementById("angel1").remove();
    document.body.style.backgroundImage = "url('./images/blue-screen.png')";
}
function thirdBackround(){
      document.getElementById('tree').remove();
      document.body.style.backgroundImage = "url('./images/White_full.png')";
}
function forthBackground(){
      document.body.style.backgroundImage = "url('./images/flash-of-gray1.png')";
}
function fifthBackground() {
    document.body.style.backgroundImage = "url('./images/flash-of-gray2.png')";
}
function sixthBackground(){
    document.getElementById("title").remove();
    document.body.style.backgroundImage = "url('./images/White_full.png'')";
}
function seventhBackground() {
    document.body.style.backgroundImage = "url('./images/blue-sky.png')";
}
function eightBackground(){
    document.getElementById("sky-shinji").remove();
    document.body.style.backgroundImage = "url('./images/orange-sky.png')";
}
function ninthBackground(){
    document.getElementById("sad-shinji").remove();
    document.getElementById("rei-eye").style.display = "block";
}
function tenthBackground(){
  document.getElementById("rei-window").remove();
  document.body.style.backgroundImage = "url('./images/flash-card1.png')";
}
function eleventhBackground() {
  document.body.style.backgroundImage = "url('./images/flash-card2.png')";
}
function twelfthBackground() {
  document.body.style.backgroundImage = "url('./images/flash-card3.png')";
}
function thirteenthBackground() {
  document.body.style.backgroundImage = "url('./images/flash-card4.png')";
}
function fifteenthBackground() {
  document.body.style.backgroundImage = "url('./images/flash-card5.png')";
}
function sixteenthBackground() {
  document.getElementById("mech1").remove();
  document.body.style.backgroundImage = "url('./images/flash-face1.png')";
}
function seventeenthBackground() {
  document.body.style.backgroundImage = "url('./images/flash-face2.png')";
}
function eighteenthBackground() {
  document.body.style.backgroundImage = "url('./images/flash-face3.png')";
}
function nineteenthBackground() {
  document.body.style.backgroundImage = "url('./images/flash-face4.png')";
}
function twentiethBackground() {
  document.getElementById("mech3").remove();
  document.body.style.backgroundImage = "url('./images/flash-image (1).png')";
}
function twentiethBackground2() {
  document.body.style.backgroundImage = "url('./images/flash-image (2).png')";
}
function twentiethBackground3() {
  document.body.style.backgroundImage = "url('./images/flash-image (3).png')";
}
function twentiethBackground4() {
  document.body.style.backgroundImage = "url('./images/flash-image (4).png')";
}
function twentiethBackground5() {
  document.body.style.backgroundImage = "url('./images/flash-image (5).png')";
}
function twentiethBackground6() {
  document.body.style.backgroundImage = "url('./images/flash-image (6).png')";
}
function twentiethBackground7() {
  document.body.style.backgroundImage = "url('./images/flash-image (7).png')";
}
function twentiethBackground8() {
  document.body.style.backgroundImage = "url('./images/flash-image (8).png')";
}
function twentiethBackground9() {
  document.body.style.backgroundImage = "url('./images/flash-image (9).png')";
}
function twentiethBackground10() {
  document.body.style.backgroundImage = "url('./images/flash-image (10).png')";
}
function twentiethBackground11() {
  document.body.style.backgroundImage = "url('./images/flash-image (11).png')";
}
function twentiethBackground12() {
  document.body.style.backgroundImage = "url('./images/flash-image (12).png')";
}
function twentiethBackground13() {
  document.body.style.backgroundImage = "url('./images/flash-image (13).png')";
}
function twentiethBackground14() {
  document.body.style.backgroundImage = "url('./images/flash-image (14).png')";
}
function twentiethBackground15() {
  document.body.style.backgroundImage = "url('./images/flash-image (15).png')";
}
function twentiethBackground16() {
  document.body.style.backgroundImage = "url('./images/flash-image (16).png')";
}
function twentiethBackground17() {
  document.body.style.backgroundImage = "url('./images/flash-image (17).png')";
}
function twentiethBackground18() {
  document.body.style.backgroundImage = "url('./images/flash-image (18).png')";
}
function twentiethBackground19() {
  document.body.style.backgroundImage = "url('./images/flash-image (19).png')";
}
function twentiethBackground20() {
  document.body.style.backgroundImage = "url('./images/flash-image (20).png')";
}
function twentiethBackground21() {
  document.body.style.backgroundImage = "url('./images/flash-image (21).png')";
}
function twentiethBackground22() {
  document.body.style.backgroundImage = "url('./images/flash-image (22).png')";
}
function twentiethBackground23() {
  document.body.style.backgroundImage = "url('./images/flash-image (23).png')";
}
function twentiethBackground24() {
  document.body.style.backgroundImage = "url('./images/flash-image (24).png')";
}
function twentiethBackground25() {
  document.body.style.backgroundImage = "url('./images/flash-image (25).png')";
}
function twentiethBackground26() {
  document.body.style.backgroundImage = "url('./images/flash-image (26).png')";
}
function twentiethBackground27() {
  document.body.style.backgroundImage = "url('./images/flash-image (27).png')";
}
function twentiethBackground28() {
  document.body.style.backgroundImage = "url('./images/flash-image (28).png')";
}
function twentiethBackground29() {
  document.body.style.backgroundImage = "url('./images/flash-image (29).png')";
}
function twentiethBackground30() {
  document.body.style.backgroundImage = "url('./images/flash-image (30).png')";
}
function twentiethBackground31() {
  document.body.style.backgroundImage = "url('./images/flash-image (31).png')";
}
function twentiethBackground32() {
  document.body.style.backgroundImage = "url('./images/flash-image (32).png')";
}
function twentiethBackground33() {
  document.body.style.backgroundImage = "url('./images/flash-image (33).png')";
}
function end(){
  document.getElementById("mech4").remove();
  document.getElementById("end-shinji").remove();
  document.body.style.backgroundImage = "url('./images/end.png')";
}

function moveAngel1() {
  let id = null;
  const elem = document.getElementById("angel1");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + "px";
    }
  }
}

function moveTree() {
  let id = null;
  const elem = document.getElementById("tree");
  let pos = -1300;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 2000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
    }
  }
}

function showTitle(){
      document.getElementById('title').style.display = "block";
}

function showShinji() {
  document.getElementById("sky-shinji").style.display = "block";
}
function showDarkShinji() {
  document.getElementById("dark-shinji").style.display = "block";
}

function moveAsuka(){
  document.getElementById("dark-asuka").style.display = "block";
    let id = null;
    const elem = document.getElementById("dark-asuka");
    let pos = -2800;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 2000) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
      }
    }
}
function moveRei() {
    document.getElementById("dark-rei").style.display = "block";
  let id = null;
  const elem = document.getElementById("dark-rei");
  let pos = -2800;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 2000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "px";
    }
  }
}

function showArm() {
  document.getElementById("arm").style.display = "block";
}
function showTree2() {
  document.getElementById("tree2").style.display = "block";
}
function showSkyMisato(){
  document.getElementById("sky-misato").style.display = "block"; 
}
function showDarkMisato() {
  document.getElementById("dark-misato").style.display = "block";
}
function showSadMisato() {
  document.getElementById("sad-misato").style.display = "block";
}
function showSadShinji() {
  document.getElementById("sad-shinji").style.display = "block";
}
function showReiWindow() {
  document.getElementById("rei-window").style.display = "block";
}
function showShinjiCockpit() {
  document.getElementById("shinji-cockpit").style.display = "block";
}
function showShinjiCockpitFace() {
  document.getElementById("shinji-cockpit-face").style.display = "block";
}
function showMech1() {
  document.getElementById("shinji-cockpit").remove();
  document.getElementById("shinji-cockpit-face").remove();
  document.body.style.backgroundImage = "url('./images/red-screen-start.png')";
  document.getElementById("mech1").style.display = "block";
}
function showMech2(){
    document.body.style.backgroundImage = "url('./images/red-screen-start.png')";
    document.getElementById("mech2").style.display = "block";
}
function showMech3() {
  document.getElementById("mech3").style.display = "block";
}
function showMech4() {
  document.body.style.backgroundImage = "url('./images/red-screen-start.png')";
  document.getElementById("mech4").style.display = "block";
}
function showEndShinji() {
  document.getElementById("end-shinji").style.display = "block";
}