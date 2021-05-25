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

let options = {
  startAngle: -1.55,
  size: 35,
  value: 0.77,
  fill: { color: "#21d07a" },
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".p86 .bar").circleProgress({
  value: 0.86,
});
$(".p82 .bar").circleProgress({
  value: 0.82,
});
$(".p85 .bar").circleProgress({
  value: 0.85,
});
