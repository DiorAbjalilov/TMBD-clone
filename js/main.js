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
      aBtn[i].id=1;
      backg.style.left = "0px";
      backg.style.width = "100%";
    } else if (i == 1) {
      backg.style.left = "85px";
      backg.style.width = "127px";
      aBtn[i].classList.add("selected");
      aBtn[i].id=2;
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


