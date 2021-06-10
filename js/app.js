let searchBtn = document.querySelector("header .langIcon .searchIcon");
let searchInt = document.querySelector(".inputSearch input");
let searchBlock = document.querySelector(".inputSearch");
let search_results=document.querySelector('.show_search_true');
let showMovie=document.querySelector('#main1');
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


searchInt.addEventListener('change', (e)=>{
  e.preventDefault();
  searchInt.style.display='block';
  showMovie.style.display='none';
  search_results.style.display='block';
})
window.addEventListener('scroll', (e)=>{
  if(window.scrollY>15){
    searchBlock.style.top='0'
  }
  else {
    searchBlock.style.top='65px'
  }
})