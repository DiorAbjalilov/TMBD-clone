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
  getFetchSearch(searchInt.value)
})
window.addEventListener('scroll', (e)=>{
  if(window.scrollY>15){
    searchBlock.style.top='0'
  }
  else {
    searchBlock.style.top='65px'
  }
})


let value=searchInt.value

// function get fetch api
let serchHtmlBlock=document.querySelector('.search_results.movie')
let resultsMov=document.createElement('div');
serchHtmlBlock.appendChild(resultsMov)
resultsMov.className='results flex';

function getFetchSearch(value, cateygor='tv'){
  let url=`https://api.themoviedb.org/3/search/${cateygor}?api_key=${apiKey}&query=${value}`;
    fetch(url).then((res)=>res.json())
    .then((search)=>{
        let {results}=search;
        results.forEach(element => {
          console.log(element);
            let {poster_path, original_name, first_air_date, overview}=element
            Movies.getMovieImg(poster_path, original_name, first_air_date, overview);
        });
    }).catch((err)=>{
      console.log(err, "error com");
    })

    class Movies{
      static getMovieImg(poster_path, original_name, first_air_date, overview){
          fetch(`https://image.tmdb.org/t/p/w500${poster_path}`)
          .then((res) => res)
          .then((imges) => {
            let {url}=imges;
              let cardSearch=document.createElement('div');
              let wrapperSearch=document.createElement('div');
              let imageSearch=document.createElement('div');
              let detalisSearch=document.createElement('div');
              cardSearch.className='card v4 tight';
              wrapperSearch.className='wrapper';
              imageSearch.className='image';
              detalisSearch.className='details';

              resultsMov.appendChild(cardSearch);
              cardSearch.appendChild(wrapperSearch);
              wrapperSearch.appendChild(imageSearch);
              wrapperSearch.appendChild(detalisSearch);
              imageSearch.innerHTML=`
                <div class="poster">
                  <a class="result" href="#">
                      <img class="poster" src="${url}" alt="">
                  </a>
                </div>
              `;
              detalisSearch.innerHTML=`
                <div class="wrapper">
                  <div class="title">
                      <div>
                          <a href="#" class="result">
                              <h2>${original_name}</h2>
                          </a>
                      </div>
                      <span class="release_date">
                          ${first_air_date}
                      </span>
                  </div>
                </div>
                <div class="overview">
                    <p>
                        ${overview}
                    </p>
                </div>
              `;
          })
          .catch((err) => {
              console.log(err, 'error comunt');
          });
      }
  }
}


let serachDiv=document.querySelectorAll('.settings li');
let searchBlockDiv=document.querySelectorAll('.panel .search_results')
for (let i=0; i<serachDiv.length; i++){
  serachDiv[i].addEventListener('click', (e)=>{
    e.preventDefault();
    let categor=e.target.id;
    console.log(categor);
    for(let j=0; j<serachDiv.length; j++){
      serachDiv[j].className='';
    }
    serachDiv[i].className='selected';
    value=searchInt.value
    resultsMov.innerHTML='';
    getFetchSearch(value, categor);
  })
}