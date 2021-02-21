const getMovie = async () => {
    try {
        const res = await fetch(`http://www.omdbapi.com/?i=tt1285016&apikey=e20eb485`);
        const movie = await res.json();

        return movie;
    } catch (err) {
        console.error(err.message);
    }
}

export default getMovie;