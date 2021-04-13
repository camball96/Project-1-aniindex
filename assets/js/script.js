const base_url = "https://api.jikan.moe/v3";
let searchInput = document.querySelector(".searchBtn");


searchInput.addEventListener('click', searchAnime);
function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");


    
    fetch(`${base_url}/search/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.log(err.message));
}
function updateDom(data){

    const searchResults = document.getElementById('search-results');

    
    const animeByCategories = data.results
    /* This will be organising the anime by category */
    .reduce((acc,anime)=>{

        const {type} = anime;
        if(acc[type] === undefined) acc[type] = [];
        acc[type].push(anime);
        return acc;



    }, {});
    /* Each key will be creating a 'row' */
    searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

        const animeHTML = animeByCategories[key]
        /* This will organise the data by episodes, to make it easier to sift through the data */
        .sort((a,b)=>a.episodes-b.episodes)
        /* This function will be fetching the data from the search and placing them into the cards */
        .map(anime=>{
            return `
              <div class="card">
                <div class="card-image">
                  <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>${anime.synopsis}</p>
                </div>
                <div class="card-action">
                  <a href="${anime.url}">More Info</a>
                </div>
              </div>
            `
        }).join("");

        /* This function will display the categories, for example, TV, Movie, ETC */
        return `
            <section>
                <h3>${key.toUpperCase()}</h3>
                <div class ="row">${animeHTML}</div>
            </section>
        `
    }).join("");
     
}
function pageLoaded(){
   const form = document.getElementById('search_form');
   form.addEventListener("submit", searchAnime);
}


window.addEventListener("load", pageLoaded)
function getanimequote(){
    const query = document.getElementById("search").value;

fetch('https://animechan.vercel.app/api/quotes/anime?title='+query)
.then(response => response.json())
.then(quotes => console.log(quotes[1].quote)
)
}
