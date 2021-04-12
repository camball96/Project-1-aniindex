
searchAnime("gundam");


const base_url = "https://api.jikan.moe/v3";

function searchAnime(query) {

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    console.log(query);

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
    .then(response=>response.json())
    .then(updateDom)
    .catch(err=>console.e(err.message));
}

function updateDom(data){
    data.results.forEach(anime=>console.log(data));
}

function pageLoaded(){
    const form = document.getElementById('search_btn');
    form.addEventListener("submit", searchAnime);
}
/*
function searchAnime(query) {
    fetch("https://api.jikan.moe/v3/search/anime?q=" + query)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });
}

searchAnime("gundam");
*/
//

    // fetch("https://hummingbirdv1.p.rapidapi.com/anime", {
    //  headers: {
    //     "x-rapidapi-key": "5a5ee65267msh299c16e466936b0p1a0102jsn2f9566139b24",
    //      	"x-rapidapi-host": "hummingbirdv1.p.rapidapi.com",
    //          "useQueryString": true,
    //          "mode": 'no-cors'
    //  }
    // })
    //     .then(function (result) {
    //         console.log(result);
    //         return result.json()
    //     }).then(function(data)
    //     {
    //         console.log(data)
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });
// });

// var unirest = require("unirest");

// var req = unirest("GET", "https://hummingbirdv1.p.rapidapi.com/anime/steins-gate");

// req.headers({
// 	"x-rapidapi-key": "5a5ee65267msh299c16e466936b0p1a0102jsn2f9566139b24",
// 	"x-rapidapi-host": "hummingbirdv1.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });

