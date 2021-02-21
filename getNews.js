const getNews = async () => {
    fetch("https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=25", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7eb871839cmshdeae0929738b5e3p1d14fejsn61cd09bd04c0",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}

export default getNews;

