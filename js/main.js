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

let backg2 = document.querySelectorAll(".background")[1];
let aBtn2 = document.querySelectorAll(".bg_image .selector .anchor");
for (let i = 0; i < aBtn2.length; i++) {
  aBtn2[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (i == 0) {
      aBtn2[1].classList.remove("selected");
      aBtn2[i].classList.add("selected");
      backg2.style.left = "0px";
      backg2.style.width = "100%";
    } else if (i == 1) {
      backg2.style.left = "85px";
      backg2.style.width = "127px";
      aBtn2[i].classList.add("selected");
      aBtn2[0].classList.remove("selected");
    }
  });
}

let backg = document.querySelector(".background");
let aBtn = document.querySelectorAll(".selector .anchor");
for (let i = 0; i < aBtn.length; i++) {
  aBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
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
let backg3 = document.querySelectorAll(".background")[2];
let aBtn3 = document.querySelectorAll(".trending .selector .anchor");
for (let i = 0; i < aBtn3.length; i++) {
  aBtn3[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (i == 0) {
      aBtn3[1].classList.remove("selected");
      aBtn3[i].classList.add("selected");
      backg3.style.left = "0px";
      backg3.style.width = "100%";
    } else if (i == 1) {
      backg3.style.left = "85px";
      backg3.style.width = "120px";
      aBtn3[i].classList.add("selected");
      aBtn3[0].classList.remove("selected");
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
$(".p80 .bar").circleProgress({
  value: 0.8,
});
$(".p84 .bar").circleProgress({
  value: 0.84,
});
$(".p79 .bar").circleProgress({
  value: 0.79,
});
$(".p73 .bar").circleProgress({
  value: 0.73,
});
$(".p67 .bar").circleProgress({
  value: 0.67,
  fill: { color: "#c8ca2e" },
});

let imgTreler = document.querySelectorAll(".style_2 .image .wrapper");
for (let j = 0; j < imgTreler.length; j++) {
  imgTreler[j].addEventListener("mouseover", (e) => {
    let classLis = e.target.parentElement.classList[1];
    let aa = String("." + e.target.parentElement.classList[1] + " " + "img");
    let urlImg = document.querySelectorAll(aa);
    let urlStr = String(urlImg[j].src);
    let backgImg = document.querySelector(".bg_image.video");
    backgImg.style.backgroundImage = "url(" + urlStr + ")";
  });
}

let hederMenu = document.querySelector(".hederMenu");
window.addEventListener("scroll", (e) => {
  const scrol = window.scrollY;
  if (scrol >= 90) {
    hederMenu.style.top = "-100px";
    hederMenu.style.transition = "0.4s";
  } else if (scrol <= 180) {
    hederMenu.style.top = "0px";
  }
});
