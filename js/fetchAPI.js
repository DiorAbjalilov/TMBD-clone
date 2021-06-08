const apiKey = "db625edffe159ea93eb6c0e7d83d7089";
let divCards=document.querySelector('.video  .column_content.flex.scroller.loaded');
let backgrTralImg=document.querySelector('.inner_content.bg_image.no_pad.video');
let divBlock = document.querySelector(".column_content.flex.scroller.loaded");
let options = {
  startAngle: -1.55,
  size: 35,
  fill: { color: "#21d07a" },
};

let url=`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

fetch(url)
  .then((res) => res.json())
  .then((movies) => {
    let { results } = movies;
    results.forEach((item) => {
        // console.log(item);
      let { poster_path, title, original_title, release_date, vote_average, backdrop_path } =
        item;
        Movies.getMovieImg(
            poster_path,
            title,
            original_title,
            release_date,
            vote_average,
            backdrop_path
            );
    });
  })
  .catch(function (err) {
    console.log(err, "error");
  });
class Movies {
  static getMovieImg(img_id, title, name, dataName, vote_average, backdrop_path) {
    fetch(`https://image.tmdb.org/t/p/w500${img_id}`)
      .then((res) => res)
      .then((imges) => {
        let { url } = imges;
        let divCardStyle = document.createElement("div");
        let divImage = document.createElement("div");
        let divContent = document.createElement("div");
        divCardStyle.className = "card style_1";
        divImage.className = "image";
        divContent.className = "content";
        divBlock.appendChild(divCardStyle);
        divCardStyle.appendChild(divImage);
        divCardStyle.appendChild(divContent);
        divImage.innerHTML = `
                <div class="wrapper">
                    <a href="#">
                        <img src="${url}" alt="${title}">
                    </a>
                </div>
                <div class="options">
                    <a href="#" class="no_click">
                        <div class="glyphicons_v2 circle-more white"></div>
                    </a>
                </div>
                `;
        divContent.innerHTML = `
                <div class="consensus tight">
                    <div class="outer_ring">
                        <div class="circle p${vote_average * 10}">
                            <div class="bar"></div>
                            <div class="box"><span></span></div>
                        </div>
                    </div>
                </div>
                <h2>
                    <a href="#">${name}</a>
                </h2>
                <p>${dataName}</p>
                        `;
        // console.log(divContent);
        this.getProgres(vote_average);
        this.getMovieTrales(backdrop_path, name, title)
      })
      .catch((err) => {
        console.log(err, "error comunt");
      });
  }
  static getProgres(vote_average) {
    $(".circle .bar")
      .circleProgress(options)
      .on("circle-animation-progress", function (event, progress, stepValue) {
        $(this)
          .parent()
          .find("span")
          .text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
    $(`.p${vote_average * 10} .bar`).circleProgress({
      value: (vote_average / 10).toFixed(2),
    });
  }
  static getMovieTrales(backdrop_path, name, title){
    fetch(`https://image.tmdb.org/t/p/w500${backdrop_path}`)
    .then((res) => res)
    .then((imges) => {
      let { url } = imges;
    //   console.log(url);
      let divCardsTral=document.createElement('div');
      let divImageTral=document.createElement('div');
      let divContenTral=document.createElement('div');
      divCardsTral.className='card video style_2 true';
      divImageTral.className='image';
      divContenTral.className='content';
      divCards.appendChild(divCardsTral)
      divCardsTral.appendChild(divImageTral);
      divCardsTral.appendChild(divContenTral);
      divImageTral.innerHTML=`
        <div class="wrapper">
            <a href="#" class="image play_trailer">
                <img src="${url}" alt="">
                <div class="play">
                    <span class="glyphicons_v2 play invert svg"></span>
                </div>
            </a>
        </div>
        <div class="options">
            <a href="#" class="no_click">
                <div class="glyphicons_v2 circle-more white"></div>
            </a>
        </div>
      `;
      divContenTral.innerHTML=`
        <h2>
            <a href="#">${name}</a>
        </h2>
        <h3>
            ${title}
        </h3>
      `
      let imgTreler = document.querySelectorAll(".style_2 .image .wrapper");
      for (let j = 0; j < imgTreler.length; j++) {
        imgTreler[j].addEventListener("mouseover", (e) => {
          let aa = String("." + e.target.parentElement.classList[1] + " " + "img");
          let urlImg = document.querySelectorAll(aa);
          let urlStr = String(urlImg[j].src);
          let backgImg = document.querySelector(".bg_image.video");
          backgImg.style.backgroundImage = "url(" + urlStr + ")";
        });
      }
      backgrTralImg.style.backgroundImage=`url(${url})`
  }).catch((err)=>{
      console.log(err, 'error');
  })
}
}
let url1=`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
let divTrendeng=document.querySelector('.trending .column_content.flex.scroller.loaded')
fetch(url1)
.then((res) => res.json())
.then((movie) => {
    let {results}=movie
      results.forEach((item)=>{
        //   console.log(item);
          let {poster_path, original_title, release_date}=item;
          let {vote_average}=item;
          MovieTrend.getProgres(vote_average);
          MovieTrend.getMovieTrenImg(poster_path, original_title, release_date, vote_average)
      })
}).catch((err)=>{
    console.log(err, 'lof error')
})

class MovieTrend{
    static getMovieTrenImg(poster_path, original_title, release_date, vote_average){
        fetch(`https://image.tmdb.org/t/p/w500${poster_path}`)
            .then((res) => res)
            .then((imges) => {
                let { url } = imges;
                let trendCard=document.createElement('div');
                let trendCardImg=document.createElement('div');
                let trendCardCont=document.createElement('div');
                trendCard.className='card style_1';
                trendCardImg.className='image';
                trendCardCont.className='content';
                divTrendeng.appendChild(trendCard);
                trendCard.appendChild(trendCardImg);
                trendCard.appendChild(trendCardCont);
                trendCardImg.innerHTML=`
                    <div class="wrapper">
                        <a href="#" class="image">
                            <img class="poster" src="${url}" alt="">
                        </a>
                    </div>
                    <div class="options">
                        <a href="#" class="no_click">
                            <div class="glyphicons_v2 circle-more white"></div>
                        </a>
                    </div>
                `
                trendCardCont.innerHTML=`
                <div class="consensus tight">
                    <div class="outer_ring">
                        <div class="circle p${vote_average*10}">
                            <div class="bar"></div>
                            <div class="box"><span></span></div>
                        </div>
                    </div>
                </div>
                <h2>
                    <a href="#">${original_title}</a>
                </h2>
                <p>
                    ${release_date}
                </p>
                `;
            })
            // this.getProgres(vote_average);
        }
        static getProgres(vote_average) {
            $(".circle .bar")
            .circleProgress(options)
            .on("circle-animation-progress", function (event, progress, stepValue) {
                $(this)
                .parent()
                .find("span")
                .text(String(stepValue.toFixed(2).substr(2)) + "%");
            });
            $(`.p${vote_average * 10} .bar`).circleProgress({
                value: (vote_average / 10).toFixed(2),
            });
        }
    }