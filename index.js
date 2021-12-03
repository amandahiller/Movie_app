// network request
const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'f7a3b638',
            s: searchTerm
        }
    });

    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = event => {  
    const movies = fetchData(event.target.value);
    
    for (let movie of movies) {
        const div = document.createElement('div');

        div.innerHTML = `
         <img src=${movie.Poster} />
         <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
};
input.addEventListener('input', debounce(onInput, 500));
