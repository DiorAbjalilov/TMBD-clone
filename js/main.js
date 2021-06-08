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
const dataBaner = [
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
  let imgs = dataBaner[rand].img_url;
  bannerImg.style.backgroundImage =
    "linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0) 100%), url(" +
    imgs +
    ")";
});

let bool = { is: true };

// trelling img
const BannerImgDefault = [
  {
    id: 1,
    img_url: "../imgs/trelImg/filimtr.jpg",
    text: "Lucifer",
    title: "Lucifer Season 5 Part 2 | Official Trailer | Netflix",
  },
  {
    id: 0,
    img_url: "../imgs/trelImg/filimtr0.jpg",
    text: "The Flash",
    title: "The Flash | Season 7 Episode 9 | Timeless Promo | The CW",
  },
  {
    id: 2,
    img_url: "../imgs/trelImg/filimtr1.jpg",
    text: "The Good Doctor",
    title: "Sep 25, 2017",
  },
  {
    id: 3,
    img_url: "../imgs/trelImg/filimtr2.jpg",
    text: "High School Musical: The Musical: The Series",
    title:
      "High School Musical: The Musical: The Series Season 2 | Official Trailer | Disney+",
  },
  {
    id: 4,
    img_url: "../imgs/trelImg/filimtr3.jpg",
    text: "You Knock on My Door",
    title: "Sen Çal Kapımı 33. Bölüm 1. Fragmanı",
  },
  {
    id: 5,
    img_url: "../imgs/trelImg/filimtr4.jpg",
    text: "The Bad Batch",
    title: "Star Wars: The Bad Batch | Official Trailer | Disney+",
  },
  {
    id: 6,
    img_url: "../imgs/trelImg/filimtr5.jpg",
    text: "Superman & Lois",
    title:
      "Superman & Lois | Season 1 Episode 5 | The Best of Smallville Promo",
  },
  {
    id: 7,
    img_url: "../imgs/trelImg/filimtr6.jpg",
    text: "The Flash",
    title: "The Flash | Season 7 Episode 9 | Timeless Promo | The CW",
  },
  {
    id: 8,
    img_url: "../imgs/trelImg/filimtr7.jpg",
    text: "The Flash",
    title: "The Flash | Season 7 Episode 9 | Timeless Promo | The CW",
  },
];
const BannerImgNew = [
  {
    id: 0,
    img_url: "../imgs/inFilimTr/inFilimT.jpg",
    text: "Cruella",
    title: "The Beginning",
  },
  {
    id: 1,
    img_url: "../imgs/inFilimTr/inFilimT1.jpg",
    text: "Feral State",
    title: "Feral State | Official Trailer (HD) | Vertical Entertainment",
  },
  {
    id: 2,
    img_url: "../imgs/inFilimTr/inFilimT2.jpg",
    text: "Riders of Justice",
    title: "Riders of Justice - Official Trailer",
  },
  {
    id: 3,
    img_url: "../imgs/inFilimTr/inFilimT3.jpg",
    text: "Benny Loves You",
    title: "Benny Loves You (2021) Official Trailer",
  },
  {
    id: 4,
    img_url: "../imgs/inFilimTr/inFilimT4.jpg",
    text: "Endangered Species",
    title:
      "Endangered Species (2021 Movie) Official Trailer – Rebecca Romijn, Jerry O'Connell",
  },
  {
    id: 5,
    img_url: "../imgs/inFilimTr/inFilimT5.jpg",
    text: "Those Who Wish Me Dead",
    title: "Those Who Wish Me Dead - Official Trailer",
  },
  {
    id: 6,
    img_url: "../imgs/inFilimTr/inFilimT6.jpg",
    text: "Spiral: From the Book of Saw",
    title:
      "Spiral: From the Book of Saw (2021 Movie) Official Trailer – Chris Rock, Samuel L. Jackson",
  },
  {
    id: 7,
    img_url: "../imgs/inFilimTr/inFilimT7.jpg",
    text: "Wrath of Man",
    title: "Official Trailer",
  },
  {
    id: 8,
    img_url: "../imgs/inFilimTr/inFilimT8.jpg",
    text: "In the Earth",
    title: "IN THE EARTH - Official Trailer - In Theaters April 23",
  },
];

