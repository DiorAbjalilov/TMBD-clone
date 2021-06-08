const apiKey = "db625edffe159ea93eb6c0e7d83d7089";
let divBlock = document.querySelector(".column_content.flex.scroller.loaded");
let options = {
    startAngle: -1.55,
    size: 35,
    // value: 0.77,
    fill: { color: "#21d07a" },
  };

let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

fetch(url)
  .then((res) => res.json())
  .then((movies) => {
    let { results } = movies;
    results.forEach((item) => {
      let { poster_path, title, original_title, release_date, vote_average } = item;
    //   console.log(item);
      Movies.getMovieImg(poster_path, title, original_title, release_date, vote_average);
    });
  })
  .catch(function (err) {
    console.log(err, "error");
  });
let i = 0;
class Movies {
  static getMovieImg(img_id, title, name, dataName, vote_average) {
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
                        <div class="circle p${vote_average*10}">
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
                        this.getProgres(vote_average)
  
            })
            .catch((err) => {
                console.log(err, "error comunt");
            });
        }
        static getProgres(vote_average){
            $(".circle .bar")
            .circleProgress(options)
            .on("circle-animation-progress", function (event, progress, stepValue) {
            $(this)
                .parent()
                .find("span")
                .text(String(stepValue.toFixed(2).substr(2)) + "%");
            });
            $(`.p${vote_average*10} .bar`).circleProgress({
                value: (vote_average/10).toFixed(2)
            });
        }
    }
    console.log(divBlock);
