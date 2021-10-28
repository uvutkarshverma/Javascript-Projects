let newsCards = document.getElementById("news-cards");

let xhr = new XMLHttpRequest();
/* let url = `https://newsapi.org/v2/top-headlines/?sources=google-news&apiKey=ff7082bfbad64a5fb33b2391401d4df8`; */
/* let url = `https://newsapi.org/v2/top-headlines/?sources=google-news-in&apiKey=ff7082bfbad64a5fb33b2391401d4df8`; */
let url = `https://newsapi.in/newsapi/news.php?key=OLm0E96sdvboL2mbqhhqLGlsBUFjWv&category=hindi_career`;
xhr.open("get", url, true);
xhr.onprogress = function () {
    let loader = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
  newsCards.innerHTML = loader;
}
xhr.onload = function () {
    setTimeout(() => {
        newsCards.innerHTML = "";
        if (this.status == 200) {
            /* let json = JSON.parse(this.responseText);
            let articles = json["articles"]; */
            let json = JSON.parse(this.responseText);
            let articles = json["News"];
            for (news in articles) {
                let newsList = articles[news];
                let newsCard = ` <div class="card my-3" style="width: 18rem;">
                <img src="${newsList["image"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${newsList["title"]}</h5>
                <p class="card-text">${newsList["description"]}</p>
                <a href="${newsList["url"]}" class="btn btn-primary">Read More</a>
                </div>
            </div>`
            newsCards.innerHTML += newsCard;



        }
        
        
    } else {
        console.log("failed loading")
    }
}, 2000);
}
xhr.send();