let clcikData2 = document.querySelector(".video .selector");
let trelingImg = document.querySelectorAll(".video .card.video a img");
let trelingText = document.querySelectorAll(".video .card.video .content h2 a");
let trelingTitle = document.querySelectorAll(".video .card.video .content h3");
//
clcikData2.addEventListener("click", () => {
  if (bool.is) {
    for (let i = 0; i < trelingImg.length; i++) {
      trelingImg[i].src = BannerImgNew[i].img_url;
      trelingText[i].innerHTML = BannerImgNew[i].text;
      trelingTitle[i].innerHTML = BannerImgNew[i].title;
    }
    bool.is = false;
  } else {
    for (let i = 0; i < trelingImg.length; i++) {
      trelingImg[i].src = BannerImgDefault[i].img_url;
      trelingText[i].innerHTML = BannerImgDefault[i].text;
      trelingTitle[i].innerHTML = BannerImgDefault[i].title;
    }
    bool.is = true;
  }
});

// terlier filim handler
const trenDefault = [
  {
    img_url: "../imgs/popularImgs/popular.jpg",
    text: "F9",
    title: "May 19, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular1.jpg",
    text: "Friends",
    title: "Sep 22, 1994",
  },
  {
    img_url: "../imgs/popularImgs/popular2.jpg",
    text: "Wrath of Man",
    title: "Apr 22, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular3.jpg",
    text: "The Unholy",
    title: "Mar 31, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular.jpg",
    text: "F9",
    title: "Apr 22, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular5.jpg",
    text: "Army of the Dead",
    title: "May 14, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular6.jpg",
    text: "Friends: The Reunion",
    title: "May 27, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular7.jpg",
    text: "Godzilla vs. Kong",
    title: "Mar 24, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular3.jpg",
    text: "Cruella",
    title: "May 26, 2021",
  },
  {
    img_url: "../imgs/popularImgs/popular1.jpg",
    text: "F9",
    title: "May 19, 2021",
  },
];
const trenNew = [
  {
    img_url: "../imgs/popularImgs/newimg/trennew.jpg",
    text: "Zack Snyder's Justice League",
    title: "Mar 18, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew1.jpg",
    text: "Love, Death & Robots",
    title: "Mar 15, 2019",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew2.jpg",
    text: "Tom & Jerry",
    title: "Feb 11, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew3.jpg",
    text: "The Mitchells vs. The Machines",
    title: "Apr 22, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew4.jpg",
    text: "The Bad Batch",
    title: "May 04, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew5.jpg",
    text: "Tom Clancy's Without Remorse",
    title: "Apr 29, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew6.jpg",
    text: "Raya and the Last Dragon",
    title: "Mar 03, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew7.jpg",
    text: "Oxygen",
    title: "May 12, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew8.jpg",
    text: "The Woman in the Window",
    title: "May 14, 2021",
  },
  {
    img_url: "../imgs/popularImgs/newimg/trennew9.jpg",
    text: "F9",
    title: "May 19, 2021",
  },
];
//
let clcikData3 = document.querySelector(
  "section.trending .selector_wrap .selector"
);
let trenImg = document.querySelectorAll(".trending .image img");
let trenText = document.querySelectorAll(".trending .content h2 a");
let trenTitle = document.querySelectorAll(".trending .content p");
//
clcikData3.addEventListener("click", () => {
  if (bool.is) {
    for (let i = 0; i < trenImg.length; i++) {
      trenImg[i].src = trenNew[i].img_url;
      trenText[i].innerHTML = trenNew[i].text;
      trenTitle[i].innerHTML = trenNew[i].title;
    }
    bool.is = false;
  } else {
    for (let i = 0; i < trenImg.length; i++) {
      trenImg[i].src = trenDefault[i].img_url;
      trenText[i].innerHTML = trenDefault[i].text;
      trenTitle[i].innerHTML = trenDefault[i].title;
    }
    bool.is = true;
  }
});
