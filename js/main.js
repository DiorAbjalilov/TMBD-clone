// let menuItem = document.querySelector(".menu_items .item");
// menuItem.addEventListener("mousemove", (e) => {
//   let context = document.querySelector(".contextMenu");
//   context.style.display = "block";
// });
let plusBloon = true;
let plusContext = document.querySelector(".plusIcon");
plusContext.addEventListener("click", () => {
  if (plusBloon) {
    document.querySelector(".plusTitle").style.display = "block";
    plusBloon = false;
  } else {
    plusBloon = true;
    document.querySelector(".plusTitle").style.display = "none";
  }
});

let backg = document.querySelector(".background");
let aBtn = document.querySelectorAll(".selector .anchor");
for (let i = 0; i < aBtn.length; i++) {
  aBtn[i].addEventListener("click", (e) => {
    // console.log(i);
    let mouse = e.target.parentNode.parentNode;
    if (i == 0) {
      aBtn[1].classList.remove("selected");
      aBtn[i].classList.add("selected");
      backg.style.left = "0px";
      backg.style.width = "100%";
    } else if (i == 1) {
      backg.style.left = "85px";
      backg.style.width = "127px";
      aBtn[i].classList.add("selected");
      aBtn[0].classList.remove("selected");
    }
  });
}

window.onload = function () {
  var can = document.getElementById("canvas"),
    spanProcent = document.getElementById("procent"),
    c = can.getContext("2d");

  var posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    procent = 0,
    oneProcent = 360 / 100,
    result = oneProcent * 77;

  c.lineCap = "round";
  arcMove();

  function arcMove() {
    var deegres = 0;
    var acrInterval = setInterval(function () {
      deegres += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = deegres / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      c.strokeStyle = "#204529";
      c.lineWidth = "10";
      c.stroke();

      c.beginPath();
      c.strokeStyle = "#21d07a";
      c.lineWidth = "10";
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + deegres)
      );
      c.stroke();
      if (deegres >= result) clearInterval(acrInterval);
    }, fps);
  }
};
