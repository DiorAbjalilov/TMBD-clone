let searchBtn = document.querySelector("header .langIcon .searchIcon");
let searchInt = document.querySelector(".inputSearch input");
let searchBlock = document.querySelector(".inputSearch");
console.log(searchBtn);
console.log(searchInt);
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
