const apiKey = "db625edffe159ea93eb6c0e7d83d7089";
let divBlock = document.querySelector(".column_content.flex.scroller.loaded");

let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

fetch(url)
  .then((res) => res.json())
  .then((movies) => {
    let { results } = movies;
    results.forEach((item) => {
      let { poster_path } = item;
      // console.log(poster_path);
      Movies.getMovieImg(poster_path);
    });
  })
  .catch(function (err) {
    console.log(err, "error");
  });
let i = 0;
class Movies {
  static getMovieImg(img_id) {
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
                        <img src="${url}" alt="">
                    </a>
                </div>
                <div class="options">
                    <a href="#" class="no_click">
                        <div class="glyphicons_v2 circle-more white"></div>
                    </a>
                </div>
                `;
            })
            .catch((err) => {
                console.log(err, "error comunt");
            });
        }
    }
    console.log(divBlock);
