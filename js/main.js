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

// data img
const data = [
  {
    img_url: "../imgs/imgRand/imgRand.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand1.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand2.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand3.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand4.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand5.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand6.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand7.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand8.jpg",
  },
  {
    img_url: "../imgs/imgRand/imgRand9.jpg",
  },
];

let bannerImg = document.querySelector("section.new_index");

window.addEventListener("load", () => {
  let rand = Math.floor(Math.random() * 10);
  let imgs = data[rand].img_url;
  bannerImg.style.backgroundImage =
    "linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0) 100%), url(" +
    imgs +
    ")";
});

const arrImg = [
  {
    id: 0,
    img_url: "../imgs/inFilimIMg/infilim.jpg",
    text: "Mortal Kombat",
    title: "Apr 23, 2021",
  },
  {
    id: 1,
    img_url: "../imgs/inFilimIMg/infilim1.jpg",
    text: "Those Who Wish Me Deadt",
    title: "May 14, 2021",
  },
  {
    id: 2,
    img_url: "../imgs/inFilimIMg/infilim2.jpg",
    text: "Cruella",
    title: "May 28, 2021",
  },
  {
    id: 3,
    img_url: "../imgs/inFilimIMg/infilim3.jpg",
    text: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    title: "Apr 23, 2021",
  },
  {
    id: 4,
    img_url: "../imgs/inFilimIMg/infilim4.jpg",
    text: "Wrath of Man",
    title: "May 07, 2021",
  },
  {
    id: 5,
    img_url: "../imgs/inFilimIMg/infilim5.jpg",
    text: "Benny Loves You",
    title: "May 07, 2021",
  },
  {
    id: 6,
    img_url: "../imgs/inFilimIMg/infilim6.jpg",
    text: "A Quiet Place Part II",
    title: "May 28, 2021",
  },
  {
    id: 7,
    img_url: "../imgs/inFilimIMg/infilim7.jpg",
    text: "Spiral: From the Book of Saw",
    title: "May 14, 2021",
  },
  {
    id: 8,
    img_url: "../imgs/inFilimIMg/infilim8.jpg",
    text: "Endangered Species",
    title: "May 28, 2021",
  },
  {
    id: 9,
    img_url: "../imgs/inFilimIMg/infilim9.jpg",
    text: "New Order",
    title: "May 21, 2021",
  },
  {
    id: 10,
    img_url: "../imgs/inFilimIMg/infilim10.jpg",
    text: "Riders of Justice",
    title: "May 21, 2021",
  },
];
const arrImgDefault = [
  {
    id: 0,
    img_url: "../imgs/filmImg/photoFilm.jpg",
    text: "The Flash",
    title: "Oct 07, 2014",
  },
  {
    id: 1,
    img_url: "../imgs/filmImg/photoFilm1.jpg",
    text: "The Good Doctor",
    title: "Sep 25, 2017",
  },
  {
    id: 2,
    img_url: "../imgs/filmImg/photoFilm2.jpg",
    text: "Grey's Anatomy",
    title: "Mar 27, 2005",
  },
  {
    id: 3,
    img_url: "../imgs/filmImg/photoFilm3.jpg",
    text: "Superman & Lois",
    title: "Feb 23, 2021",
  },
  {
    id: 4,
    img_url: "../imgs/filmImg/photoFilm.jpg",
    text: "The Flash",
    title: "Oct 07, 2014",
  },
  {
    id: 5,
    img_url: "../imgs/filmImg/photoFilm1.jpg",
    text: "The Good Doctor",
    title: "Sep 25, 2017",
  },
  {
    id: 6,
    img_url: "../imgs/filmImg/photoFilm2.jpg",
    text: "Grey's Anatomy",
    title: "Mar 27, 2005",
  },
  {
    id: 7,
    img_url: "../imgs/filmImg/photoFilm3.jpg",
    text: "Superman & Lois",
    title: "Feb 23, 2021",
  },
  {
    id: 8,
    img_url: "../imgs/filmImg/photoFilm.jpg",
    text: "The Flash",
    title: "Oct 07, 2014",
  },
  {
    id: 9,
    img_url: "../imgs/filmImg/photoFilm1.jpg",
    text: "The Good Doctor",
    title: "Sep 25, 2017",
  },
  {
    id: 10,
    img_url: "../imgs/filmImg/photoFilm2.jpg",
    text: "Grey's Anatomy",
    title: "Mar 27, 2005",
  },
];
let clcikData1 = document.querySelector(".no_pad .selector_wrap #cilick");
let popularImg = document.querySelectorAll(".popular .image img");
let popularText = document.querySelectorAll(".popular .content h2");
let popularTitle = document.querySelectorAll(".popular .content p");

let bool = { is: true };
clcikData1.addEventListener("click", () => {
  if (bool.is) {
    for (let i = 0; i < popularImg.length; i++) {
      popularImg[i].src = arrImg[i].img_url;
      popularText[i].innerHTML = arrImg[i].text;
      popularTitle[i].innerHTML = arrImg[i].title;
    }
    bool.is = false;
  } else {
    for (let i = 0; i < popularImg.length; i++) {
      popularImg[i].src = arrImgDefault[i].img_url;
      popularText[i].innerHTML = arrImgDefault[i].text;
      popularTitle[i].innerHTML = arrImgDefault[i].title;
    }
    bool.is = true;
  }
});
