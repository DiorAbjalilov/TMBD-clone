let searchBtn = document.querySelector("header .langIcon .searchIcon");
let searchInt = document.querySelector(".inputSearch input");
let searchBlock = document.querySelector(".inputSearch");
let ros = { is: true };

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (ros.is) {
    searchBlock.style.display = "block";
    searchBtn.innerHTML = '<i class="fas fa-times"></i>';
    searchBtn.style.color = "#fff";
    searchInt.focus();
    ros.is = false;
  } else {
    ros.is = true;
    searchBtn.style.color = "#01b4e4";
    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    searchBlock.style.display = "none";
  }
});

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
$(".p82 .bar").circleProgress({
  value: 0.82,
});
